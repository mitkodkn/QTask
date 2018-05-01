using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using QTask.Models;

namespace QTask.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class TaskController : Controller
    {
        private readonly TaskContext _context;

        public TaskController(TaskContext context)
        {
            _context = context;

            if (_context.Tasks.Count() == 0)
            {
                _context.Tasks.Add(new Task { Name = "First Task" });
                _context.SaveChanges();
            }
        }

        // GET: api/Task
        [HttpGet]
        public IEnumerable<Task> Get()
        {
            return _context.Tasks.ToList();
        }

        // GET: api/Task/5
        [HttpGet("{id}", Name = "GetTask")]
        public IActionResult GetById(int id)
        {
            var task = _context.Tasks.FirstOrDefault(t => t.Id == id);

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

            return CreatedAtRoute("GetTask", new { id = task.Id }, task);
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
