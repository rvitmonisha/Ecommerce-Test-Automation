
import axios from 'axios';
import { z } from 'zod';

// Product schema
export const ProductSchema = z.object({
    id: z.number(),
    name: z.string(),
    price: z.string(),
    brand: z.string()
});

// Products response schema
export const ProductsResponseSchema = z.object({
    responseCode: z.number(),
    products: z.array(ProductSchema)
});

// Error response schema
export const ApiErrorSchema = z.object({
    responseCode: z.number(),
    message: z.string()
});

// Fetch and validate products
export async function getProducts() {
    const response = await axios.get(
        'https://automationexercise.com/api/productsList'
    );

    return ProductsResponseSchema.parse(response.data);
}

// Test search API without required parameter
export async function searchProductsWithoutParameter() {
    const response = await axios.post(
        'https://automationexercise.com/api/searchProduct',
        new URLSearchParams()
    );

    return ApiErrorSchema.parse(response.data);
}
