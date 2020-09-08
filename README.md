# decoder-app

## Project setup
```
npm run install
OR
yarn install
```

### Run a local development server
```
npm run serve
OR
yarn serve
```

### Create a production build to upload
```
npm run build
OR
yarn build
```

This app uses VueJS and creates a simple Translator component. You can modify `encryptions.js` to add more languages in the future.

Store any new encryption + decryption techniques you create in encryptions and export default an object.
```ts
export default {
    encode: (input: string) => {
        /** Some sort of code that will ENCODE an input string */
    },
    decode: (input: string) => {
        /** Some sort of code that will DECODE an input string */
    }
}
```