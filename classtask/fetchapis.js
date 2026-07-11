//✅ What is Fetch API?
//The Fetch API is used to send HTTP requests (GET, POST, PUT, DELETE, etc.) to a server and receive data.
//Interview Definition:
//Fetch API is a modern JavaScript API used to make HTTP requests to a server and retrieve or send data asynchronously.


//fetch using get request
fetch("https://jsonplaceholder.typicode.com/users/3")// here we are sending request to the server 
    .then(response => response.json())// here are we are geting a response in json formate 
    .then(data => {// here data is converted into js formate 
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

//fetch using async/await request
async function getUser() {

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        const data = await response.json();

        console.log(data);

    }

    catch(error){

        console.log(error);

    }

}
getUser();