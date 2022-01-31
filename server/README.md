<br/>
<br/>
<p align="middle" >
  <img width="200px;" src="./asset/cart.png"/>
</p>
<h2 align="middle">장바구니 API</h2>
<p align="middle">Clean Code React 장바구니 미션 API</p>

## 🌏 baseUrl

```
localhost:3000
```

## 🔗 API 바로가기

- [🎁 상품(products)](https://github.com/yujo11/shopping-cart-nest-api#-%EC%83%81%ED%92%88)
- [🛒 장바구니(carts)](https://github.com/yujo11/shopping-cart-nest-api#-%EC%9E%A5%EB%B0%94%EA%B5%AC%EB%8B%88)
- [🗒 주문(orders)](https://github.com/yujo11/shopping-cart-nest-api#-%EC%A3%BC%EB%AC%B8)

## 🎁 상품

### 상품 목록 조회

| method | uri       |
| ------ | --------- |
| GET    | /products |

```json
{
  "response": [
    {
      "id": 1,
      "price": 10000,
      "name": "치킨",
      "imageUrl": "http://example.com/chicken.jpg"
    },
    {
      "id": 2,
      "price": 20000,
      "name": "피자",
      "imageUrl": "http://example.com/pizza.jpg"
    }
  ]
}
```

### 상품 추가

| method | uri       |
| ------ | --------- |
| POST   | /products |

```json
{
  "requestBody": {
    "products": {
      "price": 10000,
      "name": "치킨",
      "imageUrl": "http://example.com/chicken.jpg"
    }
  }
}
```

### 상품 단일 조회

| method | uri            |
| ------ | -------------- |
| GET    | /products/{id} |

```json
{
  "response": {
    "id": 1,
    "price": 10000,
    "name": "치킨",
    "imageUrl": "http://example.com/chicken.jpg"
  }
}
```

### 상품 단일 삭제

| method | uri            |
| ------ | -------------- |
| DELETE | /products/{id} |

```json
{
  "response": {}
}
```

## 🛒 장바구니

### 장바구니 아이템 목록 조회

| method | uri    |
| ------ | ------ |
| GET    | /carts |

```json
{
  "response": {
    "id": 1,
	  "product": {
			"name": "test",
			"price": 1234,
			"imageUrl": "test.com",
			"id": 1
		},
	},
	{
    "id": 5,
		"product": {
			"name": "tes11111t",
			"price": 1234,
			"imageUrl": "test.com",
			"id": 10
		}
	},
}
```

### 장바구니 아이템 추가

| method | uri    |
| ------ | ------ |
| POST   | /carts |

```json
{
  "requestBody": {
    "product": {
      "id": 10,
      "name": "tes11111t",
      "price": 1234,
      "imageUrl": "test.com"
    }
  }
}
```

### 장바구니 아이템 단일 삭제

| method | uri             |
| ------ | --------------- |
| DELETE | /carts/{cartId} |

```json
{
  "response": {}
}
```

## 🗒 주문

### 주문 추가(주문하기)

| method | uri     |
| ------ | ------- |
| POST   | /orders |

```json
{
  "requestBody": {
    "orderDetails": [
      {
        "id": 1,
        "price": 10000,
        "name": "치킨",
        "imageUrl": "http://example.com/chicken.jpg",
        "quantity": 5
      },
      {
        "id": 2,
        "price": 20000,
        "name": "피자",
        "imageUrl": "http://example.com/pizza.jpg",
        "quantity": 3
      }
    ]
  }
}
```

### 주문 목록(내역) 조회

| method | uri     |
| ------ | ------- |
| GET    | /orders |

```json

{
  "response": [
    {
      "id": 1,
      "orderDetails": [
        {
          "id": 1,
          "price": 10000,
          "name": "치킨",
          "imageUrl": "http://example.com/chicken.jpg",
          "quantity": 5
        },
        {
          "id": 2,
          "price": 20000,
          "name": "피자",
          "imageUrl": "http://example.com/pizza.jpg",
          "quantity": 3
        }
      ]
    },
    {
      "id": 2,
      "orderDetails": [
        {
          "id": 1,
          "price": 10000,
          "name": "치킨",
          "imageUrl": "http://example.com/chicken.jpg",
          "quantity": 5
        },
        {
          "id": 2,
          "price": 20000,
          "name": "피자",
          "imageUrl": "http://example.com/pizza.jpg",
          "quantity": 3
        }
      ]
    }
  ]
```

### 주문 단일 조회

| method | uri          |
| ------ | ------------ |
| GET    | /orders/{id} |

```json
{
  "response": {
    "id": 1,
    "orderDetails": [
      {
        "id": 1,
        "price": 10000,
        "name": "치킨",
        "imageUrl": "http://example.com/chicken.jpg",
        "quantity": 5
      },
      {
        "id": 2,
        "price": 20000,
        "name": "피자",
        "imageUrl": "http://example.com/pizza.jpg",
        "quantity": 3
      }
    ]
  }
}
```

## ⚖️ License

[MIT licensed](LICENSE)
