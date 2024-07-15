// index.js

// Импртируем каждое приложение
import React from 'react';
import ReactDOM from 'react-dom/client';
import Calendar from './components/Calendar';
import ShopItemClass from './components/ShopItemClass';
import ShopItemFunc from './components/ShopItemFunc';
import './App.css'; // Импорт CSS файла

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
    <div className='container'>
      <Calendar date={date} />
      <ShopItemClass item={item} />
      <ShopItemFunc item={item} />
    </div>
  </React.StrictMode>
);
