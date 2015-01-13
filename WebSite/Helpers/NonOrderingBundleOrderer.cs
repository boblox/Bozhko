using System;
using System.Collections.Generic;
using System.IO;
using System.Web.Optimization;

namespace Site.Helpers
{
    public class NonOrderingBundleOrderer : IBundleOrderer
    {
        public IEnumerable<BundleFile> OrderFiles(BundleContext context, IEnumerable<BundleFile> files)
        {
            return files;
        }
    }
}