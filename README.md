# auto-client-request

## How to start?

Run the setup command

```
npm run setup
```

Then, on separate processes, run:

```
npm run frontend
npm run backend
```

To update the frontend client (be sure that backend is running):

```
npm run update-frontend
```

## Project structure

This project contains a barebone and minimal mono-repo setup. The goal is to provide a demo on how you can achieve automated client requests, where every update on the `backend` is reflected on the `frontend`. For instance, with this setup, you'll see that by doing a breaking change (like removing an endpoint, making a property mandatory, etc.), the TypeScript build will fail.

## How to handle changes?

You can make a change on the `backend` folder, which will also update the OpenAPI specification (available at `http://127.0.0.1:3042/documentation/json`). Then, on the `frontend` folder, you can run `npm run update` to update the client. This command will generate a client based on the OpenAPI JSON definition available locally, so be sure to run `npm run backend` before the `npm run update`. Then, with `npm run build` you can check that TypeScript still compiles (and there are no errors).

## Troubles running the code?

Try with:

```
npm run clean && npm run setup
```
