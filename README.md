# Compasso Uol Assessment

This repo contains Compasso Uol Assessment results. Please follow the guidelines
in order to better understand how it works. Please notice that all scripts here written
are bash-compliant, therefore if you do not use bash make sure to reproduce that effect on
you system

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

### Generate `.env` file

`cp .env.example .env`

Before actually running the project, you MUST first setup environment variables.
By default, this repo will not ship with `.env` file.

### Migrate database

`mkdir tmp; node ace migration:run`

Creates `tmp` directory and migrates database. You should always migrate before running database seeds

### Run database seeds

`node ace db:seed`

This step will create sqlite database under ./tmp directory

### Run dev server

`npm run server`

This will run dev server on host localhost:3333

### API docs

Please, notice ther's not a field called `age` in users migration. It is because if you
have a birth date you don't need (nor want to) to store a field. It can be just calculated.

Normally, I'd write decent API docs with swagger and stuff, but for the sake of KISS
let me write it down here (listing request formats only):

- Resources: Users and Cities (customer is called here as 'user')

- User routes (/users):

  - List users:

    - Endpoint: /users
    - Method: GET
    - Query string:
      - name: string

  - Create user:
    - Endpoint: /users
    - Method: POST
    - Headers: 'Content-Type: application/json'
    - Body format:
      ```
      {
        name: string, required,
        gender: string, enum (see app/Helpers/constants.ts),
        genderSpecification: string, required when gender === 'GENDER_OTHER',
        birthDate: string, required, date-formated string as "yyyy-MM-dd",
        living_city_id: number, required, city id reference
      }
      ```
  - Get specified user:

    - Endpoint: /users/{id}
    - Method: GET

  - Update user name:
    - Endpoint: /users/{id}
    - Method: PUT
    - Headers: 'Content-Type: application/json'
    - Body format:
      ```
      {
        name: string, required
      }
      ```
  - Delete user:
    - Endpoint: /users/{id}
    - Method: DELETE

- Cities routes (/cities):

  - Query cities:

    - Endpoint: /cities
    - Method: GET
    - Query strings:
      - name: string
      - state: string

  - Create city:
    - Endpoint: /cities
    - Method: POST
    - Headers: 'Content-Type: application/json'
    - Body format:
      ```
      {
        name: string, required,
        state: string, required, enum (see GET /available-states)
      }
      ```

- Available states:
  - Endpoint: /available-states
  - Method: GET
