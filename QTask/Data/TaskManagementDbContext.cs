using Microsoft.EntityFrameworkCore;

namespace QTask.Models
{
    public class TaskManagementDbContext : DbContext
    {
        public TaskManagementDbContext(DbContextOptions<TaskManagementDbContext> options)
            : base(options)
        {
        }

        public DbSet<Task> Tasks { get; set; }
        public DbSet<Project> Projects { get; set; }
    }
}
