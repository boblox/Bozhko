using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Umbraco.Core.Models;

namespace Site.Models
{
    public class CategorizedMedia
    {
        public string Category { get; set; }

        public IPublishedContent Media{ get; set; }
    }
}