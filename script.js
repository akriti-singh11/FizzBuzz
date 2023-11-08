document.querySelector('.check').addEventListener('click',function(){
    const number = Number(document.querySelector('.guess').value);
    for(let i = 1 ; i<number ;i++)
    {
       if(i%3==0)
       {
        if(i%5==0)
          {
            console.log("FizzBuzz");
          }

        else{
            console.log("Fizz");
        }  
       }

       else{
        console.log("Buzz");
       }
    }
});