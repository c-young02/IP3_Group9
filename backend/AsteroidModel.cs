// author(s): logan mclachlan

using System.Collections.Generic;

namespace NasaAPITest
{
    public class AsteroidModel
    {
        public Dictionary<string,List<Asteroid>> near_earth_objects { get; set; }
    }

    public class Asteroid
    {
        public string id { get; set; }
        public string name { get; set; }
        public Estimated_Diameter estimated_diameter { get; set; }
        public bool is_potentially_hazardous_asteroid { get; set; }
        public Close_Approach_Data[] close_approach_data { get; set; }
    }

        public class Estimated_Diameter
    {
        public Meters meters { get; set; }
    }


    public class Meters
    {
        public float estimated_diameter_min { get; set; }
        public float estimated_diameter_max { get; set; }
    }

    public class Close_Approach_Data
    {
        public string close_approach_date { get; set; }
        public Relative_Velocity relative_velocity { get; set; }
        public Miss_Distance miss_distance { get; set; }
    }

    public class Relative_Velocity
    {
        public string kilometers_per_second { get; set; }
    }

    public class Miss_Distance
    {
        public string lunar { get; set; }
        public string kilometers { get; set; }
    }
}
