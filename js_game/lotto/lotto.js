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
const winBalls = shuffle.slice(0, 6)
const bonus = shuffle[6]
console.log (`${winBalls} + ${bonus}`)

result.textContent = winBalls
bonusResult.textContent = bonus