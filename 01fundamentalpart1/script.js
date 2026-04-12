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
        //stringtemplet
        const myname3= `my name is  ${myname1} and i am friend with ${myname2}`;
        console.log(myname3);
        //type conversion
        //Type conversion is done manually by the programmer while coercion happen automatically 
        const inputyear= '1991';
        console.log(Number(inputyear) + 18);
        console.log(inputyear + 18);//this will give us 199118 because inputyear is a string and when we add a number to a string, it will concatenate the two values instead of adding them. to avoid this, we can use the Number() function to convert the string to a number before adding it to 18.
        console.log(Number('komal'));//this will give us NaN because 'komal' is not a number and cannot be converted to a number. NaN stands for "Not a Number" and it is a special value that indicates that the result of a mathematical operation is not a valid number.
        console.log(typeof NaN);//this will give us 'number' because NaN is considered a number in JavaScript, even though it is not a valid number. This is a quirk of the JavaScript language and it can be confusing for beginners, but it is important to understand that NaN is a special value that indicates an invalid number, and it should not be treated as a regular number in our code.
        console.log(String(23), 23);//this will give us '23' and 23 because the String() function converts the number 23 to a string, but it does not change the original number 23. The first value is the string '23' and the second value is the number 23, which is still a number and can be used in mathematical operations. This is an example of type conversion, where we can convert a value from one type to another, but it does not change the original value unless we assign it to a new variable.
        let n = '1' + 1;//this will give us '11' because when we add a string and a number, the number is converted to a string and the two values are concatenated together. The result is the string '11', which is not a number and cannot be used in mathematical operations. This is an example of type coercion, where JavaScript automatically converts values from one type to another based on the context of the operation. In this case, it converts the number 1 to a string and concatenates it with the string '1', resulting in '11'.
        n = n - 1;//this will give us 10 because when we subtract a number from a string, JavaScript tries to convert the string to a number before performing the subtraction. In this case, it converts the string '11' to the number 11 and then subtracts 1 from it, resulting in 10. This is another example of type coercion, where JavaScript automatically converts values based on the context of the operation. In this case, it converts the string '11' to a number so that it can perform the subtraction operation correctly.
        console.log(n);
        //=== and === are comparison operators
        //that check for equality between two values. The difference between them is that === checks for strict equality, meaning that it checks both the value and the type of the operands, while == checks for loose equality, meaning that it only checks for value and allows for type coercion. For example, if we compare the number 23 and the string '23' using ==, it will return true because it converts the string to a number before comparing them. However, if we use === to compare the same values, it will return false because they are of different types (number and string). It is generally recommended to use === for comparisons in JavaScript to avoid unexpected results due to type coercion.
        console.log(23 === 23);//this will give us true because both operands are the same value and type (number).
        console.log(23 === '23');//this will give us false because the left operand is a number and the right operand is a string, so they are of different types and not strictly equal.
        console.log(23 == '23');//this will give us true because the == operator allows for type coercion, so it converts the string '23' to the number 23 before comparing them, resulting in true. However, it is generally recommended to use === for comparisons in JavaScript to avoid unexpected results due to type coercion.
        

