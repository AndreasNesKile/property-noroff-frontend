using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Helpers
{
    public class TokenDecoder
    {

        public static string GetUserRole(HttpRequest request)
        {
            var accessToken = request.Headers["Authorization"];
            accessToken = accessToken.ToString().Replace("Bearer ", string.Empty);
            var token = new JwtSecurityTokenHandler().ReadJwtToken(accessToken);

            var role = token.Claims.FirstOrDefault(r => r.Type == "https://property.com/roles").Value;

            return role;
        }

        public static void PrintClaims(HttpRequest request)
        {
            var accessToken = request.Headers["Authorization"];
            accessToken = accessToken.ToString().Replace("Bearer ", string.Empty);
            var token = new JwtSecurityTokenHandler().ReadJwtToken(accessToken);
            var claimList = token.Claims.ToList();

            foreach (var item in claimList)
            {
                Console.WriteLine(item);
            }
        }

        public static string GetUserEmail(HttpRequest request)
        {
            var accessToken = request.Headers["Authorization"];
            accessToken = accessToken.ToString().Replace("Bearer ", string.Empty);

            var token = new JwtSecurityTokenHandler().ReadJwtToken(accessToken);

            var claim = token.Claims.FirstOrDefault(c => c.Type == "email").Value;

            return claim;
        }
    }
}
