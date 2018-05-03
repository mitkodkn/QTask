using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QTask.Models;

namespace QTask.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class TaskController : Controller
    {
        private readonly TaskManagementDbContext _context;

        public TaskController(TaskManagementDbContext context)
        {
            _context = context;

            if (_context.Tasks.Count() == 0)
            {
                //_context.Tasks.Add(new Task { Name = "First Task" });
                //_context.SaveChanges();
            }
        }

        // GET: api/Task
        [HttpGet]
        public IEnumerable<Task> Get()
        {
            return _context.Tasks
                .Include(t => t.Executor)
                .ToList();
        }

        // GET: api/Task/5
        [HttpGet("{id}", Name = "GetTask")]
        public IActionResult GetById(long id)
        {
            var task = _context.Tasks
                .Include(t => t.Project)
                .Include(t => t.Executor)
                .FirstOrDefault(t => t.TaskId == id);

            if (task == null)
            {
                return NotFound();
            }

            return new ObjectResult(task);
        }

        // POST: api/Task
        [HttpPost]
        public IActionResult Post([FromBody]Task task)
        {
            _context.Tasks.Add(task);
            _context.SaveChanges();

            return new ObjectResult(task);
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody]Task task)
        {
            var foundTask = _context.Tasks.Find(id);

            if (foundTask == null)
            {
                return NotFound();
            }

            foundTask.IsCompleted = task.IsCompleted;
            foundTask.Name = task.Name;

            _context.Tasks.Update(foundTask);
            _context.SaveChanges();

            return NoContent();
        }

        // DELETE: api/Task/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var task = _context.Tasks.Find(id);

            if (task == null)
            {
                return NotFound();
            }

            _context.Tasks.Remove(task);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
