function tableOf(digit, num){
    console.log("Multiplication Table of "+digit);
    for (let i = 1; i <= num; i++) {
        console.log(`${digit} x ${i} = ${digit * i}`);  
    }
}

tableOf(3,37);