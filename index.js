number = 10;

function add() {
    return (number += 5);
  }

  function subtract(){
      return (number -= 5)
  }

  function add(a,b){
    return (a+b);
  }
  function divide() {
    return (number /= 3);
  }
  function multiply() {
    return (number /= 3);
  }

  function subtract(a,b){
    return (a-b);
  }

  function divide(a,b){
    return (a/b);
  }

  function multiply(a,b){
    return (a*b);
  }

  function increment(n){
      return (n+=1);
  }

  function decrement(n){
      return (n-=1);
  }

  function makeInt(n){
    parseInt(n);
    return n;
  }
  function preserveDecimal(n) {
    parseInt(n);
    return parseFloat(n);
    
  }