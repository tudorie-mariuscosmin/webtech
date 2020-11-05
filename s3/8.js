const sampleDictionary = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const sampleString = `
best
read
on
windy
nights
`

const checkAcrostick = (input, dictionary) => {
    const words = input.split('\n')
    let specialWord = ''
    console.log(words)
    for (const word of words) {
        if (word.trim()) {
            specialWord += word.trim()[0]
        }

    }
    console.log(specialWord)
}

checkAcrostick(sampleString, sampleDictionary)

// const checkAcrostic = (input, dictionary) => {
//     // let lines = input.split('\n')
//     // let target = ''
//     // for (const line of lines) {
//     //   if (line.trim()) {
//     //     target += line.trim()[0]
//     //   }
//     // }
//     // return dictionary.indexOf(target) !== -1
//     let target = input.split('\n').map(e => e.trim()).filter(e => e).reduce((a, e) => a + e