# html-taiwan-address-digger

## Usage

```js
import digger from 'html-taiwan-address-digger'

digger
  .dig(template)
  .then((result) => {
    console.log(result) // expect array

    // array[0] 台北市中山區龍江路106巷3號
    // array[1] 新竹市民生路286號
    // , etc.
  })
```

## 開發

```sh
npm run dev
```
