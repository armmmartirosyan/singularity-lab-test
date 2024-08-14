# Next.js Mapbox Приложение

Это Next.js приложение, которое интегрирует Mapbox для отображения интерактивной карты с различными функциями, такими как переключение 3D-зданий и отображение деталей зданий по щелчку. Проект создан с использованием TypeScript.

## Функции

- **Отображение карты**: Отображает карту Mapbox в приложении.
- **Переключить 3D-здания**: Кнопка для включения и выключения 3D-зданий.
- **Подробности здания**: Отображает подробную информацию о здании при щелчке.
- **Цвет темы**: Пользователь может изменить цвет темы и одновременно дизайн карты.

## Предпосылки

- Node.js (версия 14.x или выше)
- npm или Yarn
- Учетная запись Mapbox с токеном доступа

## Начиная

### 1. Клонировать репозиторию

```bash
git clone https://github.com/armmmartirosyan/singularity-lab-test
cd singularity-lab-test
```

### 2. Установить зависимости

```bash
npm install
# или
yarn install
```

### 3. Настройка переменных среды

Создайте файл `.env.local` в корневом каталоге и добавьте свой токен доступа Mapbox:

```bash
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
```

### 4. Запустите сервер разработки

```bash
npm run dev
# или
yarn dev
```

Откройте [http://localhost:3000](http://localhost:3000) в своем браузере, чтобы увидеть результат.

## Использование

### Переключить 3D-здания

Нажмите кнопку «3D», чтобы включить или выключить 3D-вид зданий на карте.

### Посмотреть подробности о здании

Щелкните по любому зданию на 3D-карте, чтобы просмотреть его подробную информацию, такую ​​как высота и адрес.

### Изменить цвет темы

В правом верхнем углу вы можете увидеть значок солнца или луны в зависимости от вашей текущей темы. Нажав на него, вы увидите раскрывающийся список, в котором вы можете выбрать один из вариантов темы.

## Структура проекта

- **app/**: Страницы Next.js, включая главную страницу карты, корневой layout и глобальные стили.
- **components/**: Содержит повторно используемые компоненты React.
- **constants/**: Constant переменные для всего приложения.
- **hooks/**: Пользовательские хуки React для использования некоторой логики.
- **lib/**: Вспомогательные функции и помощники.
- **types/**: Универсальные и повторно используемые типы.

### In English

# Next.js Mapbox Application

This is a Next.js application that integrates Mapbox to display an interactive map with various features such as toggling 3D buildings and showing building details on click. The project is built using TypeScript.

## Features

- **Map Display**: Renders a Mapbox map in the application.
- **3D Buildings Toggle**: A button to toggle 3D buildings on and off.
- **Building Details**: Displays details of a building when it is clicked.
- **Theme color**: The user can change the theme color and at the same time map design.

## Prerequisites

- Node.js (version 14.x or higher)
- npm or Yarn
- A Mapbox account with an access token

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/armmmartirosyan/singularity-lab-test
cd singularity-lab-test
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add your Mapbox access token:

```bash
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

### Toggle 3D Buildings

Click the "3D" button to turn on or off the 3D view of buildings on the map.

### View Building Details

Click on any building on the 3D map to view its details, such as height and address.

### Change the theme color

At the right top corner you can see the sun or moon icon based on your current theme. Clicking on it, appears a dropdown where you can select one of the theme options.

## Project Structure

- **app/**: Next.js pages, including the main map page, root layout and global styles.
- **components/**: Contains reusable React components.
- **constants/**: The constant variables for whole application.
- **hooks/**: Custom React hooks for utilizing some logic.
- **lib/**: Utility functions and helpers.
- **types/**: Generic and reusable types.
