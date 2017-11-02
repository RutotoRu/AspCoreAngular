using Microsoft.AspNetCore.Mvc;

namespace Tuto.mvc.Controllers
{
    public class HomeController : Controller
    {
        // GET
        [Route("home")]
        public IActionResult Index()
        {
            return View();
        }
    }
}