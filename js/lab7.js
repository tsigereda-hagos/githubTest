
// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   loginOk() {
//     alert('${this.name} logged in');
//   },

//   loginFail() {
//     alert('${this.name} failed to log in');
//   },
// }
// askPassword(user.loginOk,user.loginFail); //${this.name} logged in


	//using wrapper
// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password === "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// // Wrapper functions using bind
// askPassword(
//   function() { user.loginOk.bind(user)(); },
//   function() { user.loginFail.bind(user)(); }
// );  //John logged in


	//using bind()

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password === "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// // Use bind to create functions with preset this values
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));  //John logged in


	//using call()

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password === "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// // Use call to invoke functions with specified this values
// askPassword(function() { user.loginOk.call(user); }, function() { user.loginFail.call(user); }); //John logged in


	//using apply()

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password === "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// // Wrappers for the methods using apply
// askPassword(
//   function() { user.loginOk.apply(user); },
//   function() { user.loginFail.apply(user); }
// );   //John logged in



//Question 2: Fix the code below using bind
// let group = {
// title: "Our Group",
// students: ["John", "Pete", "Alice"],
// showList: function() {
// this.students.forEach(function(student) {
// console.log(this.title + ": " + student
// );
// });
// }
// };
// group.showList();  //undefined: John
                   // undefined: Pete
                  //undefined: Alice


  //fix using bind()
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function() {
    this.students.forEach(function(student) {
      console.log(this.title + ": " + student);
    }.bind(this)); // Use bind to set the correct 'this' value
  }
};
group.showList();  //Our Group: John
                   // Our Group: Pete
                  // Our Group: Alice
               




