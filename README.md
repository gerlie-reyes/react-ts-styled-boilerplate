# React Typescript Starter Kit

Kick off your web applications using this\
React, Typescript, styled-components boilerplate.\
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and Typescript template\
This starter can be used for websites with responsive hamburger navigation.

## Getting Started

If you are using nvm, perform command `nvm use` in your terminal.

```
Clone this repository:
git clone https://github.com/gerlie-reyes/react-ts-styled-boilerplate.git

Install dependencies:
yarn install

Start the development server:
yarn start

Visit http://localhost:3000/
```

## Available Scripts

`yarn start` - Runs the app in the development mode.\
`yarn test` - Launches the test runner in the interactive watch mode.\
`yarn build` - Builds the app for production to the `build` folder.\

## Debugging

### issue Error message "error:0308010C:digital envelope routines::unsupported"

Workaround: `export NODE_OPTIONS=--openssl-legacy-provider`

https://github.com/webpack/webpack/issues/14532

### Getting a blank page after yarn start, without any error

Workaround: Remove line 2 of package.json -> the config for github pages homepage

`"homepage": "http://gerlie-reyes.github.io/react-ts-styled-boilerplate/",`
