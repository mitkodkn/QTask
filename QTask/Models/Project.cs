using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QTask.Models
{
    public class Project
    {
        public long Id { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
        public long ManagerId { get; set; }

        public virtual ApplicationUser Manager { get; set; }
    }
}
