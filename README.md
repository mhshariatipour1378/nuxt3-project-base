# nuxt3-project-base
The structure of Next projects.

## Installation
First, clone the project and then run the following command:
```
npm install 
```
Then, run the project with the following command:
```
npm run dev
```
The project can be seen at [localhost:3000](http://localhost:3000/).

## packages
### Style
* [SASS (SCSS)](https://www.npmjs.com/package/sass)
* [Tailwindcss](https://www.npmjs.com/package/tailwindcss)
### State management
* [Pinia](https://pinia.vuejs.org/ssr/nuxt.html)
### Input Validation
* [vee-validate](https://vee-validate.logaretm.com/v4/)
VeeValidate is the most popular Vue.js form library. It takes care of value tracking, validation, errors, submissions and more.
    * [@vee-validate/nuxt](https://www.npmjs.com/package/@vee-validate/nuxt)
    * [@vee-validate/i18n](https://www.npmjs.com/package/@vee-validate/i18n)
    * [@vee-validate/rules](https://www.npmjs.com/package/@vee-validate/rules#vee-validaterules)

## Authentication
In this project, we used the **JWT** standard for user authorization. JWT (JSON Web Token) is a commonly used user authentication and authorization standard, used to exchange data securely. 
Whenever the user wants to access a protected route or resource, the user agent should send the JWT, in the Authorization header using the Bearer schema. The content of the header should look like the following:
```
Authorization: Bearer <token>
```


