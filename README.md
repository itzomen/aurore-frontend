<p align="center">
  <a href="https://www.medusa-commerce.com">
    <img alt="Medusa" src="https://i.imgur.com/USubGVY.png" width="100" />
  </a>
</p>

<h1 align="center">
  Aurore Storefront Starter
</h1>

> **Prerequisites**: To use the starter you should have the Aurore Medusa server running locally on port 9000 or deployed. Check out [aurore-medusa](https://github.com/traleor/aurore-medusa) for a quick setup.

> **NB**: The wagtail CMS backend is not yet integrated

# Overview

![aurore-cover](https://github.com/traleor/aurore-frontend/blob/main/public/cover.png)

## [Live Demo](https://aurore-storefront.herokuapp.com/)

Aurore is a Multi-vendor marketplace built using Medusa, Wagtail for the CMS and Next.Js for the Front-end.
This marketplace is easy to maintain and update to the latest Medusa version as it is built entirely with the tools provided by Medusa (no third-party included).

## Participants:

<!-- markdown table with the team infos -->

| Name        | Github                                   | Twitter                                      | Discord              |
| ----------- | ---------------------------------------- | -------------------------------------------- | -------------------- |
| Peng Boris  | [Github](https://github.com/itzomen)     | [Twitter](https://twitter.com/itz_omen)      | `itzomen#4530`       |
| Njoh Prince | [Github](https://github.com/NjohPrince)  | [Twitter](https://twitter.com/NjohNoh)       | `theunicorndev#2216` |
| Egbe Nesta  | [Github](https://github.com/nestaenow)   | [Twitter](https://twitter.com/nestaenow)     | `NestaEnow#4271`     |
| Meli Imelda | [Github](https://github.com/meli-imelda) | [Twitter](https://twitter.com/Meli_Tchouala) | `MeliImelda#2152`    |

### Preview
![aurore-demo](https://user-images.githubusercontent.com/61752841/197415990-5931a38b-9504-4238-b602-5784c0a11950.gif)

The Medusa Next.js Starter is built with:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Medusa](https://medusajs.com/)

# Quickstart

## Setting up the environment variables

Navigate into your projects directory and get your enviroment variables ready:

```shell
cd aurore-frontend
mv .env.template .env.local
```

### Install dependencies

Use Yarn, PNPM or NPM to install all dependencies.

```shell
yarn
# 
pnpm i
# 
npm i
```

### Start developing

You are now ready to start up your project.

```shell
yarn dev
# 
pnpm dev
# 
npm dev
```

### Open the code and start customizing

Your site is now running at http://localhost:8000!

Edit `/pages/index.tsx` to see your site update in real-time!

# Payment integrations

By default this starter supports the following payment integrations

- [Stripe](https://stripe.com/)
- [Paypal](https://www.paypal.com/)

To enable the integrations you need to add the following to your `.env.local` file:

```shell
MEDUSA_PAYMENT_STRIPE_PUBLIC_KEY=<your-stripe-public-key>
MEDUSA_PUBLIC_PAYPAL_CLIENT_ID=<your-paypal-client-id>
```

You will also need to setup the integrations in your Medusa server. See the [Medusa documentation](https://docs.medusajs.com) for more information on how to configure [Stripe](https://docs.medusajs.com/add-plugins/stripe) and [PayPal](https://docs.medusajs.com/add-plugins/paypal) in your Medusa project.

# Search integration

This starter is configured to support using the `medusa-search-meilisearch` plugin out of the box. To enable search you will need to enable the feature flag in `./store-config.json`, which you do by changing the config to this:

```json
{
  "features": {
    "search": true
  }
}
```

Before you can search you will need to install the plugin in your Medusa server, for a written guide on how to do this – [see our documentation](https://docs.medusajs.com/add-plugins/meilisearch).

The search components in this starter are developed with Algolia's `react-instant-search-hooks-web` library which should make it possible for you to seemlesly change your search provider to Algoli instead of MeiliSearch.

To do this you will need to add `algoliasearch` to the project, by running

```shell
yarn add algoliasearch
```

After this you will need to switch the current MeiliSearch `SearchClient` out with a Alogolia client. To do this update `@lib/search-client`.

```ts
import algoliasearch from "algoliasearch/lite"

const appId = process.env.NEXT_PUBLIC_SEARCH_APP_ID || "test_app_id" // You should add this to your environment variables

const apiKey = process.env.NEXT_PUBLIC_SEARCH_API_KEY || "test_key"

export const searchClient = algoliasearch(appId, apiKey)

export const SEARCH_INDEX_NAME =
  process.env.NEXT_PUBLIC_INDEX_NAME || "products"
```

After this you will need to set up Algolia with your Medusa server, and then you should be good to go. For a more thorough walkthrough of using Algolia with Medusa – [see our documentation](https://docs.medusajs.com/add-plugins/algolia), and the [documentation for using `react-instantsearch-hooks-web`](https://www.algolia.com/doc/guides/building-search-ui/getting-started/react-hooks/).

# Resources

## Learn more about Medusa

- [Website](https://www.medusa-commerce.com/)
- [GitHub](https://github.com/medusajs)
- [Documentation](https://docs.medusa-commerce.com/)

## Learn more about Next.js

- [Website](https://nextjs.org/)
- [GitHub](https://github.com/vercel/next.js)
- [Documentation](https://nextjs.org/docs)

## Custom [Aurore Medusa](https://github.com/traleor/aurore-medusa) and [CMS Endpoints](https://github.com/traleor/aurore-wagtail)

### CMS

```bash
# All Pages:
# https://aurore-cms.herokuapp.com/api/pages/v2/pages
# Home Page
# https://aurore-cms.herokuapp.com/api/pages/v2/pages/3/
```

### Medusa

```bash
# Backend: https://aurore-backend.herokuapp.com
# GET /store/brand : Get all brands
# GET /store/brand/:id : Get a brand with id
# GET /store/brands/:handle : Get a brand with handle
# POST /store/brand : Create Brand
# PUT /store/brand/:id/ : Update brand
# DELETE /store/brand/:id : Delete a brand with id
```
