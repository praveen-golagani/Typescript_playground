function countVowelsAndConsonants(name: string): {
    vowels: number;
    consonants: number;
}

{
    const vowelsSet = new Set(["a", "e", "i", "o", "u"]);
    let vowels = 0;
    let consonants = 0;

    for (const char of name.toLowerCase()) {
        // check only alphabets
        if (char >= "a" && char <= "z") {
            if (vowelsSet.has(char)) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    return { vowels, consonants };
}

// test
console.log(countVowelsAndConsonants("Praveen"));
// { vowels: 3, consonants: 4 }
