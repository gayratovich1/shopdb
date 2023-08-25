import prisma from "../prisma/prisma.service"

interface CreateOrderParams {
    cratIds: number[]
}

const createOrder = async (params: CreateOrderParams) => {
    const carts = await prisma.cart.findMany({
        where: {
            id: {
                in: params.cratIds
            }
        }
    })

    await prisma.cart.deleteMany({
        where: {
            id: {
                in: params.cratIds
            }
        }
    })
    
    const order = await prisma.order.createMany({
        data: carts.map((cart) => {
            return {
                count: cart.count,
                productId: cart.productId,
                userId: cart.userId
            }
        })
    })

    return order
}

export default {
    createOrder
}