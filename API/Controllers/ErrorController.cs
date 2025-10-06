using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ErrorController : BaseApiController
{
  [HttpGet("bad-request")]
  public IActionResult GetBadRequest() // 400
  {
    // throw new Exception("This is a bad request");
    return BadRequest("Bad Request");
  }

  [HttpGet("auth")]
  public IActionResult GetAuth() // 401
  {
    return Unauthorized();
  }

  [HttpGet("not-found")]
  public IActionResult GetNotFound() // 404
  {
    return NotFound();
  }

  [HttpGet("server-error")]
  public IActionResult GetServerError() // 500
  {
    throw new Exception("Server Error");
  }
}