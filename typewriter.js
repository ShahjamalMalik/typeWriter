const sentence = "hello there from lighthouse labs";


const typewriter = function(string) {
  let time = 0
  string += "\n";

  for(let letter of string) {
    
    setTimeout(() => {
      process.stdout.write(letter)
    }, time)
    time += 50
  }
}

typewriter(sentence)