using System.Web.Optimization;

namespace Site.Helpers
{
    public static class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            //Basic Js&Css============================================================
            var styleBundle = new StyleBundle("~/bundles/basic-css")
                .Include("~/css/jquery-ui.min.css")
                .Include("~/css/bootstrap.min.css")
                .Include("~/css/bootstrap-theme.min.css")
                .Include("~/css/styles.min.css");
            styleBundle.Orderer = new NonOrderingBundleOrderer();
            bundles.Add(styleBundle);

            var scriptBundle = new ScriptBundle("~/bundles/basic-js")
                .Include("~/js/jquery.min.js")
                .Include("~/js/jquery-ui.min.js")
                .Include("~/js/jquery.validate.min.js")
                .Include("~/js/jquery.validate.unobtrusive.min.js")
                .Include("~/js/bootstrap.min.js")
                //.Include("~/js/jquery.dropotron.min.js")
                //.Include("~/js/skel.min.js")
                //.Include("~/js/skel-layers.min.js")
                .Include("~/js/config.js");
            scriptBundle.Orderer = new NonOrderingBundleOrderer();
            bundles.Add(scriptBundle);

            //Magnific Pop-Up=========================================================
            styleBundle = new StyleBundle("~/bundles/magnific-popup-css")
                .Include("~/css/magnific-popup.css");
            styleBundle.Orderer = new NonOrderingBundleOrderer();
            bundles.Add(styleBundle);

            scriptBundle = new ScriptBundle("~/bundles/magnific-popup-js")
                .Include("~/js/magnific.popup.min.js");
            scriptBundle.Orderer = new NonOrderingBundleOrderer();
            bundles.Add(scriptBundle);

            //Owl Carousel ===========================================================
            styleBundle = new StyleBundle("~/bundles/carousel-css")
                .Include("~/css/OwlCarousel/owl.carousel.css")
                .Include("~/css/OwlCarousel/owl.theme.green.css");
            styleBundle.Orderer = new NonOrderingBundleOrderer();
            bundles.Add(styleBundle);

            scriptBundle = new ScriptBundle("~/bundles/carousel-js")
                .Include("~/js/owl.carousel.min.js");
            scriptBundle.Orderer = new NonOrderingBundleOrderer();
            bundles.Add(scriptBundle);

            //BundleTable.EnableOptimizations = false;
        }
    }
}