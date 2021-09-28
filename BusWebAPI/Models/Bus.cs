using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusWebAPI.Models
{
    public class Bus
    {
        public int Id { get; set; }

        public string Source { get; set; }

        public string Destination { get; set; }

        public float Rate { get; set; }

        public string Type{ get; set; }
    }
}
