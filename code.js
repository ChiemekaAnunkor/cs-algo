function sumZero(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {

            if (arr[i] + arr[j] == 0) {
                return true
            }

        }

    }
    return false
}
console.log(sumZero([1, 2, 3, -2]))

// time 0(n^2)
// space 0(1)


function hasUniqueChars(str) {

    let unique = new Set(str)
    unique = [...unique].join("")

    if (str.length == unique.length) {
        return true
    }
    return false


}
console.log(hasUniqueChars("monday"))
// time 0(n)
// space 0(1)




function isPangram(str) {
    str = str.toLowerCase()
    let count = 0
    let set = new Set(str)
    str = [...set].join(" ")
    let alpabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    alpabet = alpabet.toLowerCase()

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < alpabet.length; j++) {
            if (alpabet[i] == str[i]) {
                count++

            }

        }

    }
    if (count == 26) {
        return true
    }
    return false

}
console.log(isPangram("The quitsdsds jumps over the lazy dog"))

// time 0(n^2)
// space 0(n)



function findLongestWord(arr) {
    let result = []
    arr.map((a) => {
        let long = a.length
        result.push(long)
    })
    result.sort((a, b) => a - b)
    return result
}
console.log(findLongestWord(["shdshdhshd", "hi", "hello"]))

//0(log n)
//0(1)