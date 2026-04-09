let js = 'amazing';
        if(js ==='amazing')alert('javascript is fun!');

        console.log(40 + 8 + 23 - 10);//its output will show in console of browser
        let myName= "komal";
        console.log(myName);
        let firstname= "komalkumari";
        console.log(firstname);
        let country= "India";
        console.log(country);

        //let const and var
        let age = 30;
        age = 31;// we can change the value of a variable declared with let
        console.log(age);
        let birthyear;// we can declare a variable without assigning a value to it, but we cannot do this with a constant variable
        console.log(birthyear);
        const birthyear1 = 1990;
        // birthyear1 = 1991; // this will give error because we cannot change the value of a constant variable
        console.log(birthyear1);
        var firstjob = 'programmer';// we can declare a variable with var and change its value later, but it is not recommended to use var because it has some issues with scope and hoisting
        console.log(firstjob);
        firstjob = 'teacher';
        console.log(firstjob);
        //const is used when we want to declare a variable that will never change its value, such as the value of pi or the speed of light. let is used when we want to declare a variable that can change its value, such as the age of a person or the score of a game. var is not recommended to use because it has some issues with scope and hoisting, and it can lead to bugs in our code.

        let myname1= 'komal singh';
        let myname2= "Neha singh";
        console.log(myname1 + " " + myname2);