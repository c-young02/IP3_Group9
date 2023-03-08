// author(s): logan mclachlan

using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace NasaAPITest
{
    // class to handle loading and parsing asteroid query results
    public class AsteroidProcessor
    {
        public async Task<AsteroidModel> LoadAsteroids(AsteriodQuery query)
        {
            string url = "";

            // check what type of query is to be executed
            if (query.id == null)
            {
                // if an id is not given, get list of all asteroids and their closest approach
                url = $"https://api.nasa.gov/neo/rest/v1/feed?start_date={ query.startDate.ToString("yyyy-MM-dd") }&end_date={ query.endDate.ToString("yyyy-MM-dd") }&api_key={ APIKey.Key }";

                // open a new call using the apiclint
                using (HttpResponseMessage response = await ApiHelper.ApiClient.GetAsync(url))
                {
                    if (response.IsSuccessStatusCode)
                    {
                        // gets result as a string
                        string result = await response.Content.ReadAsStringAsync();

                        // parses string result into an object
                        AsteroidModel asteroids = JsonConvert.DeserializeObject<AsteroidModel>(result);

                        return asteroids;
                    }
                    else
                    {
                        throw new Exception(response.ReasonPhrase);
                    }
                }
            }
            else
            {
                // if an id is given, get list of all that asteroids approaches
                url = $"https://api.nasa.gov/neo/rest/v1/neo/{ query.id }?api_key={ APIKey.Key }";

                // open a new call using the apiclint
                using (HttpResponseMessage response = await ApiHelper.ApiClient.GetAsync(url))
                {
                    if (response.IsSuccessStatusCode)
                    {
                        // gets result as a string
                        string result = await response.Content.ReadAsStringAsync();

                        // parses string result into an object
                        Asteroid asteroid = JsonConvert.DeserializeObject<Asteroid>(result);

                        // puts the result into a asteroid model so it can be returned
                        List<Asteroid> asteroidList = new List<Asteroid>();
                        asteroidList.Add(asteroid);
                        AsteroidModel asteroids = new AsteroidModel();
                        asteroids.near_earth_objects = new Dictionary<string,List<Asteroid>>();                        
                        asteroids.near_earth_objects.Add("asteroid", asteroidList);

                        return asteroids;
                    }
                    else
                    {
                        throw new Exception(response.ReasonPhrase);
                    }
                }
            }
        }
    }
}
