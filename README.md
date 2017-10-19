<p align="center"><img width="300" src="https://raw.githubusercontent.com/liam-potter/adonuxt-4/master/resources/static/img/logo.png"></p>


# AdoNuxt
> [Adonis 4](http://dev.adonisjs.com/) + [Nuxt](https://nuxtjs.org) = :fire:


## Installation
This is a project template for [adonis-cli](https://github.com/adonisjs/adonis-cli). If you do not already have it installed simply run:
```bash
npm install -g @adonisjs/cli
```

> Adonis 4 requires adonis-cli >= 3.0.14 (`adonis --version`). If upgrading from Adonis 3.x remove the old version before reinstalling the latest version as above.

Once you have the CLI installed you can clone this template using the CLI which will automatically install all dependencies (where `<project-name>` is the name of your project):
```bash
# npm
adonis new --blueprint liam-potter/adonuxt-4 <project-name>

# yarn
adonis new --blueprint liam-potter/adonuxt-4 <project-name> --yarn
```

## Getting Started
- Install the relevant database package e.g. for Postgres: `npm install pg` (or `yarn add pg`)
- Configure your database options in the `.env` file


## Usage
| npm | yarn | Description |
|-----|------|-------------|
| npm run dev | yarn dev | Start Adonis server in development with Nuxt in development mode (hot reloading + watcher). Listen on [http://localhost:3333](http://localhost:3333) |
| npm run dev-debug | yarn dev-debug | As above, with additional Adonis debugging available at `chrome://inspect` |
| npm run build | yarn build | Build the Nuxt application for production |
| npm run start | yarn start | Start the Adonis server in production |

## Features
See [Adonis features](https://dev.adonisjs.com/docs) and [Nuxt features](https://nuxtjs.org/guide/#features)

## Sample API Endpoint
This template comes with a sample Adonis API endpoint for the `User` model. To use it simple run the sample migration and seed provided.

```bash
adonis migration:run
adonis seed
```

At some point I will update this boilerplate to also include a simple Nuxt CRUD interface for this endpoint :smile:

## Adonis Changes
- No more `public` directory, use `resources/static` instead
- The `resources\views` directory is still available for non-Nuxt use but be wary that your `.edge` templates will live in the same directory as your Nuxt application code.

## Nuxt changes
- The `nuxt.config.js` file is now in `config/nuxt.js`
- The Nuxt project directory is `resources`

## Documentation
- [Adonis](https://dev.adonisjs.com/docs)
- [Nuxt](https://nuxtjs.org/guide)
- [Vue](https://vuejs.org/guide)

## Licenses
- [Adonis license](https://github.com/adonisjs/adonis-framework/blob/develop/LICENSE.txt)
- [Nuxt license](https://github.com/nuxt/nuxt.js/blob/master/LICENSE.md)
- [Vue license](https://github.com/vuejs/vue/blob/master/LICENSE)
