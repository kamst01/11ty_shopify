# 11ty_shopify
An absolute barebones starting point, using [11ty](https://11ty.dev) with [Shopify Private Apps](https://help.shopify.com/en/manual/apps/private-apps). Only relying on `node-fetch` & `dotenv`.

## Instructions
- A. Make sure your Shopify Store has a minimum of 1 product!
- B. Open your preferred command line interface.
1. Clone this repository & make a new local directory.
```console
user@website:~$ git clone https://github.com/kamst01/11ty_shopify.git project-name
```
2. Change into your new directory with the cloned repo.
```console
user@website:~$ cd project-name
```
3. Run the `npm` installer.
```console
user@website/project-name:~$ npm i
```
4. Create your `.env` file.
- Windows :
```console
user@website/project-name:~$ echo hello > .env
```
- macOS :
```console
user@website/project-name:~$ touch .env
```
5. Add [**Private Apps**](https://help.shopify.com/en/manual/apps/private-apps) (**Not Custom Apps!**) Shopify information to the new `.env`.
```.env
process.env.SIFYUSER='api-key'
process.env.SIFYDOMAIN='your-store.myshopify.com'
process.env.SIFYKEY='secret-key'
```
6. Run 11ty
```console
user@website/project-name:~$ npm start
```

## Plans
- [ ] Use Shopify's [BuyButton.js](https://shopify.github.io/buy-button-js/)
- [ ] Use Shopify's [JS Buy SDK](http://shopify.github.io/js-buy-sdk/)

## Resources
- [11ty](https://11ty.dev)
- [Shopify](https://developer.shopify.com)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [dotenv](https://www.npmjs.com/package/dotenv)
