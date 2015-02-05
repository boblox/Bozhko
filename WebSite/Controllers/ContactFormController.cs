using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Umbraco.Web.Models;
using Umbraco.Web.Mvc;
using Umbraco.Web;
using umbraco;
using Site.Helpers;
using Umbraco.Core.Logging;
using System.Net.Mail;
using System.Text;
using HtmlAgilityPack;
using Logic.Resources;
using Logic.Helpers;
using Logic.Models;

using SiteLocalization = Site.Resources.Localization;

namespace Site.Controllers
{
    public class ContactFormController : SurfaceController
    {
        #region Actions

        [HttpPost]
        public ActionResult Send(ContactForm model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return CurrentUmbracoPage();
                }

                var body = GetMailBody(model);

                Utils.SendEmail(model.EmailFrom,
                    model.EmailTo,
                    Localization.ContactFormEmailSubject,
                    body);
                TempData.Add("Form received", true);
            }
            catch (Exception e)
            {
                LogHelper.Error(GetType(), e.ToString(), e);
            }
            return RedirectToCurrentUmbracoPage();

        }

        [ChildActionOnly]
        public ActionResult Index(string emailFrom, string emailTo)
        {
            return PartialView("ContactForm", new ContactForm { EmailFrom = emailFrom, EmailTo = emailTo });
        }

        #endregion

        #region Helpers

        private string GetMailBody(ContactForm model)
        {
            var doc = new HtmlDocument();
            doc.Load(Server.MapPath("~/Email/ContactForm.html"));
            var builder = new StringBuilder(doc.DocumentNode.SelectSingleNode("//body").WriteTo());

            ReplacePlaceholder(builder, "NameSurnameTitle", Localization.ContactFormNameSurname);
            ReplacePlaceholder(builder, "NameSurname", model.NameSurname);

            ReplacePlaceholder(builder, "ClientEmailTitle", Localization.ContactFormClientEmail);
            ReplacePlaceholder(builder, "ClientEmail", model.ClientEmail);

            ReplacePlaceholder(builder, "ClientPhoneTitle", Localization.ContactFormClientPhone);
            ReplacePlaceholder(builder, "ClientPhone", model.ClientPhone);

            ReplacePlaceholder(builder, "DescriptionTitle", Localization.ContactFormDescription);
            ReplacePlaceholder(builder, "Description", model.Description);

            ReplacePlaceholder(builder, "HoursTitle", Localization.ContactFormHours);
            ReplacePlaceholder(builder, "Hours", model.Hours.ToString());

            ReplacePlaceholder(builder, "IsPostProcessingNeededTitle", Localization.ContactFormIsPostProcessingNeeded);
            ReplacePlaceholder(builder, "IsPostProcessingNeeded", BoolToLocalizedString(model.IsPostProcessingNeeded));

            ReplacePlaceholder(builder, "IsStudioBookingNeededTitle", Localization.ContactFormIsStudioBookingNeeded);
            ReplacePlaceholder(builder, "IsStudioBookingNeeded", BoolToLocalizedString(model.IsStudioBookingNeeded));

            return builder.ToString();
        }

        private string BoolToLocalizedString(bool b)
        {
            return b ? SiteLocalization.True : SiteLocalization.False;
        }

        private void ReplacePlaceholder(StringBuilder builder, string key, string value)
        {
            key = string.Format("[{0}]", key);
            value = HttpUtility.HtmlEncode(value);
            builder.Replace(key, value);
        }

        #endregion
    }
}
