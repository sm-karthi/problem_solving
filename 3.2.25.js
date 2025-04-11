function nOfSmallNumbers(n) {
    let sum = BigInt(1);  // Start with BigInt
    for (let i = BigInt(n); i >= 1; i--) {
        sum *= i;  // Multiply using BigInt
    }
    console.log(sum.toString());  // Convert BigInt to string for full output
}

nOfSmallNumbers(30);
