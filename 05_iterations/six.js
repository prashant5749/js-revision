const coding = ["ruby", "js", "python", "cpp", "java"]


// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => {
//     return num > 7
// })

// const newNums = []

// myNums.forEach((nums) => {
//     if (nums > 6) {
//         newNums.push(nums)
//     }
// })

// console.log(newNums);

const books = [
    {
        "title":"Eloquent JavaScript, Third Edition",
        "author":"Marijn Haverbeke",
        "published":"2018",
        "pages":472,
    },
    {
        "title":"Practical Modern JavaScript",
        "author":"Nicolás Bevacqua",
        "published":"2017",
        "pages":334,
    },
    {
        "title":"Understanding ECMAScript 6",
        "author":"Nicholas C. Zakas",
        "published":"2016",
        "pages":352,
    },
    {
        "title":"Speaking JavaScript",
        "author":"Axel Rauschmayer",
        "published":"2014",
        "pages":460,
    },
    {
        "title":"Learning JavaScript Design Patterns",
        "author":"Addy Osmani",
        "published":"2012",
        "pages":254,
    },
    {
        "title":"You Don't Know JS Yet",
        "author":"Kyle Simpson",
        "published":"2020",
        "pages":143,
    },
    {
        "title":"Pro Git",
        "author":"Scott Chacon and Ben Straub",
        "published":"2014",
        "pages":458,
    },
    {
        "title":"Rethinking Productivity in Software Engineering",
        "author":"Caitlin Sadowski, Thomas Zimmermann",
        "published":"2019",
        "pages":310,
    }
]

const userBooks = books.filter((kitab) => kitab.pages > 400)

console.log(userBooks);