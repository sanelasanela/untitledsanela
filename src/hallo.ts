let age: number = 35;
for (let i = 1; i <= age; i++) {
    console.log(i);
}

if (age > 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

let score: number = 0;

if (score) {
    console.log("Score is available.");
}

if (score) {
    console.log("Score is evaluated as truthy.");
} else {
    console.log("Score is not evaluated as truthy.");
}

let username: string = '';

if (username) {
    console.log("Username is available.");
}
if (!username) {
    console.log("Username is evaluated as falsy.");
} else {
    console.log("Username is not evaluated as falsy.");
}

let isAdmin: boolean = false;

if (isAdmin) {
    console.log("isAdmin is evaluated as truthy.");
} else {
    console.log("isAdmin is not evaluated as truthy.");
}

if (!isAdmin) {
    console.log("isAdmin is false.");
}