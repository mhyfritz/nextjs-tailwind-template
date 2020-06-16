# Next.js + Tailwind CSS Template

## What's inside

- [Next.js](https://github.com/vercel/next.js) setup, bootstrapped with `create-next-app`
- [Tailwind CSS](https://github.com/tailwindcss/tailwindcss)
  - [Purging of unused CSS](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css)
  - [Inter](https://rsms.me/inter/) as default (sans) font
  - [`styled-jsx-plugin-postcss`](https://github.com/giuseppeg/styled-jsx-plugin-postcss)
    to allow [`@apply`](https://tailwindcss.com/docs/extracting-components/#extracting-css-components-with-apply)
    inside [`styled-jsx`](https://github.com/vercel/styled-jsx) tags
- [`postcss-preset-env`](https://github.com/csstools/postcss-preset-env)
  (and in extension [`autoprefixer`](https://github.com/postcss/autoprefixer))

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
