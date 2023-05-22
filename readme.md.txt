JWT AUTH AND AUTHORISATION - II - ONLY BACKEND
Create an app (ONLY BACKEND)
It should have the following endpoints - /signup, /login, /logout, /products, /addproducts, /deleteproducts.
Take care of Authentication - Only logged in users should be able to access /products endpoint.
Take care of Authorisation - Only users who's role is "seller", should be able to access /addproducts and /deleteproducts endpoint.
Store the data in Mongo Database (use Atlas)
Mandatorily - Take care of all good practices like send status codes, MVC structure, encrypt passwords, use jwt for token etc
Have refresh tokens and token expiry too in your authentication system, keep the jwt expiry time as 1 minute and refresh token expiry time as 5 minutes
Have logout endpoint and implement logout using blacklisting.
Deploy Backend on heroku/render/railway/cyclic etc.