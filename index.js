import express from 'express';
import faker from 'faker';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Server en expres GET');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT} succesfully!!`);
});

app.get('/products', (req, res) => {
  const products = [];

  for (let i = 0; i < 10; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.send(products);
});
