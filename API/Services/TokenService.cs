using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Entities;
using API.Interfaces;
using Microsoft.IdentityModel.Tokens;

namespace API.Services;

public class TokenService(IConfiguration configuration) : ITokenService
{
    public string CreateToken(AppUser user)
    {
        var tokenKey = configuration["TokenKey"] ?? throw new ArgumentNullException("TokenKey is null.");

        if (tokenKey.Length < 64)
        {
            throw new ArgumentException("TokenKey must be >= 64 chars.");
        }

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenKey));
        var claims = new List<Claim>
        {
            new (ClaimTypes.Email, user.Email),
            new (ClaimTypes.NameIdentifier, user.Id),

        };

        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
        var tokenDescription = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.Now.AddDays(7),
            SigningCredentials = creds
        };
        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescription);

        return tokenHandler.WriteToken(token);
    }
}