const getUserChoice = () => prompt('가위, 바위, 보 중에 하나를 입력하세요.');
const getRandomNumber = () => Math.floor(Math.random()*3)
const getRandomChoice = () => {
  let randomNumber = getRandomNumber();
  
  switch (randomNumber) {
    case 0:
      return "가위";
    case 1:
      return "바위";
    case 2:
      return "보";
  }
}

const run = () => {
  let myChoice = getUserChoice();
  let computerChoice = getRandomChoice();
  
  // TODO: 1. myChoice가 가위나 바위나 보가 아니라면 console에 잘못된 입력이라고 출력하는 코드를 작성하세요.
if(myChoice != "가위" && myChoice != "바위" && myChoice != "보"){
 console.log('잘못된 입력입니다.');
}
  
  
// TODO: 2. 내가 낸 것(myChoice)과 컴퓨터가 낸 것(computerChoice)을 비교해서 승패를 출력하는 코드를 작성하세요   
  if(myChoice===computerChoice)// 조건 1
    {
        console.log(`컴퓨터의 선택 : ${computerChoice}`);
        console.log("무승부 입니다."); 
    }
    else if(myChoice=="가위" && computerChoice == "바위"){
        console.log(computerChoice);
        console.log("컴퓨터가 승리!")
    }
    else if(myChoice=="가위" && computerChoice == "보"){
        console.log(`컴퓨터의 선택 : ${computerChoice}`);
        console.log("지원쓰가 승리!");
    }
    else if(myChoice=="바위" && computerChoice == "보"){
        console.log(`컴퓨터의 선택 : ${computerChoice}`);
        console.log("컴퓨터가 승리!");
    }  
    else if(myChoice=="바위" && computerChoice == "가위"){
        console.log(`컴퓨터의 선택 : ${computerChoice}`);
        console.log("지원쓰가 승리!");
    }
    else if(myChoice=="보" && computerChoice == "가위"){
        console.log(`컴퓨터의 선택 : ${computerChoice}`);
        console.log("컴퓨터가 승리!");
    }
    else if(myChoice=="보" && computerChoice == "바위"){
        console.log(`컴퓨터의 선택 : ${computerChoice}`);
        console.log("지원쓰가 승리!");
    }
}

run();
