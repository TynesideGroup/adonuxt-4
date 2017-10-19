# Adonis 4 + NuxtJS boilerplate

## Setup
- Run `npm install` or `yarn` to install all dependencies.
- Create a `.env` file using the `.env.example` provided
- Configure your database options in the `.env` file
- Install the relevant database package e.g. for Postgres: `npm install pg` (or `yarn add pg`)

## Run
- Dev (hot reload + watcher): `npm run dev` or `yarn dev`
- Dev + debugging: `npm run dev-debug` or `yarn dev-debug`
- Build for production: `npm run build` or `yarn build`
- Run production server: `npm run start` or `yarn start`

## Sample API Endpoint
This template comes with a sample CRUD endpoint for the `User` model. In order for it to work you will need to run the sample migration and seed provided.

```bash
adonis migration:run
adonis seed
```
