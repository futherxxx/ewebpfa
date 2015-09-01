using System.Web;
using System.Web.Optimization;

namespace MockUpv1
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            //the other theme list
            bundles.Add(new ScriptBundle("~/bundles/otherscripts").Include("~/Scripts/jquery.easing.min.js", "~/Scripts/wow.min.js", "~/Scripts/corpo.js","~/Scripts/color-style.js","~/Scripts/custom.js"));
           
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js","~/Scripts/jquery-ui.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css", "~/Content/animate.css","~/Content/font-awesome.css","~/Content/corpo.css","~/Content/corpon-green.css","~/Content/corpon-layout.css",
                      "~/Content/site.css","~/Content/jquery-ui.css","~/Content/jquery-ui.theme.css"));
        }
    }
}
