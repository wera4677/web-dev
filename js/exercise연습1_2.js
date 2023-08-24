// 이것은 자바스크립트에 주석을 추가하는 방법입니다
// 주석은 실행되지 않습니다. 추가 정보를 제공하기 위해 거기에 있을 뿐입니다
// 사용자 또는 다른 개발자에게 제공되는 정보

// 운동 시간!

// 1) 새 변수 3개 생성:
//    - 이름을 저선택한 온라인 과정의 장하는 변수
//    - 해당 과정의 가격을 저장하는 변수
//    - 이 과정을 수강할 때 세 가지 주요 목표를 저장하는 변수

let courseName = "Web Development";
let coursePrice = 17000;
let courseGoals = [
  "Learn Web Development",
  "Become a web developer",
  "Have fun!",
];

// 2) 3가지 변수 값을 출력("경고")
// alert(courseName);
// alert(coursePrice);
// alert(courseGoals);

// 3) 세 변수를 함께 "그룹화"해보고 그 후에도 여전히 값을 출력합니다
let onlineCourse = { name: courseName,
     price: coursePrice,
      goals: courseGoals 
    };

    alert(onlineCourse.name);
    alert(onlineCourse.price);
    alert(onlineCourse.goals);

// 4) 또한 "주요 목표" 변수의 두 번째 요소를 출력합니다
alert(onlineCourse.goals[1]);

// 5) 다음을 수행하는 사용자 지정 명령을 추가합니다:
//    - "주요 목표" 변수를 사용하고 식별자를 통해 요소에 액세스합니다
//    - 구체적인 식별자 값은 동적/유연해야 합니다
//      (즉, 다른 식별자에 대해 명령을 실행할 수 있습니다.)
//    - "주요 목표" 변수도 동적이어야 합니다. 명령어가 작동해야 합니다
//      모든 값 목록과 함께
//    - 사용자 지정 명령은 액세스된 값(즉, 목록 요소)을 제공해야 합니다
function accessListItem(array, arrayIndex) {
    let arrayElemrnt =array[arrayIndex];
    return arrayElemrnt;
}

// 6) (5)부터 사용자 지정 명령을 실행하고 결과를 출력("경고")합니다
let firstGoal = accessListItem(onlineCourse.goals, 0);
alert(firstGoal);

