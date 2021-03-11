function rot13(str) {
  let new_str=''
  let value=0
  for(let i=0 ; i<str.length ; i++){
    if(str[i]==" " ||str[i]=="." || str[i]=="?" ||str[i]=="!"){
      new_str=new_str+str[i];
      continue;
    }
    value=str.charCodeAt(i)
    if(value<65 || value>90)
    new_str=new_str+String.fromCharCode(value);
    else if(value<78)
    new_str=new_str+String.fromCharCode(value+13);
    else
    new_str=new_str+String.fromCharCode(value-13);
  }
  console.log(new_str)
  return new_str;
}

rot13("SERR PBQR PNZC");
