# ДЕМО: https://test-empire-coffee.vercel.app/

"username": "david.jones@creds.com",
"passphrase": "52ccca432ab28afd90969084c061b23c"

# Описание проекта
Этот проект представляет собой веб-приложение для управления списком товаров. Он позволяет просматривать товары в табличном виде, фильтровать их по дате создания и категории, а также управлять учетными записями пользователей.

## Функциональность

### Аутентификация
- Пользователи могут войти в систему, используя логин и пароль.
- После успешной аутентификации пользователи перенаправляются на страницу аккаунта.
- Пользователи могут выйти из системы в любой момент.

### Управление товарами
- Список товаров отображается в табличном виде с полями: **ID**, **Name**, **Category**, **Price**, **Quantity**, **Status**, **Date Created**.
- Данные о товарах загружаются из файла `products.json`.

### Фильтрация товаров
- Пользователи могут фильтровать товары по дате создания.
- Пользователи могут фильтровать товары по категории, выбирая несколько категорий одновременно.
- Фильтры могут быть сброшены.

### Повторно используемый компонент кнопки
- Для кнопок используется компонент `Button.vue`, который позволяет легко настраивать стили и поведение кнопок.

### Стилизация
- Стилизация выполнена с использованием **SCSS** и методологии **БЭМ**.
- Используются переменные для определения цветовой палитры и типографики.

### TypeScript
- Проект написан с использованием **TypeScript** для улучшения типизации и надежности кода.

## Установка
1. Клонируйте репозиторий.
2. Установите зависимости: `npm install` или `yarn install`.
3. Запустите сервер разработки: `npm run dev` или `yarn dev`.

## Структура проекта
- **`assets/`**: Содержит статические ресурсы, такие как JSON-файлы и стили.
- **`components/`**: Содержит компоненты Vue.
- **`pages/`**: Содержит страницы приложения.
- **`store/`**: Содержит хранилище Pinia.
- **`types/`**: Содержит определения типов TypeScript.
- **`styles/`**: Содержит глобальные стили и переменные SCSS.
- **`nuxt.config.ts`**: Конфигурация Nuxt 3.
- **`package.json`**: Файл зависимостей npm.
- **`tsconfig.json`**: Конфигурация TypeScript.


# Описание тестового задания
Необходимо реализовать небольшое веб приложение на Nuxt 3, которое будет иметь несколько страниц:
- Страница идентификации (логин и пароль)
- Страница аккаунта

## Описание задач
- Страница идентификации предоставляет пользователю возможность ввести логин и пароль. После проверки данных пользователь либо получает доступ к аккаунту, либо система должна отобразить ошибку «Введены неверные данные авторизации. Попробуйте ещё раз». Вывод ошибки (стилистика и расположение) на усмотрение разработчика. Данные логин/пароль будут добавлены в объект JSON, в приложении
- После удачной аутентификации система должна перекинуть пользователя на страницу аккаунта. Авторизация не предусмотрена.
- На странице аккаунта разместите кнопку «Выход» для завершения сессии пользователя, также таблицу с данными (списком пользователей или продуктов или иных предметов). Размещение компонентов на странице по усмотрению.
- Создайте объект JSON как источник данных для таблицы с обязательными полями id, status, date_created, а также добавьте свои атрибуты коллекции в зависимости от выбранного Вами типа данных (товаров/услуг/и т. д.). Кол-во товаров, от 10.
- Выведите в таблицу данные, добавьте отдельный способ фильтрации (отдельным блоком): фильтр по дате создания, мульти выбор по одному из атрибутов (к примеру, по имени или названию товаров). Пример отображения фильтра и таблицы можно найти ниже.
- При нажатии на кнопку «Выход», сессия пользователя должна быть удалена, и система перекидывает пользователя на страницу идентификации

## Немного теории (создайте и добавьте в файл README):
- При реализации желательно использовать TypeScript. Если Вы используете JavaScript, то кратко опишите почему
- Опишите процесс развёртывания приложения на PROD сервере, если бы это делали Вы
- Кратко опишите функции, которые вы имплементировали, и почему сделали именно так (по желанию)

**Важно!** При обновлении страницы сессия пользователя должна сохраняться, иными словами, пользователь должен оставаться в системе и не перебрасываться на страницу идентификации.

## Основные критерии реализации
- Используйте Nuxt 3
- Для работы с данными, используйте Store
- Для работы со стилями, используйте Less/Sass предпроцессоры
- Желательно использовать TypeScript.
- При решении задачи можно использовать и иные сторонние компоненты (к примеру NuxtUI, FontAwesome и т. д.) и библиотеки
- Приложение может бегать на Nitro или Express сервере (как удобно).
- **Важно!** Загрузите реализацию задачи в репозиторию Git и пришлите нам ссылку на проект

## Критерии оценки
Чтобы облегчить понимание «А зачем нам всё это нужно» и «Что мы оцениваем», старайтесь выполнить задачу максимально лаконично (чистый код, добавьте комментарии, где посчитаете нужным). Обращайте внимание на расположение блоков, отображение данных. Нет необходимости отрисовывать интерфейс, но он должен быть читаем, прост и понятен.

Мы будем обращать внимание на то, как Вы написали код, как реализовали и визуализировали ту или иную функцию, как аккуратно сделана работа и какой вариант решения Вы выбрали. При использовании JSON объектов как источника данных, попробуйте имитировать получение этих данных через API.
