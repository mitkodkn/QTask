using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QTask.Models;

namespace QTask.Controllers
{
    public class HelperController : Controller
    {
        private readonly TaskManagementDbContext _context;

        public HelperController(TaskManagementDbContext context)
        {
            _context = context;
        }

        public string Index()
        {
            _context.Database.ExecuteSqlCommand("delete from Projects");
            return "deleted";
        }
    }
}