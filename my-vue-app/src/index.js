// index.js

// Импортируем каждое приложение
import CalendarApp from './src/components/Calendar.js';
import ShopItemClassApp from './src/components/ShopItemClass.js';
import ShopItemFuncApp from './src/components/ShopItemFunc.js';

// Примерная идея объединения приложений
function startAllApps() {
    CalendarApp.start();
    ShopItemClassApp.start();
    ShopItemFuncApp.start();
}

// Запускаем все приложения при загрузке страницы
window.addEventListener('DOMContentLoaded', startAllApps);