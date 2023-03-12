// author(s): logan mclachlan

using System;

namespace NasaAPITest
{
    // stores info on an asteroid query and its results
    public class AsteriodQuery
    {
        // sets the queries properties
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Id { get; set; }
        public bool PotentiallyDangerouse { get; set; } 

        // constructor, parameters are optional and have defualt values
        public AsteriodQuery(DateTime? startDateIn = null,
            DateTime? endDateIn = null,
            bool potentiallyDangerousIn = false,
            string idIn = null)
        {
            // if no dates are given, set to today
            // done this way to work around a limitation
            if (startDateIn != null)
            {
                StartDate = (DateTime)startDateIn;
            }
            else
            {
                StartDate = DateTime.Today;
            }

            int dateDifferanceLimit = 7;

            if (endDateIn == null || ((DateTime)endDateIn - StartDate).TotalDays > dateDifferanceLimit)
            {
                EndDate = StartDate.AddDays(dateDifferanceLimit);
            }
            else
            {
                EndDate = (DateTime)endDateIn;
            }

            PotentiallyDangerouse = potentiallyDangerousIn;
            Id = idIn;
        }
    }
}
