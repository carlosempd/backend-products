# Product catalog API built with NodeJS, MongoDB and Mongoose

## Description
This is a NodeJS application that serves endpoints to perform CRUD operations on products entity.

Here is a list of the endponts:

Here is a list of the endponts:
| endpoint | method | description| response OK|
| --- | --- | --- | --- |
| /products | GET | List all products paginated | ``` { data: Product[], totalCount: number, totalPages: number, currentPage: number, perPage: number } ``` |
/products/:id | GET | Get a product by its ID |  ``` { data: Product } ``` |
/products | POST | Create a new product |  ``` { message: Product created successfully, data: Product } ``` |
/products/:id  | PUT | Update a product |  ``` { message: 'Product updated succesfully', data: Product } ``` |
/products/:id | DELETE | Delete (soft delete) a product |  ``` { message: 'Product deleted succesfully', data: Product } ``` |

## Entities
There ir a main entities in this project, 'Product'
```typescript
Product {
    name: string
    description: string
    sku: string
    image: string
    tags: string
    price: number
    stock: integer
    priceHistory: [{ value: number, date: Date }]
    stockHistory: [{ value: number, date: Date }]
    isDeleted: boolean
}
```

## Environment Variables
It is important to configure required environment variables in order to run the project,
here is an example with the required env variables

| **.env** |
| --- | 
```
MONGO_URL="yourMongoURLDatabase"
DB_NAME='databaseName'

```

| variable | description |
| --- | --- | 
| MONGO_URL | Url of a provisioned mongo database |
| DB_NAME | database name |

## Running the app


```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```