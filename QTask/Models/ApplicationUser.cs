using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace QTask.Models
{
    public class ApplicationUser : IdentityUser
    {
        public virtual List<Project> Projects { get; set; }
    }
}
