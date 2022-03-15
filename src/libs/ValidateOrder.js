const Order = require('./../models/Order')

const exist = async (id) => {
    const order = await Order.findById(id);
    return order;
}

module.exports = {
    exist
}