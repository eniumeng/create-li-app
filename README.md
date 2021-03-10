# create-li-app

## Scaffolding Your Li Project with Vite

> **Compatibility Note:**
> Vite requires [Node.js](https://nodejs.org/en/) version >=12.0.0.

With NPM:

```bash
$ npm init li-app
```

With Yarn:

```bash
$ yarn create li-app
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + Vue project, run:

```bash
npm init li-app my-vue-app --template vue
```

Currently supported template presets include:

- `vanilla`
- `vue`
- `vue-ts`
- `react`
- `react-ts`
- `preact`
- `preact-ts`
- `lit-element`
- `lit-element-ts`

## Community Templates

create-li-app is a tool to quickly start a project from a basic template for popular frameworks.

```bash
npx degit user/project my-project
cd my-project

npm install
npm run dev
```

If the project uses `main` as the default branch, suffix the project repo with `#main`

```bash
npx degit user/project#main my-project
```
