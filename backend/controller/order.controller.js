
import Order from "../model/order.model";

// Place a new order
export const placeOrder = async (req, res) => {
  try {
    const { userId, items, totalAmount } = req.body;

    if (!userId || !items || items.length === 0 || !totalAmount) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const order = new Order({
      user: userId,
      items,
      totalAmount,
    });

    const savedOrder = await order.save();
    res.status(201).json({ message: "Order placed successfully", order: savedOrder });
  } catch (error) {
    res.status(500).json({ message: "Failed to place order", error: error.message });
  }
};

// Get a single order by user ID
export const getSingleOrderByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const order = await Order.findOne({ user: userId })
      .populate("items.product", "name price image") // customize fields
      .populate("user", "name email");

    if (!order) {
      return res.status(404).json({ message: "Order not found for this user" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving order", error: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("user", "name email") // include user info
      .sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching orders" });
  }
};

// placeorder
// getsingle order by user 

