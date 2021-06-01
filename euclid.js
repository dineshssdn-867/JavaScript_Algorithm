function euclideanAlgorithm(originalA, originalB) {
    const a = Math.abs(originalA);
    const b = Math.abs(originalB);
    if(a===0 && b===0)return 0;
    if(a===0 && b!=0)return b;
    if(a!=0 && b==0)return a;
    if(a>b)return euclideanAlgorithm(a%b, b);
    return euclideanAlgorithm(b%a, a);
}

  console.log(euclideanAlgorithm(25,10));