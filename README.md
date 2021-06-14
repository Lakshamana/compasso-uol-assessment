# Compasso Uol Assessment

This repo contains Compasso Uol Assessment results. Please follow the guidelines
in order to better understand how it works.

## System Requirements

- Node.js >= 14.17.0 LTS. You can use either [nvm](https://github.com/nvm-sh/nvm) or
  [asdf](https://github.com/asdf-vm/asdf) and [asdf-nodejs plugin](https://github.com/asdf-vm/asdf-nodejs)
  for managing node versions to run this project.

There's a .nvmrc file in the project root directory. That should set properly set node version.
Ensure that node version is LTS (or above) by running

```
node -v
```

PS: if you're using `asdf` and `asdf-nodejs` be sure to set [legacy version file support](https://github.com/asdf-vm/asdf-nodejs#nvmrc-and-node-version-files)

## Basic usage

### Install dependencies

`(npm|yarn) install`

Before actually running the project, you MUST first setup environment variables.
By default, this repo will not ship with `.env` file. That said, you must run the following commands:

### Generate `.env` file

`cp .env.example .env`

### Migrate database

`rm tmp/db.sqlite3; node ace migration:run`

You should always migrate before running database seeds

### Run database seeds

`node ace db:seed`

This step will create sqlite database under ./tmp directory
