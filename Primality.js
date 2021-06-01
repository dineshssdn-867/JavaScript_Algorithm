function prim_test(number) {
    if (number <= 1) return false;
    else if (number <= 3) return true;

    const dividerLimit = parseInt(Math.sqrt(number));
    if (number % 2 === 0 || dividerLimit*dividerLimit===number)return false;

    for (let divider = 3; divider <= dividerLimit; divider += 2) {
        if (number % divider === 0) {
          return false;
        }
      }
    return true;
}

console.log(prim_test(49));