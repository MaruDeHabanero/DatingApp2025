namespace API.Exceptions;

public class ApiException(int statusCode, string message, string? details)
{
    public int StatusCode { get; set; }
    public string Message { get; set; }
    public string Details { get; set; }
}