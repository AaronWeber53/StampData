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
        public int ID { get; set; }
        public string ScottNumber { get; set; }
        public string Country { get; set; }
        public short Year { get; set; }
        public string Description { get; set; }


        public bool Equals(Stamp? other)
        {
            return this.Country.Equals(other.Country, StringComparison.OrdinalIgnoreCase) && this.ScottNumber == other.ScottNumber;
        }
    }
}
