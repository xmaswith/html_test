const result = document.querySelector('#result')
const bonusResult = document.querySelector('.bonus')

const candidate = Array(45).fill().map((v, i) => i + 1);        //fill() 을 안쓰면, 빈배열이 채워지지 않는다.
                                                                //  '.'을 계속 쓰는 건, '의' 개념으로 보기
const shuffle = [];
while (candidate.length > 0) {
    const value = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];     //뒤에 [0]붙이는 이유 == candidate.splice 값은 배열에 저장되기 때문에, 배열에서 수를 꺼내려면 1번째 수를 꺼내도록 배열값[0] 써주기
                                                                                            //[1,2,3].splice(1,2) 배열값1부터 2개의 숫자 추출 (배열값1 은 2번째 배열값 인것. 1번째는 배열값0)
    shuffle.push(value)
}

console.log(shuffle)
const winBalls = shuffle.slice(0, 6).sort((p, c) => p - c)
const bonus = shuffle[6]
console.log (`${winBalls} + ${bonus}`)

/*result.textContent = winBalls
bonusResult.textContent = bonus*/


//함수 만들어서 반복때 쓰기
function colorize(number, chance) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    if (number < 10) { ball.style.backgroundColor = 'red' }
    else if (number < 20) { ball.style.backgroundColor = 'orange' }
    else if (number < 30) { ball.style.backgroundColor = 'yellow' }
    else if (number < 40) { ball.style.backgroundColor = 'green' }
    else { ball.style.backgroundColor = 'skyblue' }
    ball.textContent = number;                                     
    chance.appendChild(ball);    
}




for (let i = 0; i < 6; i++) {                                           //공 개수만큼 반복
    /*const ball = document.createElement('div');                         //div 태그 만들기        +       css로 공 모양 만들어 놓음
    ball.className = 'ball';                                            //div 태그 클래스명 설정    
    if (winBalls[i] < 10) { ball.style.backgroundColor = 'red' }
    else if (winBalls[i] < 20) { ball.style.backgroundColor = 'orange' }
    else if (winBalls[i] < 30) { ball.style.backgroundColor = 'yellow' }
    else if (winBalls[i] < 40) { ball.style.backgroundColor = 'green' }
    else { ball.style.backgroundColor = 'skyblue' }

    ball.textContent = winBalls[i];                                     //div 안에 로또 번호 추가
    result.appendChild(ball);                                           //html 에서 설정한 result div 안에 공 넣기*/

    setTimeout(() => {
        colorize(winBalls[i], result);  //로또 당첨 번호에 함수 불러오기
    }, 1000 * (i + 1));    
}

/*const ball = document.createElement('div');
ball.className = 'ball';
ball.textContent = bonus ;
bonusResult.appendChild(ball);*/

setTimeout(() => {
    colorize(bonus, bonusResult);       //보너스 공에 함수 불러오기
}, 7000);


winBalls.forEach((number, index) => {       //forEach 반복문. 배열 map 하고 구조 같다. 
                                            //return 있으면 map, 없으면 forEach 쓰자. 간단하게 생각해서
})