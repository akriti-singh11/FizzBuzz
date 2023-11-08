const displayMessage =function(message){
  document.querySelector('.message').textContent = message;
};

const check_fizzbuzz = function(number){
  if(!number)
  {
    displayMessage('Khali hai!');
  }


 else if(number%3==0)
  {
   if(number%5==0)
     {
      displayMessage('FizzBuzz');
     }

   else{
       displayMessage('Fizz');
      }  
  }

  else if(number%5==0)
  {
   displayMessage('Buzz');
  }

  
  else{
      displayMessage(number);
  }
};

document.querySelector('.check').addEventListener('click',function(){
    const number = Number(document.querySelector('.guess').value);
      check_fizzbuzz(number);
  }

  
);