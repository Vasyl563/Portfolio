// const person = {
//   name: 'Vasul',
//   age: 20,
//   greet: function() {
//     console.log('Greet!');
//   }
// }

// Prototype


// const person = new Object({
//   name: 'Vasul',
//   age: 20,
//   greet: function () {
//     console.log('Greet!');
//   }
//   })

//   Object.prototype.sayHello = function() {
//     console.log('Hello');
//   }
//   const lena =  Object.create(person) 
//   lena.name = 'Elena'


// this

function hello() {
  console.log('Hello', this);
}

const person = {
  name: 'Vasul',
  age: 20,
  sayHello: hello,
  sayHelloWindow: hello.bind(window),
  LogInfo: function(job, phone) {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Phone is ${phone}`)
    console.groupEnd()
  }
}

const lena = {
  age: 34,
  name: 'Elena'
}

const fnLenaInfoLog = person.LogInfo.bind(lena)
fnLenaInfoLog('Frontend', '8-999-123-12-23')

