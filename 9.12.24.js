function isOneAPermOfAnother(str1, str2) {
    // If lengths are not the same, they cannot be permutations
    if (str1.length !== str2.length) {
        console.log("false");
        return;
    }
    
    // Sort both strings and compare
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    
    if (sortedStr1 === sortedStr2) {
        console.log("true");
    } else {
        console.log("false");
    }
}

// Test cases
isOneAPermOfAnother("abc", "cab"); // true
isOneAPermOfAnother("abc", "cba"); // true
isOneAPermOfAnother("abc", "abcd"); // false
isOneAPermOfAnother("abc", "def"); // false



function isOneAPermOfAnother(str1, str2) {
    if (str1.length !== str2.length) {
        console.log("false");
        return;
    }

    let charCount1 = {};
    let charCount2 = {};

    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            console.log("false");
            return;
        }
    }

    console.log("true");
}

isOneAPermOfAnother("abc", "cab"); // true
isOneAPermOfAnother("abc", "cba"); // true
isOneAPermOfAnother("abc", "abcd"); // false
isOneAPermOfAnother("abc", "def"); // false


 