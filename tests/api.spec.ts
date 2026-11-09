
import { test, expect } from '@playwright/test';
import { getProducts } from '../api/productApi';

test('Verify products API response', async () => {
    const data = await getProducts();

    expect(data.responseCode).toBe(200);
    expect(data.products.length).toBeGreaterThan(0);

    for (const product of data.products) {
        expect(product.id).toBeGreaterThan(0);
        expect(product.name).not.toBe('');
        expect(product.price).not.toBe('');
        expect(product.brand).not.toBe('');
    }

    console.log('Total products:', data.products.length);
});
