//without recursion
const countDown = start => {
  do {
    console.log(start);
    start-=1
  }
  while(start > -20);
}

countDown(5)


//with recursion
const _countDown = start => {
  console.log(start);
  if(start > 0) _countDown(start-1);
}

_countDown(10)