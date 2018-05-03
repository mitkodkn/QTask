using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace QTask.Models
{
    public class Project
    {
        public String Name { get; set; }
        public String Description { get; set; }

        public long ProjectId { get; set; }

        public string ManagerId { get; set; }

        //[ForeignKey("ManagerId")]
        public virtual ApplicationUser Manager { get; set; }

        public virtual List<Task> Tasks { get; set; }
    }
}
