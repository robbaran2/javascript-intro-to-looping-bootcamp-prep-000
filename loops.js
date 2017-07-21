function forLoop(a){
  for (var i = 1; i < 26; i++){
    a.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
    }
  return a;
}

function whileLoop(n){
  while(n>0){
    console.log(n--);
  }
  return 'done';
}

function doWhileLoop(a){
  do {
    a.shift();
  } while(maybeTrue() && a.length>0);
  return a;
}

function maybeTrue() {
  return Math.random() >= 0.5
}
