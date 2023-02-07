# Bulletproof React Clone

## About

A clone app of bulletproof-react to learn good design in React applications.
For study purposes, instead of cloning the original repository, a new application is created referencing the original repository.

The original repository: https://github.com/alan2207/bulletproof-react

## Changes from the original repository

As for the project design, I referred to the original repository and kept it mostly to learn from it.
However, I picked different tools for what I think is better option at the time of implementation.(See the "Tech Selection" section below)
Also, I used the latest version of the tools, so there are some differences from the original repository for how to use the third party libraries.

- Instead of creating the app with "create react app", I used Vite.
- I added Chromatic to deploy Storybook.
- Mock related source code is moved from `src/test` to `src/mocks` in order to follow the MSW documentation.

## Functionality

To be updated...

## Tech Selection

- Build: Vite
- Language: TypeScript
- Framework: React
- Package manager: Yarn
- Linter: ESLint
- Formatter: Prettier
- Git hooks: husky & lint-staged
- Style: Tailwind CSS
- UI library: Headless UI
- Router: React Router
- Icons: Heroicons
- Storybook
- Test:
  - VRT: Chromatic
- Authentication Helper: react-query-auth
- Data Fetching: react-query
- Mock API: MSW
- Data modeling and relation: @mswjs/data 
- HTTP Client: axios
- JWT: jsonwebtoken
- Utility: 
  - clsx: constructing class names conditionally
  - nanoid: generating unique ids
  - lodash
  - 
