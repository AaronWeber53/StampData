using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace DAL.Models
{
    public class Stamp : IEquatable<Stamp>
    {
        [JsonProperty(PropertyName = "id")]
        public int? ID { get; set; }
        [JsonProperty(PropertyName = "scottNumber")]
        public string? ScottNumber { get; set; }
        [JsonProperty(PropertyName = "country")]
        public string? Country { get; set; }
        [JsonProperty(PropertyName = "year")]
        public short? Year { get; set; }
        [JsonProperty(PropertyName = "description")]
        public string? Description { get; set; }
        [JsonProperty(PropertyName = "imageUrl")]
        public string? ImageUrl { get; set; }

        public bool Equals(Stamp? other)
        {
            bool blankRecord = (ScottNumber == null && other.ScottNumber == null) || (Country == null && other.Country == null);
            return blankRecord || (this.Country?.Equals(other.Country, StringComparison.OrdinalIgnoreCase) ?? false) && this.ScottNumber == other.ScottNumber;
        }

        private const string StampFileDirectory = @"./json/images/";
        public bool ImportFile(byte[] bytes, string fileName, string contentType)
        {
            Directory.CreateDirectory(StampFileDirectory);
            string filePath = @$"{StampFileDirectory}/{fileName}";

            int counter = 0;
            while (Path.Exists(filePath))
            {
                filePath = @$"{StampFileDirectory}/{counter++}{fileName}";
            }

            using (var ms = new MemoryStream(bytes))
            {
                using (var fs = new FileStream(filePath, FileMode.Create))
                {
                    ms.WriteTo(fs);                    
                }
            }

            if (File.Exists(filePath))
            {
                ImageUrl = filePath;                
                return true;
            }
            return false;
        }
    }
}
