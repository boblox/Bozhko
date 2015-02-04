using Site.Resources;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Umbraco.Core.Models;
using Umbraco.Web.Models;

namespace Site.Models
{
    public class ContactForm
    {
        public string EmailFrom { get; set; }

        public string EmailTo { get; set; }

        [Required(ErrorMessageResourceName = "RequiredField", ErrorMessageResourceType = typeof(Localization))]
        [Display(Name = "ContactFormNameSurname", ResourceType = typeof(Localization))]
        public string NameSurname { get; set; }

        [Required(ErrorMessageResourceName = "RequiredField", ErrorMessageResourceType = typeof(Localization))]
        [Display(Name = "ContactFormDescription", ResourceType = typeof(Localization))]
        [AllowHtml]
        [DataType(DataType.MultilineText)]
        public string Description { get; set; }

        //[Required(ErrorMessageResourceName = "RequiredField", ErrorMessageResourceType = typeof(Localization))]
        [Display(Name = "ContactFormHours", ResourceType = typeof(Localization))]
        public int Hours { get; set; }

        [Display(Name = "ContactFormIsPostProcessingNeeded", ResourceType = typeof(Localization))]
        public bool IsPostProcessingNeeded { get; set; }

        [Display(Name = "ContactFormIsStudioBookingNeeded", ResourceType = typeof(Localization))]
        public bool IsStudioBookingNeeded { get; set; }
    }
}