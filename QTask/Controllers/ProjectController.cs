using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using QTask.Models;

namespace QTask.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ProjectController : Controller
    {
        private readonly TaskManagementDbContext _context;

        public ProjectController(TaskManagementDbContext context)
        {
            _context = context;

            if (_context.Tasks.Count() == 0)
            {
                _context.Tasks.Add(new Task { Name = "First Task" });

                //_context.Projects.Add(new Project
                //{
                //    Name = "Project 1",
                //    Description = "First project description",
                //    ManagerId = 1
                //});

                _context.SaveChanges();
            }
        }

        // GET: api/Project
        [HttpGet]
        public IEnumerable<Project> Get()
        {
            return _context.Projects.ToList();
        }

        // GET: api/Project/5
        [HttpGet("{id}", Name = "GetProject")]
        public IActionResult GetById(int id)
        {
            var project = _context.Projects.FirstOrDefault(t => t.Id == id);

            if (project == null)
            {
                return NotFound();
            }

            return new ObjectResult(project);
        }

        // POST: api/Project
        [HttpPost]
        public IActionResult Post([FromBody]Project project)
        {
            _context.Projects.Add(project);
            _context.SaveChanges();

            return CreatedAtRoute("GetTask", new { id = project.Id }, project);
        }

        // PUT: api/Project/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody]Project project)
        {
            var foundProject = _context.Projects.Find(id);

            if (foundProject == null)
            {
                return NotFound();
            }

            foundProject.Name = project.Name;
            foundProject.Description = project.Description;
            foundProject.ManagerId = project.ManagerId;

            _context.Projects.Update(foundProject);
            _context.SaveChanges();

            return NoContent();
        }

        // DELETE: api/Project/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var project = _context.Projects.Find(id);

            if (project == null)
            {
                return NotFound();
            }

            _context.Projects.Remove(project);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
