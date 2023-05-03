//Exercise 1
let checkAge = (age) => {
    age>18 ? true : confirm("Do you have your parents permission to access this page?");
}
if (checkAge(30)===true) {
    console.log(checkAge(30))
}

//Exercise 2
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}


//Exercise 3
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );

//Exercise 4
let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
};
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

//Exercise 5
function min(a, b) {
    return a < b ? a : b;
}