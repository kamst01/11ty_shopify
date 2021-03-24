# 11ty_shopify
An absolute barebones starting point, using [11ty](https://11ty.dev) with [Shopify Private Apps](https://help.shopify.com/en/manual/apps/private-apps). Only relying on `node-fetch` & `dotenv`.

## Instructions
- A. Make sure your Shopify Store has a minimum of 1 product!
- B. Open your preferred command line interface.
1. Make your local directory.
```console
user@website:~$ mkdir project-name
```
2. Change directory into your new local directory.
```console
user@website:~$ cd project-name
```
3. Clone this repository into your new local directory.
```console
user@website/project-name:~$ git clone https://github.com/kamst01/11ty_shopify.git
```
4. Run the `npm` installer.
```console
user@website/project-name:~$ npm i
```
5. Create your `.env` file.
- Windows :
```console
user@website/project-name:~$ echo hello > .env
```
- macOS :
```console
user@website/project-name:~$ touch .env
```
6. Add [**Private Apps**](https://help.shopify.com/en/manual/apps/private-apps) (**Not Custom Apps!**) Shopify information to the new `.env`.
```.env
process.env.SIFYUSER='api-key'
process.env.SIFYDOMAIN='your-store.myshopify.com'
process.env.SIFYKEY='secret-key'
```
7. Run 11ty
```console
user@website/project-name:~$ npx @11ty/eleventy --serve
```

## Plans
- [ ] Use Shopify's [BuyButton.js](https://shopify.github.io/buy-button-js/)
- [ ] Use Shopify's [JS Buy SDK](http://shopify.github.io/js-buy-sdk/)

## Resources
- [11ty](https://11ty.dev)
- [Shopify](https://developer.shopify.com)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [dotenv](https://www.npmjs.com/package/dotenv)
