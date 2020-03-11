using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using backend.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        private readonly string _corsOrigin = "allowSpecificOrigin";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<PropertyDbContext>(x => x.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddControllers();
            services.AddAutoMapper(typeof(PropertyRepository).Assembly, typeof(AccountRepository).Assembly);
            services.AddScoped<IPropertyRepository, PropertyRepository>();
            services.AddScoped<IAccountRepository, AccountRepository>();
            services.AddCors(options =>
            {
                options.AddPolicy(_corsOrigin, builder =>
                {
                    /*
                     * Replace line below with 
                     * "builder.WithOrigins('https://example.com', 'https://example2.com')"
                     * if only specific origins are to be allowed
                     */
                    builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            //TODO: Enable https in production
            //app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(_corsOrigin);

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
