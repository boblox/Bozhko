using System;
using System.Data.Entity;
using System.Web.Mvc;
using System.Web.Optimization;
using Logic.DAL;
using Logic.Helpers;
using Logic.Migrations;

namespace Site.Helpers
{
    /// <summary>
    /// Summary description for Global
    /// </summary>
    public class Global : Umbraco.Web.UmbracoApplication
    {
        protected override void OnApplicationStarted(object sender, EventArgs e)
        {
            base.OnApplicationStarted(sender, e);
            ModelBinders.Binders.Add(typeof(DateTime), new DateTimeModelBinder());
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<DataContext, Configuration>()); 
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }

}
