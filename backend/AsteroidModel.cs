// author(s): logan mclachlan

using System.Collections.Generic;

namespace NasaAPITest
{
    public class AsteroidModel
    {
        [JsonProperty("near_earth_objects")]
        public Dictionary<string,List<Asteroid>> NearEarthObjects { get; set; }
    }

    public class Asteroid
    {
        [JsonProperty("id")]
        public string Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("estimated_diameter")]
        public Estimated_Diameter EstimatedDiameter { get; set; }
        [JsonProperty("is_potentially_hazardous_asteroid")]
        public bool PotentiallyHazardous { get; set; }
        [JsonProperty("close_approach_data")]
        public Close_Approach_Data[] CloseApproachData { get; set; }
    }

    public class Estimated_Diameter
    {
        public Meters meters { get; set; }
    }

    // diameter mesurement
    public class Meters
    {
        [JsonProperty("estimated_diameter_min")]
        public float DiameterMin { get; set; }
        [JsonProperty("estimated_diameter_max")]
        public float DiameterMax { get; set; }
    }

    public class Close_Approach_Data
    {
        [JsonProperty("close_approach_date")]
        public string ApproachDate { get; set; }
        [JsonProperty("relative_velocity")]
        public Relative_Velocity Velocity { get; set; }
        [JsonProperty("miss_distance")]
        public Miss_Distance MissDistance { get; set; }
    }

    public class Relative_Velocity
    {
        [JsonProperty("kilometers_per_second")]
        public string KilometersPerSecond { get; set; }
    }

    public class Miss_Distance
    {
        public string lunar { get; set; }
        public string kilometers { get; set; }
    }
}
