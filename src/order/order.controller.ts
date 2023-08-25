import { ControllerType } from "../common/types";
import orderService from "./order.service";

const createOrder: ControllerType = async (req, res, next) => {
    try {
        const {cratIds} = req.body
        const order = await orderService.createOrder({
            cratIds
        })

        res.status(201).send({
            message: 'Order created',
            order
        })
    } catch (e) {
        next(e)
    }
}

export default {
    createOrder
}