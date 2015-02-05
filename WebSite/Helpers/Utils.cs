using System;
using System.Linq;
using System.Collections.Generic;
using Umbraco.Core.Models;
using Umbraco.Core.Services;
using System.Net.Mail;
using System.Text;

namespace Site.Helpers
{
    public static class Utils
    {
        public static string GenerateId(string prefix)
        {
            return string.Format("{0}_{1}", prefix, Guid.NewGuid().ToString("N"));
        }

        public static IEnumerable<string> GetDataTypePreValues(IDataTypeService service, string dataTypeName)
        {
            var dataType = service.GetDataTypeDefinitionByName(dataTypeName);
            return service.GetPreValuesByDataTypeId(dataType.Id);
        }

        public static IEnumerable<IPublishedContent> ChildrenOfDocType(this IPublishedContent content, string docTypeAlias)
        {
            return content.Children.Where(i => i.DocumentTypeAlias == docTypeAlias);
        }

        public static void SendEmail(string emailFrom, string emailTo, string subject, string body)
        {
            var message = new MailMessage
            {
                From = new MailAddress(emailFrom, emailFrom),
                Subject = subject,
                SubjectEncoding = Encoding.UTF8,
                Body = body,
                BodyEncoding = Encoding.UTF8,
                IsBodyHtml = true
            };
            message.To.Add(emailTo);

            var smtpClient = new SmtpClient();
            smtpClient.Send(message);
        }
    }
}
