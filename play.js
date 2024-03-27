// const { name } = require("ejs");

// const name1 = "Max"; //상수
// let age = 29;   //변수
// const hasHobbies = true;

// age = 30;

// const summarizeUser = (userName, userAge, userHasHobby)=> {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the has hobbies: " +
//     userHasHobby
//   );
// }
//--------------------------------------------------------------------------------------------------
// //화살표 함수
// // const add = (a,b) => a+b;   //실행될 문장이 하나만있다면 이렇게 사용가능
// // const addOne = a =>a+1;
// // const addRandom= () => 1+2;

// // console.log(add(1,2));       출력 3
// // console.log(addOne(1));      츨력 2
// // console.log(addRandom());    출력 3

// console.log(summarizeUser(name1,age,hasHobbies));


//-----------------------------------------------------------------------------------------------------
const preson = { 
    name:"Max",
    age:29,
    greet:function() { //this.객체를 참조할려면 화살표함수가 아닌 function을 사용해야한다
        console.log('Hi,I am '+this.name); //this 객체를 가져올때 사용
    },
    greet2() { //이렇게도 사용가능
        console.log('Hi,I am '+this.name); //this 객체를 가져올때 사용
    }
};

// console.log(preson)
// preson.greet();

//----------------------------------------------------------------------------------------------------

const hobbies = ['Sports','Cooking', 1, true ]; //유형에 상관없이 배열에 넣을수있다
for(let hobby of hobbies) { //hobbies 에 있는 값 만큼 반복
   // console.log(hobby);
}

// console.log(hobbies.map(hobby =>{ //map() = 배열이나 값을 변환하고 새배열을 반환해서 새로운 배열을 생성한다
//     return 'Hobby: ' + hobby;
// }));
// console.log(hobbies);
hobbies.push('Programming'); //push() = 기존 배열에 추가
console.log(hobbies); //추가된거 확인

//-----------------------------------------------------------------------------------------------------

const copiedArray = hobbies.slice(); //hobbies 배열 복사
console.log(copiedArray); //복사된거 확인

//전개연산자(복사)
const copy = [...hobbies]; //요소나 프로퍼티 전부 끄집어내서 저장 (새배열에 저장)
console.log(copy);

//나머지 연산자
const toArray = (...args) =>{ // ...args 는 인자를 몇개 넣어도 되게끔 하는 나머지 연산자 이다
    return args;
};
console.log(toArray(1,2,3,4))

//-----------------------------------------------------------------------------------------