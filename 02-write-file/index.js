const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

let ws; 

(function () {
  ws = fs.createWriteStream(path.join(__dirname, 'text.txt'));
  console.log('Hello, write text, please!'); 
}());

rl.on('line', (input) => {
  if(input.trim() === 'exit') {
    closeInputText();
  }
  ws.write(input + '\n');
});

rl.on('SIGINT', () => {
  closeInputText();
});

function closeInputText() {
  console.log('Thank you! Have a nice day!');
  process.exit();
}