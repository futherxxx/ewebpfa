using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MockUpv1.Startup))]
namespace MockUpv1
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
