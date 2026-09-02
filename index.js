// console.log("Hey... I am Using JS");
// let and var keyword
// var a=23;
// if(a>10){
//     var a=45;
//     console.log("Value of a inside block of if ="+a)
// }
// console.log("value of a outside block of if=" + a)

//  function sum(a,b){
//      return a+b;
// }
// // const a=sum();
// // console.log("a="+a);

// function sumofsum(){
//     console.log(sum(40,30)+sum(100,400));
// }
// sumofsum();

// function info(Roll,Name,College,Branch){
//     return "Roll No: "+Roll+" Name: "+Name+" College: "+College+" Branch: "+Branch;
// }
//  function myinfo(){
//   const a =  info("49","Abhishek","ABES","CSE");
//   console.log(a);
// }
// myinfo();

// function myinfo(){
//     console.log("My Information")
//     const info1=myinfo()
//     console.log("My friends Information")
//     const info2=myinfo()
// }

// function generatenumber(){
//     return Math.floor(Math.random()*1000);
// }
// const randomNumber=generatenumber();
// function findEvennumber(){
//     if(randomNumber % 2 === 0){
//         console.log("The generated number is even.");
//     } else {
//         console.log("The generated number is odd.");
//     }
// }
// console.log("Random Number = " + randomNumber);
// findEvennumber();

// const sum = (a,b) => {
//     return a+b;
// }
// const result = sum(10,20);
// console.log("Result = " + result);


//IIFE (Immediately Invoked Function Expression)
//(() => {console.log("I am using IIFE")})();

// Callback Function
// function sum(a,b){
//     return a+b;
// }
// function sumWtihMSG(clbk,msg){
//     const result=clbk(20,40);
//     return msg+result;
// }
// sumWtihMSG(sum,"The sum of two numbers is = ");

// function login(msg,error){
//     if(error){
//         console.log("Error");
//     }else{
//         console.log(msg);
//     }
// }

// function loginHandler(username,password,clbk){
//     const myUsername="Abhishek";
//     const myPassword="12345";
//     if(username===myUsername && password===myPassword){
//         clbk("Success",null);
//     }else{
//         clbk(null,"Error");

//     }
// }
// loginHandler("Abhishek","12345",login);

// callback hell

// setTimeout(() => { console.log("1st Message") }, 5000);


// setTimeout(() => {
//     console.log("One");
//     setTimeout(() => {
//         console.log("Two");
//         setTimeout(() => {
//             console.log("Three");
//             setTimeout(() => {
//                 console.log("Four");
//                 setTimeout(() => {
//                     console.log("Five");
//                     setTimeout(() => {
//                         console.log("Six");
//                         setTimeout(() => {
//                             console.log("Seven");
//                             setTimeout(() => {
//                                 console.log("Eight");
//                             }, 1000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// console.log("One ")
// setTimeout(() => console.log("Two "), 1000)
// console.log("Three ")

// function sumofsqrt(a,b){
//     return Math.sqrt(a)+Math.sqrt(b);
// }
// console.log("Sum of square root of two numbers = " + sumofsqrt(25,36));

// function sumofsqrtWithName(name,clbk){
//     const result = clbk(25,36);
//     return name + " The sum of square root of two numbers = " + result;
// }
// console.log(sumofsqrtWithName("Abhishek", sumofsqrt));

// Promise in js
// const myPromise = new Promise((resolve, reject) => {
//     let username = "Abhishek";
//     let password = "12345";
//     if(username === "Abhishek" && password === "12345"){
//         resolve("Login Successful");
//     } else {
//         reject("Login Failed")
//     }
// })
// myPromise.then((msg) => {
//     console.log(msg)
// }).catch(msg => {
//     console.log(msg)
// })
// .finally(() => 
//     console.log("All resource has been closed"))
//  async function loginHandler(){
//     try{
//             const loginStatus=await myPromise;
//             console.log(loginStatus)
//     }
//     catch(e){
//         console.log(e)
//     }
//     finally{
//         console.log("Closing all the open resources...")
//     }
//   }
//   loginHandler();


const container=document.getElementById('container');
console.log(container)
const button=document.getElementById('btn');
console.log(button)
const h2=document.getElementById('data');
const loader=document.getElementById('loader');


async function fetchData(){
    try{
        loader.innerHTML='Fetching data...';
    const serverData=await fetch('https://fakestoreapi.com/products')
                       const jsonData=await serverData.json();
    // console.log(jsonData[1].title)

    let table='<table>';


    h2.innerHTML=`${jsonData[1].title}`;

    let table ='<table>
    ${
        jsonData.map((ele) => (
            <td></td>
        )

            '

    }catch(e){
        console.log("Error is:"+e)
        loader.innerHTML='Error is'+e;
    }
    finally{
        loader.innerHTML='';

    }

}
button.addEventListener('click',fetchData);

