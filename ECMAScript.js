//Exercise 1
let user = { name: "John", years: 30 };

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

//Exercise 2
let earth;
let visited = "name";

//Exercise 3
"Hello"

//Exercise 4
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//Exercise 5
In the given example, the value user is constant so it must always reference the same object. But the properties of the object are changeable.

//Exercise 6
let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
  }
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum);

//Exercise 7
let result = a + b < 4 ? 'Below': 'Over'
alert(result);

//Exercise 8
let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == "") ? 'No login' : '';