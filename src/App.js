import React from 'react';

const Header = ({ title }) => {
  return <header>{title}</header>;
};

const Footer = ({ title }) => {
  return <footer>{title}</footer>;
};

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Первоначальный список:</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

const SecondProductList = ({ products }) => {
  return (
    <div>
      <h2>Дополнительно:</h2>
      <ul>
        {products.map((product) => (
          product.id % 2 === 0 && (
            <li key={product.id} className={product.name === 'Банан' ? 'banana' : ''}>
              <span style={{ fontStyle: 'italic', color: product.name === 'Банан' ? 'yellow' : 'inherit' }}>{product.name}</span>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

// Главный компонент, который объединяет все остальные
const App = () => {
  const headerTitle = 'Дз от 26/02/2024';
  const footerTitle = 'Конец';
  const products = [
    { id: 1, name: 'Яблоко' },
    { id: 2, name: 'Банан' },
    { id: 3, name: 'Вишня' },
    { id: 4, name: 'Морковь' }
  ];

  return (
    <div>
      <Header title={headerTitle} />
      <main>
        <ProductList products={products} />
        <SecondProductList products={products} />
      </main>
      <Footer title={footerTitle} />
    </div>
  );
};

export default App;
