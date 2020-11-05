const fib = (index) => {
    switch (index) {
        case 0:
        case 1:
            return 1
        default:
            return fib(index - 1) + fib(index - 2)
    }
}


if (process.argv.length < 3) {
    console.log("usage: node2.js <fibonaciindex>")
} else {
    let index = parseInt(process.argv[2])
    if (isNaN(index) || index < 0) {
        console.log('index must be a posotove integer')
    } else {
        console.log(fib(index))
    }
}