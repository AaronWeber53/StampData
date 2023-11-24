using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
    public class Stamp : IEquatable<Stamp>
    {
        [JsonProperty(PropertyName = "id")]
        public int ID { get; set; }
        [JsonProperty(PropertyName = "scottNumber")]
        public string ScottNumber { get; set; }
        [JsonProperty(PropertyName = "country")]
        public string Country { get; set; }
        [JsonProperty(PropertyName = "year")]
        public short Year { get; set; }
        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }
        

        public bool Equals(Stamp? other)
        {
            return this.Country.Equals(other.Country, StringComparison.OrdinalIgnoreCase) && this.ScottNumber == other.ScottNumber;
        }
    }
}
