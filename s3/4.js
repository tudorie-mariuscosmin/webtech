const string = 'the quick brown fox jumpes over the lazy dog'

const getCounts = (input) => {
    let result = {}
    let words = input.split(' ')
    for (const word of words) {
        if (word in result) {
            result[word]++
        } else
            result[word] = 1
    }
    for (word in result) {
        result[word] /= words.length
    }
    return result
}

console.log(getCounts(string))