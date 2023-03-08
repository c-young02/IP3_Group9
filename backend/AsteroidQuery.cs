// author(s): logan mclachlan

using System;

namespace NasaAPITest
{
    public class AsteriodQuery
    {
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
        public string id { get; set; }

        // constructor, parameters are optional and have defualt values
        public AsteriodQuery(DateTime? startDateIn = null,
            DateTime? endDateIn = null,
            string idIn = null)
        {
            
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

            id = idIn;
        }
    }
}
