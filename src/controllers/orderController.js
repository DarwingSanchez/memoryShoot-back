const Order = require("./../models/Order");
const validateOrder = require("./../libs/ValidateOrder.js");

const getAll = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders)
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const newOrder = async (req, res) => {
  try {
    const body = req.body;
    console.log(body)
    const order = new Order(body);
    if (
      !body.saleID ||
      !body.address ||
      !body.city ||
      !body.state ||
      !body.status ||
      !body.created
    ) {
        throw new Error('There is an empty field')
    }
    await order.save();
    res.status(201).json(order)
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const dispatchOrder = async (req, res) => {
  try {
    const body = req.body
    const id = body.id
    const order = await Order.findByIdAndUpdate(id, { status: false })  
    res.json(order)
  } catch (error) {
    res.json('There is an error')
  }
}

module.exports = {
  getAll,
  newOrder,
  dispatchOrder
};
