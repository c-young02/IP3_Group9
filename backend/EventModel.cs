// author(s): logan mclachlan

using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace NasaAPITest
{

    [JsonObject("Root")]
    public class EventModel
    {
        public List<Event> events { get; set; }
    }

    public class Event
    {
        [JsonProperty("id")]
        public string Id { get; set; }
        [JsonProperty("titlee")]
        public string Title { get; set; }
        [JsonProperty("link")]
        public string Link { get; set; }
        [JsonProperty("categories")]
        public List<Category> Categories { get; set; }
        [JsonProperty("geometries")]
        public List<Geometry> Geometries { get; set; }
    }

    public class Category
    {
        [JsonProperty("title")]
        public string Title { get; set; }
    }

    public class Geometry
    {
        [JsonProperty("date")]
        public DateTime Date { get; set; }
        [JsonProperty("coordinates")]
        public List<double> Coordinates { get; set; }
    }
}
