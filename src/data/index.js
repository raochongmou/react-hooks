import { faker } from "@faker-js/faker";

let fakerData = [];

for (let i = 0; i < 10000; i++) {
  fakerData.push(faker.internet.userName());
}

console.log("fakerData", fakerData);

export { fakerData };
