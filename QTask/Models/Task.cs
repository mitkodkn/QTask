using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace QTask.Models
{
    public class Task
    {
        public long TaskId { get; set; }
        public string Name { get; set; }
        public bool IsCompleted { get; set; }

        public long ProjectId { get; set; }
        public string ExecutorId { get; set; }

        public virtual Project Project { get; set; }
        public virtual ApplicationUser Executor { get; set; }
    }
}
