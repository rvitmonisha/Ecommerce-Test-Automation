
import { faker } from '@faker-js/faker';

export const createUserData = () => ({
    name: faker.person.fullName(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: `automation_${faker.string.alphanumeric(12).toLowerCase()}@example.com`,
    password: faker.internet.password({ length: 12 }),

    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipcode: faker.location.zipCode(),
    mobile: faker.phone.number()
});

// Existing single-user data for other test files
export const userData = createUserData();

// Three independent users for data-driven testing
export const userDataSet = Array.from(
    { length: 3 },
    () => createUserData()
);
