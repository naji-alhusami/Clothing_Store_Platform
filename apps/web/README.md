# THREAD Web Storefront

A responsive commerce frontend built with Next.js 16 and React 19.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production verification

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The current catalog, saved-item state, and bag state are local demonstration data. Connect customer authentication, inventory, checkout, and order APIs before accepting live orders.
