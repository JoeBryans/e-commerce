import dotenv from "dotenv";
import Stripe from "stripe";
dotenv.config();
const strip = Stripe(process.env.STRIPE_KEY);
const payment = async (req, res) => {
  // const { product } = req.body;
  // const line_items = product.map((item) => {
  //   return {
  //     price_data: {
  //       currency: "usd",
  //       product_data: {
  //         name: item.Name,
  //         description: item.Description,
  //         images: [item.image],
  //         category: item.Category,
  //       },
  //       // metadata: {
  //       //   id: item._id,
  //       // },
  //       unit_amount: Math.round(item.DisPrice * 100),
  //     },
  //     quantity: item.Quantity,
  //   };
  // });
  const session = await strip.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    payment_method_types: ["card"],
    // line_items: line_items,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });
  res.json({ url: session.url });
};
export default payment;
