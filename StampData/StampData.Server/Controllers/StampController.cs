using DAL.DataAccess;
using DAL.Models;
using Microsoft.AspNetCore.Mvc;

namespace StampData.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StampController : ControllerBase
    {
        private readonly ILogger<StampController> _logger;

        public StampController(ILogger<StampController> logger)
        {
            _logger = logger;
        }

        // GET: <StampController>
        [HttpGet]
        public IEnumerable<Stamp> Get()
        {
            return StampInformationList.Get.StampList;
        }

        // GET <StampController>/5
        [HttpGet("{id}")]
        public Stamp Get(int id)
        {
            
            return StampInformationList.Get.StampList.FirstOrDefault(s => s.ID == id);
        }
        
        [HttpGet("{scottNumber}/{country}")]
        public Stamp Get(string scottNumber, string country)
        {            
            return StampInformationList.Get.StampList.FirstOrDefault(s => s.ScottNumber == scottNumber && s.Country.Equals(country, StringComparison.OrdinalIgnoreCase));
        }

        // POST <StampController>
        [HttpPost]
        public void Post([FromForm] Stamp stamp)
        {
            StampInformationList.Get.AddStamp(stamp);
        }

        // PUT <StampController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Stamp value)
        {
        }

        // DELETE <StampController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            StampInformationList.Get.DeleteStamp(id);
        }
    }
}
