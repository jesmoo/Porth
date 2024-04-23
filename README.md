# Porth

Welcome to the FontAwesome Icon Explorer, a Vue 3 application. This tool leverages the power of Vue 3 along with TypeScript to provide a responsive and intuitive user interface for searching through the extensive library of FontAwesome icons.

## Project Structure

The project adopts a folder structure that differs from other current Frontend applications, utilizing a Global-to-Specific approach based on a layered architecture. This design prioritizes the scalability of each business domain.

The "first layer" or root of the project contains "global" or shared resources, aiming to eliminate redundancy and promote a more structured project organization.

Subsequent "layers" are located in the `views` folder, where each `view` is designed to have its own responsibility and business logic knowledge. This approach helps to decouple the project from others, focusing on the scalability of the web application.


```
src
├── assets
├── router
├── App.vue
└── views
    └── UserSearch
        ├── components
        ├── UserSearch.vue
        └── index.ts
```

## Tools Used

The project primarily uses Vue, along with `.ts` and `.vue` files, to enhance the development experience.

- TypeScript
- Vue

## Getting Started

These instructions will help you set up a copy of the project locally for development.

### Prerequisites

- **Node**
  The project supports Node version `18`.
  ```sh
  node --version
  ```

  To manage Node versions, [`nvm`](https://github.com/nvm-sh/nvm) is recommended.
  ```sh
  nvm use 18
  ```

### Installation Guide

This guide provides instructions on how to set up the project both manually

#### Manual Installation

1. **Clone the repository** to get a local copy of the project:
   ```sh
   git clone git@github.com:jesmoo/Porth.git
   ```
2. **Install dependencies** with [`yarn`](https://yarnpkg.com/):
   ```sh
   npm install
   ```
3. **Start the project locally**:
   ```sh
   npm run dev
   ```
