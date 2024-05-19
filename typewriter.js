const sentence = "hello there from lighthouse labs";

const typewriter = function(string) {
  string.split("");
  for (let i = 0; i < string.length; i++)  {
    setTimeout(() => {
      process.stdout.write(string[i]);
    }, 400 * i);
  }
  process.stdout.write('\n');
};
typewriter(sentence);