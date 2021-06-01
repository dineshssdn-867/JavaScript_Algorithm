function fibo(a){
    const A = Math.abs(a);
    let arr = [];
    arr[0]=0;
    arr[1]=1;
    for(let i=1 ; i<A ; ++i){
        arr.push(arr[i]+arr[i-1]);
    }
    console.log(arr[A]);
}

fibo(10);