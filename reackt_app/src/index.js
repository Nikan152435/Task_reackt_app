// index.js

// Импортируем каждое приложение
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.js';
import Calendar from './src/components/Calendar.js';
import ShopItemClass from './src/components/ShopItemClass.js';
import ShopItemFunc from './src/components/ShopItemFunc.js';

const rootElement = document.getElementById('root');

const date = new Date();
const item = {
  brand: 'Brand',
  title: 'Title',
  description: 'Description',
  descriptionFull: 'Full description',
  price: 99.99,
  currency: '$',
};

const root = ReactDOM.createRoot(rootElement); // Создаем корневой элемент для рендера
root.render(
  <React.StrictMode>
    <div>
      <Calendar date={date} />
      <ShopItemClass item={item} />
      <ShopItemFunc item={item} />
    </div>
  </React.StrictMode>
);
