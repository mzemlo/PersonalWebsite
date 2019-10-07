using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PersonalWebsite.Entities;

namespace PersonalWebsite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        // GET: api/Email
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Email/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Email
        [HttpPost]
        public IActionResult Post([FromBody] Email email)
        {
            NetworkCredential basicCredential = new NetworkCredential("xxxxx@gmail.com", "xxxxx");
            MailMessage message = new MailMessage();
            string displayName = email.Firstname + " " + email.Lastname;
            MailAddress fromAddress = new MailAddress(email.Address, displayName);


            message.From = fromAddress;
            message.Subject = email.Subject;
            message.IsBodyHtml = true;
            message.Body = "<h3>Wiadomość od: " + email.Firstname + " " + email.Lastname + " (" + email.Address + ")" + "</h3></br><b>Treść wiadomości:</b></br>" + email.Message;
            message.To.Add("xxxxx@outlook.com");

            // Smtp client
            var client = new SmtpClient()
            {
                Port = 587,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Host = "smtp.gmail.com",
                EnableSsl = true,
                Credentials = basicCredential
            };


            try
            {
                client.Send(message);
            }
            catch (Exception)
            {
                return BadRequest(new { message = "Niestety nie udało się wysłać wiadomości." });
            }
            return Ok(new { message = "Wiadomość wysłana" });
        }

        // PUT: api/Email/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
