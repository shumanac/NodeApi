# NodeApi

This api is used to POST, GET, DELETE and PATCH posts. 

## To get all the post

### Request

```
GET /posts/

```

### Response

```
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 241
Date: Sat, 17 Jul 2021 21:51:21 GMT

```
## To create a new post

### Request

```
POST /posts/

Request Body 

{
"title":"...",
"description":"..."
}
```

### Respose

```
Response Header

HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 241
Date: Sat, 17 Jul 2021 21:51:21 GMT


Example Response Body

[{"_id":"60f348b06fe1881223d95efa","title":"first post","description":"hey","date":"2021-07-17T21:16:32.738Z","__v":0},{"_id":"60f3499e9b8a9b12415b540f","title":"second post","description":"hooray","date":"2021-07-17T21:20:30.925Z","__v":0}]
```

## To update an existing post

### Request

```
PATCH /posts/postId


Request Body

{
    "title": "changed post"
    
}

```

### Response

```
Response body

{"n":1,"nModified":1,"opTime":{"ts":"6986017624115118081","t":91},"electionId":"7fffffff000000000000005b","ok":1,"$clusterTime":{"clusterTime":"6986017624115118081","signature":{"hash":"1LtCyWD2mx9c6YZNlYMzYdvGxYI=","keyId":"6930034542182924292"}},"operationTime":"6986017624115118081"}

```

## To delete a post


### Request

```
DELETE /posts/postId


Request Body

{
    "id": "....."
    
}

```

### Response

```
Response Header

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 289
Date: Sat, 17 Jul 2021 21:41:07 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Response Body

{"n":1,"opTime":{"ts":"6986013702809976833","t":91},"electionId":"7fffffff000000000000005b","ok":1,"$clusterTime":{"clusterTime":"6986013702809976833","signature":{"hash":"ahRDMC4Gt8hU/3BK6mSKPCWVX+s=","keyId":"6930034542182924292"}},"operationTime":"6986013702809976833","deletedCount":1}



```


