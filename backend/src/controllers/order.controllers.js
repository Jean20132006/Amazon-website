import { Order } from "../models/order.models.js";

const createOrder = async (req, res) => {

    try {

        const { userId } = req.params;

        const {
            items,
            totalAmount
        } = req.body;

        const order = await Order.create({
                user: userId,
                items,
                totalAmount
            });

        res.status(201).json({
            success: true,
            message: "Order created",
            orderId: order._id,
            order
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getOrders = async (req, res) => {

    try {

        const { userId } = req.params;

        const { filter } = req.query;

        let startDate = new Date();

        switch (filter) {

            case "lastMonth":
                startDate.setMonth(
                    startDate.getMonth() - 1
                );
                break;

            case "last3Months":
                startDate.setMonth(
                    startDate.getMonth() - 3
                );
                break;

            case "2026":
                startDate =
                    new Date("2026-01-01");

                const endDate =
                    new Date("2026-12-31");

                const orders2026 =
                    await Order.find({
                        user: userId,
                        createdAt: {
                            $gte: startDate,
                            $lte: endDate
                        }
                    });

                return res.status(200).json({
                    success: true,
                    orders: orders2026
                });

            default:
                startDate =
                    new Date("2006-01-01");
        }

        const orders =
            await Order.find({
                user: userId,
                createdAt: {
                    $gte: startDate
                }
            })
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            orders
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export {
    createOrder,
    getOrders
};