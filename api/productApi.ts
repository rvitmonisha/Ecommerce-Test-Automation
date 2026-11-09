
import axios from 'axios';
import { z } from 'zod';

// Schema for an individual product
export const ProductSchema = z.object({
    id: z.number(),
    name: z.string(),
    price: z.string(),
    brand: z.string()
});

// Schema for the complete API response
export const ProductsResponseSchema = z.object({
    responseCode: z.number(),
    products: z.array(ProductSchema)
});

// Function to fetch and validate products
export async function getProducts() {
    const response = await axios.get(
        'https://automationexercise.com/api/productsList'
    );

    return ProductsResponseSchema.parse(response.data);
}
