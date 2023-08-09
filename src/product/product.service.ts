import createHttpError from "http-errors"
import prisma from "../prisma/prisma.service"
import { unlink } from "fs"
import { join } from "path"

type CreateProductType = {
    name: string,
    price: number,
    description: string,
    cover: string,
    categoryId: number
}

type UpdateProductType = {
    [key in keyof CreateProductType]?: CreateProductType[key]
}

const createProduct = async (data: CreateProductType) => {
    const product = await prisma.product.create({
        data: {
            ...data
        }
    })

    return product
}

const updateProduct = async (id: number, data: UpdateProductType) => {
    const findedProdcut = await prisma.product.findUnique({
        where: {
            id
        }
    })

    if(!findedProdcut) {
        throw createHttpError(404, 'Product not found')
    }
    
    const product = await prisma.product.update({
        where: {
            id
        },
        data: {
            ...data
        }
    })

    return product
}

const deleteProduct = async (id: number,) => {
    const findedProduct = await prisma.product.findUnique({
        where: {
            id
        }
    })

    if (!findedProduct) {
        throw createHttpError(404, 'Product not found')
    }

    unlink(join(__dirname, '../../uploads', findedProduct.cover), (err) => {
        if (err) {
            console.log('File not deleted', err);
        }
        else {
            console.log('File successful deleted');
            
        }
    })

    const deletedProduct = await prisma.product.delete({
        where: {
            id
        }
    })

    return deletedProduct
}

export default {
    createProduct,
    updateProduct,
    deleteProduct
}