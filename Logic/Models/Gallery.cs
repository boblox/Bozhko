using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Web;
using Umbraco.Web.Models;

namespace Logic.Models
{
    public class Gallery : RenderModel
    {
        public Gallery()
            : base(UmbracoContext.Current.PublishedContentRequest.PublishedContent)
        {
            Media = new List<CategorizedMedia>();
        }

        public List<CategorizedMedia> Media { get; set; }
    }
}