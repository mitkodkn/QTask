using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace QTask.Models
{
    public class ApplicationUser : IdentityUser
    {
        [JsonIgnore]
        public override string PasswordHash { get => base.PasswordHash; set => base.PasswordHash = value; }

        [JsonIgnore]
        public override string SecurityStamp { get => base.SecurityStamp; set => base.SecurityStamp = value; }

        [JsonIgnore]
        public override string ConcurrencyStamp { get => base.ConcurrencyStamp; set => base.ConcurrencyStamp = value; }

        [JsonIgnore]
        public override DateTimeOffset? LockoutEnd { get => base.LockoutEnd; set => base.LockoutEnd = value; }

        [JsonIgnore]
        public override int AccessFailedCount { get => base.AccessFailedCount; set => base.AccessFailedCount = value; }

        [JsonIgnore]
        public override string NormalizedUserName { get => base.NormalizedUserName; set => base.NormalizedUserName = value; }

        [JsonIgnore]
        public override string NormalizedEmail { get => base.NormalizedEmail; set => base.NormalizedEmail = value; }

        public virtual List<Project> Projects { get; set; }
        public virtual List<Task> Tasks { get; set; }
    }
}
