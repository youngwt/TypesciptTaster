using System.Web.Http;
using TypesciptTaster.Models;

namespace TypesciptTaster.Controllers
{
    /// <summary>
    /// A really simple API Controller that accepts an input
    /// and gives a reply based on that input
    /// </summary>
    [AllowAnonymous]
    [RoutePrefix("api")]
    public class OrderApiController : ApiController
    {
        /// <summary>
        /// Echoes a confirmation method to simulate receiving an order
        /// </summary>
        /// <param name="order"></param>
        [HttpPost]
        [Route("order")]
        public IHttpActionResult Order(OrderModel order)
        {
            var receipt = $"Thank you for your order of {order.Order}";

            return Ok(receipt);
        }
    }
}
