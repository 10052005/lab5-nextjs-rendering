# Lab 5: React ES6 and Rendering Methods in Next.js

SED312 – Advanced Web Engineering

## About
A Next.js project that covers ES6 features in React (Tasks 1-5), React without JSX (Task 6),
and a comparison of SSR, SSG and CSR (Task 7), including a dynamic SSR page.

## Project structure
- `app/task1` to `app/task5`: ES6 arrow functions, let/const, destructuring, ternary operator, spread operator
- `public/task6.html`: React without JSX
- `app/ssg`, `app/ssr`, `app/csr`: the same page built with each rendering method
- `pages/ssr/[id].js`: dynamic SSR page using `getServerSideProps` (e.g. `/ssr/2` fetches post 2)

## How to run
```
npm install
npm run dev
```
For performance testing use production mode:
```
npm run build
npm start
```

## Performance comparison (production mode, Network tab)
| Method | Rendered | TTFB | Data in page source |
|---|---|---|---|
| SSG | Server, once at build time | 32.16 ms | Yes |
| SSR | Server, on every request | 829.02 ms | Yes |
| CSR | Browser, after JavaScript loads | 79.30 ms | No |

- **SSG** is fastest because the HTML is prebuilt.
- **SSR** is slower because the server builds the page on every request, but the data is always fresh.
- **CSR** sends an empty shell quickly, then the browser fetches the data, so users see "Loading..." first.

## Best use cases
- **SSG:** blogs, documentation, content that rarely changes.
- **SSR:** dashboards, news, personalised pages, anything needing fresh data and good SEO.
- **CSR:** interactive private apps where SEO does not matter.