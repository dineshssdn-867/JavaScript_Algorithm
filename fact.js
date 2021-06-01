function factorial(number) {
    let result = 1;
  
    for (let i = 1; i <= number; i += 1) {
      result *= i;
    }
    
    console.log(result);
    return result;
}
factorial(10);