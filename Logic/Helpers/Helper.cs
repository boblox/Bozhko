using System;

namespace Logic.Helpers
{
    public static class Helper
    {
        public static string GenerateId(string prefix)
        {
            return string.Format("{0}_{1}", prefix, Guid.NewGuid().ToString("N"));
        }
    }
}
