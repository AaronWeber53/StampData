using DAL.DataAccess;
using DAL.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace StampData.Server.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("MyPolicy")]
    [ApiController]
    public class StampController : ControllerBase
    {
        private readonly ILogger<StampController> _logger;

        public StampController(ILogger<StampController> logger)
        {
            _logger = logger;
        }

        // GET: <StampController>

        public class StampFilter
        {
            public string? ScottNumber { get; set; } = null;
            public short? YearLow { get; set; } = null;
            public short? YearHigh { get; set; } = null;
            public string? Country { get; set; } = null;
        }
        //[HttpGet]
        //public IEnumerable<Stamp> Get()
        //{
        //    return StampInformationList.Get.StampList.OrderBy(s => s.ScottNumber);
        //}
        
        [HttpGet]
        public IEnumerable<Stamp> Get([FromQuery] StampFilter stampFilter)
        {
            var results = from s in StampInformationList.Get.StampList
                          where 
                          (string.IsNullOrEmpty(stampFilter.Country) || stampFilter.Country.Equals(s.Country, StringComparison.OrdinalIgnoreCase)) &&
                          (string.IsNullOrEmpty(stampFilter.ScottNumber) || stampFilter.ScottNumber.Equals(s.ScottNumber, StringComparison.OrdinalIgnoreCase)) &&
                          (stampFilter.YearLow == null || s.Year > stampFilter.YearLow) &&
                          (stampFilter.YearHigh == null || s.Year < stampFilter.YearHigh)
                          select s;

            return results.OrderBy(s => s.ScottNumber);
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

        public class StampForm : Stamp
        {
            public IFormFile? image { get; set; }
        }

        // POST <StampController>
        [HttpPost]
        public IActionResult Post([FromForm] StampForm stamp)
        {
            if (stamp.image != null)
            {
                byte[] fileBytes = null;
                using (var stream = new MemoryStream())
                {
                    stamp.image.CopyTo(stream);
                    fileBytes = stream.ToArray();
                }
                if (!stamp.ImportFile(fileBytes, stamp.image.FileName, stamp.image.ContentType))
                {
                    return BadRequest();
                }
            }
            StampInformationList.Get.AddStamp(stamp);
            return Ok();
        }

        // PUT <StampController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromForm] StampForm stamp)
        {
            Stamp foundStamp = StampInformationList.Get.StampList.FirstOrDefault(x => x.ID.Value == id);
            if (foundStamp == null)
            {
                return BadRequest();
            }

            if (stamp.image != null)
            {
                byte[] fileBytes = null;
                using (var stream = new MemoryStream())
                {
                    stamp.image.CopyTo(stream);
                    fileBytes = stream.ToArray();
                }
                if (!stamp.ImportFile(fileBytes, stamp.image.FileName, stamp.image.ContentType))
                {
                    return BadRequest();
                }
                foundStamp.ImageUrl = stamp.ImageUrl;
            }
            StampInformationList.Get.UpdateStamp(foundStamp, stamp);
            

            return Ok();
        }

        // DELETE <StampController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            StampInformationList.Get.DeleteStamp(id);
        }

        [HttpGet("GetImage/{id}")]
        public IActionResult GetImage(int id)
        {
            Stamp stamp = StampInformationList.Get.StampList.FirstOrDefault(s => s.ID == id);

            if (stamp.ImageUrl != null)
            {
                Byte[] b = System.IO.File.ReadAllBytes(stamp.ImageUrl);   // You can use your own method over here.         
                string type = Path.GetExtension(stamp.ImageUrl);
                return File(b, $"image/{type}");
            }
            return Ok();
        }
    }
}
