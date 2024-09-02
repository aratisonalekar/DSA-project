console.log(process)

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Welcome To Banking App')
console.log('\n 1. Create new account')
console.log('\n 2. Deposit Money')
console.log('\n 3. Withdraw Money')
console.log('\n 4. Check Balance')
console.log('\n 5. Transfer Money')
console.log('\n 6. Exit')

rl.question(' \n Enter your Choice : ', ch =>{
    console.log(`you Enterd ${ch}`)
    rl.close();
})

rl.on('close', () => {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});