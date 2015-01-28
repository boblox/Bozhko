using System;
using System.Collections.Generic;
using Umbraco.Core.Services;

namespace Logic.Helpers
{
    public static class Helper
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
    }
}
