// const sampleString = 'I found {0} at the {1}'

// const sampleFormat = ['a cat', 'petstore']

// const formatString = (input, format) => {
//     let string = input
//     let index = 0;
//     while (string.match('[{ \d }]')) {
//         string.replace('[{ \d }]', format[index])
//         index++;
//     }
//     return string

// }

const sampleString = 'i found {0} at the {1}'

const sampleFormat = ['a cat', 'petstore']

const formatString = (input, format) => {
    let modified = input
    for (let i = 0; i < format.length; i++) {
        modified = modified.replace('{' + i + '}', format[i])
    }
    return modified
}

console.log(formatString(sampleString, sampleFormat))
// i found a cat at the petstore


console.log(formatString(sampleString, sampleFormat))