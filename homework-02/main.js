// 1



let enterNumberMessage;

let input;

const numbers = [];

let total = 0; 

do {

  enterNumberMessage = prompt('Enter a number');
  
  input = Number(enterNumberMessage);
  
  numbers.push(input);

} while (enterNumberMessage !== null);

numbers.pop();

for (let i = 0; i < numbers.length; i += 1) {
  total = total + numbers[i]; 
}

console.log(total);




// 2


const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let attemptsLeft = 3;

let request;

const enterPassMess = 'Введите пароль';
const successPassMess = 'Добро пожаловать!';
const alertPassMess = 'У вас закончились попытки, аккаунт заблокирован!';


while (attemptsLeft !== 0) {
    request = prompt(enterPassMess);
    
    const isInclude = passwords.includes(request);
    
    if (request === null) {
        break;
    }

    if (isInclude) {
        alert(successPassMess);
        break;
    }

    attemptsLeft -= 1;
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
    
    if (attemptsLeft === 0){
        alert(alertPassMess);
    }
}

