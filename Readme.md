######### Product Catalog App (EN)

This is a simple web application for displaying a product catalog with filtering, sorting, and cart functionality.
The project is built using React, TypeScript, Styled-Components, and tested with Jest + React Testing Library.

-----
Main Features

-Load products from an external API (https://fakestoreapi.com/products)
-Filter by categories
-Sort by price (ascending / descending)
-Add products to the cart
-Count the number of added items
-Responsive product card grid

-----
Technologies Used

-React + TypeScript
-Styled-Components
-Jest + React Testing Library
-Vite (instead of CRA)
-Git (version control)
-ESLint + Prettier
-Context API (for cart state management)

-----
Project Structure

src/
|── components/ # UI components
|── context/ # Cart context
|── pages/ # Pages (including Home.tsx)
|── types/ # Data types
|── styles/ # Global styles (if used)
|── tests/ # Unit tests

-----
Improvement Plan

|── Connect to a database / backend
|── Add user authentication
|── Improve styling and animations
|── Add test coverage for more components

-----
✅Project Setup

1.Clone the repository to your local machine. Run the command in the terminal:
git clone https://github.com/mihaborodinMd/EBS-TEST.git
This will create a copy of the project in the EBS-TEST folder.

2.Navigate to the project directory. Use the command:
cd EBS-TEST

3.Make sure Node.js is installed (preferably version 18 or higher). Then install dependencies with:
npm install
This command will install all required libraries and modules.

4.To start the project, run the following command:
npm run dev

5.After launching, the terminal will display the address where the app is available. Usually:
http://localhost:5173

-----
👀Running Tests

1.If this is your first time setting up testing, make sure to install the following packages:
npm install --save-dev jest ts-jest @types/jest jest-environment-jsdom identity-obj-proxy

2.This project uses Jest and React Testing Library to write unit tests. To run the tests, use:
npm test

📌Important

Do not place the project in directories with Cyrillic characters in the path (e.g., C:\Папка\Проект) — this may cause errors during dependency installation or project build.
Version control is managed with Git. All changes should be committed with meaningful messages, preferably following the Conventional Commits format (e.g., feat: added category filtering).
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

######### Product Catalog App (RU)

Это простое веб-приложение для отображения каталога товаров с возможностью фильтрации, сортировки и добавления в корзину.
Проект реализован с использованием **React**, **TypeScript**, **Styled-Components**, и протестирован с помощью **Jest + React Testing Library**.

-----
 Основной функционал
 
- Загрузка товаров с внешнего API (`https://fakestoreapi.com/products`)
- Фильтрация по категориям
- Сортировка по цене (по возрастанию / убыванию)
- Добавление товаров в корзину
- Подсчёт количества добавленных товаров
- Адаптивная сетка карточек

-----
 Используемые технологии

- React + TypeScript
- Styled-Components
- Jest + React Testing Library
- Vite (вместо CRA)
- Git (управление версиями)
- ESLint + Prettier
- Context API (для хранения состояния корзины)

-----
Структура проекта

src/
|── components/       # Компоненты интерфейса
|── context/          # Контекст корзины
|── pages/            # Страницы (в т.ч. Home.tsx)
|── types/            # Типы данных
|── styles/           # Глобальные стили (если используются)
|── tests/            # Unit-тесты

-----
План по улучшению

|── Подключить базу данных / бекенд
|── Авторизация пользователя
|── Улучшить стилизацию и анимации
|── Покрыть тестами больше компонентов

-----
✅Запуск проекта

1.Клонируй репозиторий на локальный компьютер. В терминале выполни команду:
git clone https://github.com/mihaborodinMd/EBS-TEST.git 
Это создаст копию проекта в папке EBS-TEST

2.Перейди в директорию проекта. Используй команду:
cd EBS-TEST

3.Убедись, что у тебя установлен Node.js (желательно версия 18 или выше). Затем выполни установку зависимостей с помощью команды:
npm install
Эта команда установит все библиотеки и модули, необходимые для работы проекта.

4.Для запуска проекта используй следующую команду:
npm run dev
После запуска в терминале появится адрес, по которому откроется веб-приложение. Обычно это:
http://localhost:5173

-----
👀Запуск тестов

1.Если это первая настройка тестирования, убедись, что установлены следующие пакеты:
npm install --save-dev jest ts-jest @types/jest jest-environment-jsdom identity-obj-proxy

2.В проекте используется Jest и React Testing Library для написания модульных тестов. Чтобы запустить тесты, выполни:
npm test
-----
📌Важно
Не размещай проект в директориях с русскими буквами в пути (например, C:\Папка\Проект) — это может вызвать ошибки при установке зависимостей или запуске сборки.
Для контроля версий используется Git. Все изменения фиксируются с помощью осмысленных коммитов, желательно в формате Conventional Commits (например, feat: добавлена фильтрация по категориям).



