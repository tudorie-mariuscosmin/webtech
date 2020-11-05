const sampleString = 'the quick,brown fox jumps over the lazy dog'

const getLetterFrequencies = (input) => {
    let result = {}

    for (const word of input) {
        if (word in result) {
            result[word]++
        } else {
            result[word] = 1
        }
    }
    for (const word in result) {
        result[word] /= input.length
    }
    return result
}

console.log(getLetterFrequencies(sampleString))