let spinnerSymbols = "| / - \\ | / - \\"
let time = 100;

for (let position of spinnerSymbols) {
  setTimeout(() => {
    process.stdout.write(`\r${position}    `)
  }, time+= 100)
};