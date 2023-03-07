// author(s): logan mclachlan

using System;

namespace NasaAPITest
{
    // stores info on an asteroid query and its results
    public class AsteriodQuery
    {
        // sets the queries properties
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
        public string id { get; set; }

        // constructor, parameters are optional and have defualt values
        public AsteriodQuery(DateTime? startDateIn = null,
            DateTime? endDateIn = null,
            string idIn = null)
        {
            // if no dates are given, set to today
            // done this way to work around a limitation
            if (startDateIn != null)
            {
                startDate = (DateTime)startDateIn;
            }
            else
            {
                startDate = DateTime.Today;
            }

            if (endDateIn != null)
            {
                endDate = (DateTime)endDateIn;
            }
            else
            {
                endDate = DateTime.Today;
            }

            // sets the id
            id = idIn;
        }
    }
}
