const coding = ["ruby", "js", "python", "cpp", "java"]

coding.forEach( function (lang) {
    // console.log(lang);
} )

coding.forEach((num)=> {
    // console.log(num);
})

function valPrint(item){
    console.log(item);
}

const arr = [1,2,3,4,5,6,]

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "python",
        languageFileName: "py"
    },

    {
        languageName: "ruby",
        languageFileName: "ry"
    }
]

myCoding.forEach((code) => {
    console.log(code.languageName);
})
