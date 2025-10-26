// const tindeUser = new Object();

const tindeUser = {};

tindeUser.id = "123abc";
tindeUser.name = "Sammy";
tindeUser.isLoggedIn = false;

// console.log(tindeUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Choudhary"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 6: "f"};

// const obj3 = {...obj1, ...obj2}  /*Spread method*/
// const obj3 = {obj1, obj2} /*nesting object*/
// const obj3 = Object.assign({}, obj1, obj2, obj4) /*assigned method give the empty parenthesis for target, and give objects as source*/
// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    }
]


// console.log(tindeUser);

// console.log(Object.keys(tindeUser));  /*results in array like [ 'id', 'name', 'isLoggedIn' ]*/
// console.log(Object.values(tindeUser));  /*results in array like [ '123abc', 'Sammy', false ]*/
// console.log(Object.entries(tindeUser))  /*results in nesting array [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]*/


// console.log(tindeUser.hasOwnProperty("isLoggedIn"));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course;

// console.log(courseInstructor);
console.log(instructor);


// api structure

// {
//     "name": "Hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {},
]