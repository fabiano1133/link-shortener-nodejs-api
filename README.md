# Shortened URL API V1

## O Shortened URL API é uma aplicação backend capaz de receber uma URL a partir do padrão web (ex: http://www.domain.com.br) e converter em um padrão http://AbCdEfGH.

### Métodos
- Requisições para API devem seguir os padrões
  - GET: Recupera o endereço web de origem através da URL encurtada.
  - POST: Converte uma URL para o padrão URL encurtada.
  - PUT: Atualiza o status de uma URL encurtada e altera o endereço.
  - DELETE: Remove uma URL do banco de dados.

### Respostas
  - 201: Created.
  - 200: OK
  - 204: No Content
  - 400: Bad Request.
  - 404: URL not found.
  - 400: Unable to update an already shortened URL.
  - 400: it is not possible to shorten an already shortened url
  - 400: Unexpired URL
  - 400: Unable to delete an already shortened URL

### Linguagem de progração utilizada
  - Javascript (Node Js / Typescript)

### Banco de Dados
  - Tipo
    - NoSQL
  - Nome
    - MongoDB

### Requisítos para executar a aplicação
  - Node Js instalado.
  - MongoDB instalado (MongoDBCompass) ou uma instância em um container Docker.
  - Editor de código (ex: VS Code).

### Como executar a aplicação
  - executar o comando yarn para baixar todas as dependências (node_modules).
  - criar o arquivo .env e criar as variáveis seguinte:
    - SERVER_PORT=
    - MONGO_DB_URL=
    - REDIS_HOST=
    - REDIS_PORT=
    - REDIS_PASS=
  - executar o comando yarn dev

### Features da aplicação
  - Documentação da API (Swagger)
    - Rota: http://localhost:port/swagger-api-docs
    - Recurso: Testar todas as rotas da aplicação

  - Criar uma URL encurtada (POST)
    - Rota: http://localhost:port/v1/createurl
    - Requisito(s): Enviar uma URL no corpo da requisição
      ```javascript
      {
       "url":"https://www.google.com.br"
      }
    - Resposta: Informando uma URL inválida
      
      ```javascript
      {
        "statusCode": 400,
        "error": "Bad Request",
        "message": "Validation failed",
        "validation": {
          "body": {
            "source": "body",
            "keys": [
              "url"
            ],
            "message": "\"url\" deve ser uma URL válida"
          }
        }
      }
    - Resposta: Informando uma URL válida

      ```javascript
      {
	      "url": {
		      "url": "https://www.github.com",
		      "hash": "ioB9zGC0S",
          "shortUrl": "http://localhost:3333/v1/ioB9zGC0S",
          "isShortened": true,
          "isActive": true,
          "expired": false,
          "expiresAt": "2022-08-18T20:27:27.390Z",
          "_id": "62f5664a5307c4223116f09f",
          "createAt": "2022-08-11T20:27:54.061Z",
          "__v": 0
	      },
	      "message": "your shortened url will expire in 7 days"
      }

  - Acessar a URL de origem através da URL encurtada (GET).
    - Rota: http://localhost:port/v1/hash
    - Requisito(s): Inserir a URL encurtada no campo URL do browser
      ```javascript
      {
       "url":"http://localhost:port/v1/cGSjhj6u"
      }
    - Resposta: Informando uma URL inválida
      
      ```javascript
      {
        "statusCode": 404,
        "error": "URL not found!",
      }
    - Resposta: Informando uma URL válida

      ![Screenshot](./src/assets/img_git/giturl.PNG)
  
  - Não deve ser possível atualizar uma URL encurtada (PUT).
    - Rota: http://localhost:port/v1/update/hash
    - Requisito(s): 
        - Inserir a URL encurtada no corpo da requisição
        - Inserir a hash como paramento da requisição
      ```javascript
      {
       "url":"http://localhost:port/v1/cGSjhj6u"
      }
    - Resposta: Informando uma URL inválida
      
      ```javascript
      {
        "statusCode": 404,
        "error": "URL not found!",
      }

    - Resposta: Informando uma URL válida

      ```javascript
      {
        "statusCode": 400,
        "error": "Unable to update an already shortened URL",
      }

  - Não deve ser possível deletar uma URL encurtada (DELETE).
    - Rota: http://localhost:port/v1/delete/hash
    - Requisito(s): 
        - Inserir a hash como parametro da requisição
      ```javascript
      
        http://localhost:port/v1/delete/cGSjhj6u
      
    - Resposta: Informando uma URL inválida
      
      ```javascript
      {
        "statusCode": 404,
        "error": "URL not found!",
      }

    - Resposta: Informando uma URL válida

      ```javascript
      {
        "statusCode": 400,
        "error": "Unable to delete an already shortened URL",
      }
      
  - Deve ser possível desabilitar uma URL encurtada (POST).
    - Rota: http://localhost:port/v1/status/id
    - Requisito(s): 
        - Inserir o id da URL encurtada como parametro da requisição
          - "http://localhost:port/v1/delete/62f5664a5307c4223116f09f"
        
        - Inserir o tipo boolean no corpo da requisição
      
      ```javascript
      {
        "isActive": false,
      }
      
    - Resposta: Informando uma id que não existe no banco de dados
      
      ```javascript
      {
        "statusCode": 404,
        "error": "URL not found!",
      }

    - Resposta: Informando uma URL válida
      - 204 : No content
  
  - Não Deve ser possível encurtar uma URL já encurtada (POST).
    - Rota: http://localhost:port/v1/retrycreateshortenedurl/hash
    - Requisito(s): 
        - Inserir a hash como parametro da requisição
          - "http://localhost:port/v1/retrycreateshortenedurl/wUylLHD9E"
        
        - Inserir a URL encurtada no corpo da requisição
      
      ```javascript
      {
        "url": "http://localhost:port/v1/wUylLHD9E",
      }
      
    - Resposta: Informando uma hash que não existe no banco de dados
      
      ```javascript
      {
        "statusCode": 404,
        "error": "URL not found!",
      }

    - Resposta: Informando uma hash válida
      ```javascript
        {
          "statusCode": 400,
          "error": "it is not possible to shorten an already shortened url",
        }
  - Deve ser possível recriar uma URL a partir de uma URL já existente com status expirada (POST).
    - Rota: http://localhost:port/v1/recreateexpiredshortenedurl
    - Requisito(s): 
        - Inserir a URL encurtada no corpo da requisição
        ```javascript
          {
            "shortUrl": "http://localhost:port/v1/wUylLHD9E",
          }
      
    - Resposta: Informando uma URL encurtada com status não expirada
      
      ```javascript
      {
        "statusCode": 400,
        "error": "Unexpired URL",
      }

    - Resposta: Informando uma URL encurtada inválida
      
      ```javascript
      {
        "statusCode": 404,
        "error": "Shortened URL not found!",
      }

    - Resposta: Informando uma URL encurtada expirada
      ```javascript
        {
          "urlShortened": {
          "url": "http://localhost:3333/v1/y85DbbHQa",
          "hash": "s3e2i4QAQ",
          "shortUrl": "http://localhost:3333/v1/s3e2i4QAQ",
          "isShortened": true,
          "isActive": true,
          "expired": false,
          "expiresAt": "2022-08-19T19:42:25.735Z",
          "_id": "62f710f2c8066f0b72d54129",
          "createAt": "2022-08-13T02:48:18.098Z",
          "__v": 0
          },
          "message": "URL RECRIADA COM SUCESSO"
      }
