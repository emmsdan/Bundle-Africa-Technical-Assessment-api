# Bundle-Africa-Technical-Assessment-api

# Assignment 2: Rewarder API

### URL [ui.bundle-africa.emmsdan.com](ui.bundle-africa.emmsdan.com)

### API [http://bundle-africa.emmsdan.com.ng](http://bundle-africa.emmsdan.com.ng)

### Installation

```bash
yarn install
```

```bash
npm install
```

### Run app

```bash
yarn dev
```

```bash
npm run dev
```

### Run Test

```bash
yarn test
```

```bash
npm run test
```

### Run Build

```bash
yarn build
```

```bash
npm run build
```

### API

#### Request API

POST: http://bundle-africa.emmsdan.com.ng/reward

```javascript
const formData = new FormData();
formData.append("file", csvFileObject, csvFileObject.name);
```

```bash
   curl 'http://bundle-africa.emmsdan.com.ng/reward' \
  --data-raw $'------WebKitFormBoundarym5ZSv9hyi3XAO1dL\r\nContent-Disposition: form-data; name="file"; filename="spreadsheet - Sheet1-2.csv"\r\nContent-Type: text/csv\r\n\r\n\r\n------WebKitFormBoundarym5ZSv9hyi3XAO1dL--\r\n' \
  --compressed
```

#### Response API

```javascript
{

    data: [
        {
            customerID: 1,
            customerFirstName: "Lanre",
            orderValue: 100,
            validity: 0,
            price: 0,
        },
    ]
    meta: {
            totalValidity: 12,
            totalAmount: 1200,
            totalOrderValue: 18100
    }
};

```
