const path = require('path');

module.exports = {
  entry: './src/index.js', // Путь к точке входа вашего приложения
  output: {
    filename: 'bundle.js', // Название выходного файла
    path: path.resolve(__dirname, 'dist'), // Путь к директории для сохранения выходных файлов
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Пример настройки для Babel
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Расширения файлов, которые webpack будет искать
  },
};