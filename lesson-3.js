const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// Отримати масив імен всіх користувачів (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

function getUserNames(usersArray) {
  return usersArray.map((user) => user.name);
}

// console.log(getUserNames(users));

// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

function getUsersWithEyeColor(usersArray, eyeColor) {
  return usersArray.filter((user) => user.eyeColor === eyeColor);
}

// console.log(getUsersWithEyeColor(users, "blue"));

// Отримати масив імен користувачів за статтю (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

function getUsersWithGender(users, gender) {
  // const usersGender = users.filter(user =>
  //   {
  //   // console.log(user);
  //   return user.gender === gender
  // })

  // const arrNames = usersGender.map(user => user.name)
  // return arrNames;

  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
}

// console.log(getUsersWithGender(users, 'male'))

// Reduce

function getUsersWithGender(users, gender) {
  return users.reduce((acc, user, i, arr) => {
    if (user.gender === gender) {
      acc.push(user.name);
    }
    return acc;
  }, []);
}
// console.log(getUsersWithGender(users, "male"));

function getS(users) {
  return users.reduce((acc, user, i, arr) => {
    console.log(`Ітерація ${i + 1}`, acc);

    return {
      ...acc,
      [user.name]: user.age,
    };
  }, {});
}
// console.log(getS(users));

function getUsersWithGender(users, gender) {
  return users.reduce((acc, user, i, arr) => {
    if (user.gender === gender) {
      acc.push(user.name);
    }
    return acc;
  }, []);
}
// console.log(getUsersWithGender(users, "male"));

function getS(users) {
  return users.reduce((acc, user, i, arr) => {
    console.log(`Ітерація ${i + 1}`, acc);

    return {
      ...acc,
      [user.name]: user.age,
    };
  }, {});
}
// console.log(getS(users));

// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// Уміння, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit' , 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam']

function getSortedUniqueSkills(users) {
  return users
    .flatMap((user) => user.skills)
    .filter((user, index, array) => array.indexOf(user) === index)
    .toSorted();
}

// console.log(getSortedUniqueSkills(users));

//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

class Client {
  #login;
  #email;

  constructor(parameters) {
    this.#login = parameters.login;
    this.#email = parameters.email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }
}

const newClient = new Client({
  login: "nkopichinska",
  email: "nkopichinska@gmail.com",
});

// console.log(newClient.email);
newClient.email = "test@gmail.com";
// console.log(newClient.email);

//Призначити знижку 20% на фрукти в масиві,
//Присвоїти ID для кожного продукту

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

function discountFruit(fruits, discont) {
  return fruits.map(fruit => {
    // console.log(...fruit);
    
    return {...fruit, price: fruit.price - fruit.price *  discont / 100, id: Date.now()}
  })
}

// console.log(discountFruit(fruits, 20));
