// author(s): logan mclachlan

using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace NasaAPITest
{
    public static class EventProcessor
    {
        public async static Task<EventModel> LoadEvents()
        {
            int numOfEvents = 10;
            string url = $"https://eonet.gsfc.nasa.gov/api/v2.1/events?limit={numOfEvents}";

            // open a new call using the apiclint
            using (HttpResponseMessage response = await ApiHelper.ApiClient.GetAsync(url))
            {
                if (response.IsSuccessStatusCode)
                {
                    string result = await response.Content.ReadAsStringAsync();

                    // parses/deserialize string result into an object
                    EventModel events = JsonConvert.DeserializeObject<EventModel>(result);

                    return events;
                }
                else
                {
                    throw new Exception(response.ReasonPhrase);
                }
            }
        }
    }
}
