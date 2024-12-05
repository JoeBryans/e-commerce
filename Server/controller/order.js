import orderModle from "../model/order.js";

export const Order = async (req, res, nes) => {
  try {
    const order = new orderModle({
      orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
      shippingAddress: req.body.shippingAddress,
      paymenMethod: req.body.paymenMethod,
      paymentStatus: req.body.paymentStatus,
      itemPrice: req.body.itemPrice,
      shipping: req.body.shipping,
      fees: req.body.fees,
      totalPrice: req.body.totalPrice,
      user: req.user,
    });

    await order.save();
    res.status(200).send({ message: "New order Created", order });
  } catch (error) {
    console.log(error);
  }
};
export const getOrder = async (req, res, nex) => {
  const { id } = req.params;
  try {
    const order = await orderModle.findById(id);
    res.json(order);
  } catch (error) {
    console.log(error);
  }
};
