const palindrome = (str) => {
    // remove all non-alphanumeric characters and transform all into lowercase characters
    let cleanedStr = str.toLowerCase().replace(/[\W_]/g, "");
    
    // reversed the 'cleanedStr' and checked if they're equal starting from left and right (A Palindrome)
    let reversedStr = cleanedStr.split("").reverse().join("");
    
    if(reversedStr === cleanedStr) return true;
    
    return false;
}

console.log(palindrome("race car"));
