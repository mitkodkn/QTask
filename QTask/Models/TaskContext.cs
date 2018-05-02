using Microsoft.EntityFrameworkCore;

namespace QTask.Models
{
    public class ProjectTaskDbContext : DbContext
    {
        public ProjectTaskDbContext(DbContextOptions<ProjectTaskDbContext> options)
            : base(options)
        {
        }

        public DbSet<Task> Tasks { get; set; }
    }
}
