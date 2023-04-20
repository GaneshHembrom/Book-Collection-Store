# Book-Collection-Store
Guidelines to run the website 
Here I have created a separate server file which returns the collection of book stored in mysql database
Open the folder in Vscode
To run the server 
open a terminal and move to folder server by the command "cd server"
Then run the command "nodemon index.js" or "node index.js"
To run the reactjs FrontEnd website 
Open another terminal by splitting the terminal but don't close the previous terminal
Then you need to move inside client by "cd client"
Then run npm start
Your website will run on port 3000
To add the book click on add book 
To update the book click on update 
To delete the book click on delete 
To view the book click on view 
You may get an error on mysql beacuse I have used my local mysql server to avoid the error go to index.js file and change the host, user, password with your local server of mysql
