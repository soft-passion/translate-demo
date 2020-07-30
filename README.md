### API Endpoint
1. POST - /signup | create user
   - request params
      ```
      username: String,  
      password: String,  
      ```
2. GET - /login/:username/:password | user login
3. GET - /parse/:url | parsing website from url
4. GET - /translate/:url | Translate website contents and return html
5. POST - /upload | upload file
   - request params
      ```
      file: Form-data,  
      ```
6. GET - /download/:identifier | download file from file name
    - identifier should be file name


