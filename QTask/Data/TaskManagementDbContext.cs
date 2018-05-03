using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace QTask.Models
{
    public class TaskManagementDbContext : DbContext
    {
        public TaskManagementDbContext(DbContextOptions<TaskManagementDbContext> options)
            : base(options)
        {    
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Task>()
                .ToTable("Tasks")
                .HasOne(task => task.Project)
                .WithMany(project => project.Tasks)
                .HasForeignKey(task => task.ProjectId);

            modelBuilder.Entity<Project>()
                .ToTable("Projects")
                .HasMany(project => project.Tasks)
                .WithOne(task => task.Project)
                .HasForeignKey(task => task.ProjectId);

            modelBuilder.Entity<ApplicationUser>()
                .HasMany(user => user.Projects)
                .WithOne(project => project.Manager)
                .HasForeignKey(project => project.ManagerId);

            modelBuilder.Entity<Project>()
                .HasOne(project => project.Manager)
                .WithMany(user => user.Projects)
                .HasForeignKey(project => project.ManagerId);

            modelBuilder.Entity<Task>()
                .HasOne(task => task.Executor)
                .WithMany(user => user.Tasks)
                .HasForeignKey(task => task.ExecutorId);

            modelBuilder.Entity<ApplicationUser>()
                .HasMany(user => user.Tasks)
                .WithOne(task => task.Executor)
                .HasForeignKey(task => task.ExecutorId);
        }

        public DbSet<Task> Tasks { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<ApplicationUser> Users { get; set; }
    }
}
