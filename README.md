# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## API configuration

The frontend uses an Axios instance for backend requests. Create a local `.env` file from `.env.example` and set:

```env
VITE_API_BASE_URL=https://agrobridge-backend-totk.onrender.com
```

Install dependencies after pulling the API integration changes:

```bash
npm install
npm run dev
```

The waitlist flow posts to `/waitlist` through `src/api/waitlistService.js`. Partnership requests post to `/partner-waitlist` through `src/api/partnershipService.js`. Both success states read the returned waitlist position/status when the API provides them.
