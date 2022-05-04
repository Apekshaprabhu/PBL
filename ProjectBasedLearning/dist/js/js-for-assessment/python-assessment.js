const Questions = [{
    id: 0,
    q: "Which keyword is used to define a function in Python language ?",
    a: [{ text: "function", isCorrect: false },
        { text: "define", isCorrect: false },
        { text: "def", isCorrect: true },
        { text: "fun", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the output of the following program : " + '<br> y = 8 <br> z = lambda x : x * y <br> print (z(6))',
    a: [{ text: "54", isCorrect: false},
        { text: "40", isCorrect: false },
        { text: "36", isCorrect: false },
        { text: "48", isCorrect: true }
    ]

},
{
    id: 2,
    q: "Find the output of the following program : " + '<br> a = {i: i * i for i in range(6)} <br> print (a)',
    a: [{ text: "{0: 0, 1: 1, 4: 4, 9: 9, 16: 16, 25: 25}", isCorrect: false },
        { text: "{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6:36}", isCorrect: false },
        { text: "{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}", isCorrect: true },
        { text: "Dictionary comprehension doesn’t exist", isCorrect: false }
    ]

},
{
    id: 3,
    q: "What are the methods which begin and end with two underscore characters called ?",
    a: [{ text: "Special methods", isCorrect: true},
        { text: "In - built methods", isCorrect: false },
        { text: "User - defined methods", isCorrect: false },
        { text: "Additional methods", isCorrect: false }
    ]

},
{
    id: 4,
    q: "Which of these is the definition for packages in Python ?",
    a: [{ text: "A set of main modules", isCorrect: false},
        { text: "A folder of python modules", isCorrect: true },
        { text: "A number of files containing Python definitions and statements", isCorrect: false },
        { text: "A set of programs making use of Python modules", isCorrect: false }
    ]

},
{
    id: 5,
    q: "What will be the output of the following code snippet ?" + '<br> set1 = {1, 3, 5} <br> set2 = {2, 4, 6} <br> print(len(set1 + set2))',
    a: [{ text: "3", isCorrect: false},
        { text: "6", isCorrect: false },
        { text: "0", isCorrect: false },
        { text: "Error", isCorrect: true }
    ]

},
{
    id: 6,
    q: "What will be the output of the following code snippet ?" + 
    '<br> a = "4, 5"' +
    '<br> nums = a.split(",")' +
    '<br> x, y = nums' +
    '<br> int_prod = int(x) * int(y)' +
    '<br> print(int_prod)',
    a: [{ text: "20", isCorrect: true},
        { text: "45", isCorrect: false },
        { text: "4,5", isCorrect: false },
        { text: "54", isCorrect: false}
    ]

},
{
    id: 7,
    q: "What will be the output of the following code snippet ?" + 
    '<br>def thrive(n):' +
    '<br>&nbsp;&nbsp;if n % 15 == 0:' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;print("thrive", end = “ ”)' +
    '<br>&nbsp;&nbsp;elif n % 3 != 0 and n % 5 != 0:' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;print("neither", end = “ ”)' +
    '<br>&nbsp;&nbsp;elif n % 3 == 0:' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;print("three", end = “ ”)' +
    '<br>&nbsp;&nbsp;elif n % 5 == 0:' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;print("five", end = “ ”)' +
    '<br>thrive(35)' +
    '<br>thrive(56)' +
    '<br>thrive(15)' +
    '<br>thrive(39)',
    a: [{ text: "five neither three thrive", isCorrect: false},
        { text: "five neither thrive three", isCorrect: true },
        { text: "three three three three", isCorrect: false },
        { text: "five neither five neither", isCorrect: false }
    ]

},
{
    id: 8,
    q: "What is the output of the following code snippet : " + '<br> a = [1, 2] <br> print(a * 3)',
    a: [{ text: "Error", isCorrect: false},
        { text: "[1,2]", isCorrect: false },
        { text: "[3,6]", isCorrect: false },
        { text: "[1,2,1,2,1,2]", isCorrect: true }
    ]

},
{
    id: 9,
    q: "Is Python case sensitive when dealing with identifiers ?",
    a: [{ text: "yes", isCorrect: false},
        { text: "no", isCorrect: true },
        { text: "machine dependent", isCorrect: false },
        { text: "none of the mentioned", isCorrect: false}
    ]

}

]
var falseCheck = 0
// Set start
var start = true;

//correct ans count
var count = 0
// Iterate
function iterate(id) {

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerHTML = "Question " + (Number(id) + 1) +" : "+ Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

op1.style.backgroundColor = "transparent";
op2.style.backgroundColor = "transparent";
op3.style.backgroundColor = "transparent";
op4.style.backgroundColor = "transparent";

const next = document.getElementsByClassName('next')[0];


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";


// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "orange";
    op2.style.backgroundColor = "transparent";
    op3.style.backgroundColor = "transparent";
    op4.style.backgroundColor = "transparent";
    next.style.backgroundColor = "orange"
    selected = op1.value;
    if(selected == "false")
        falseCheck = falseCheck + 1
},true)

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "transparent";
    op2.style.backgroundColor = "orange";
    op3.style.backgroundColor = "transparent";
    op4.style.backgroundColor = "transparent";
    next.style.backgroundColor = "orange"
    selected = op2.value;
    if(selected == "false")
        falseCheck = falseCheck + 1
},true)

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "transparent";
    op2.style.backgroundColor = "transparent";
    op3.style.backgroundColor = "orange";
    op4.style.backgroundColor = "transparent";
    next.style.backgroundColor = "orange"
    selected = op3.value;
    if(selected == "false")
        falseCheck = falseCheck + 1
},true)

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "transparent";
    op2.style.backgroundColor = "transparent";
    op3.style.backgroundColor = "transparent";
    op4.style.backgroundColor = "orange";
    next.style.backgroundColor = "orange"
    selected = op4.value;
    if(selected == "false")
        falseCheck = falseCheck + 1

    
},true)
console.log(falseCheck)
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 9) {
    id++;
    iterate(id);
    next.style.backgroundColor = "transparent"
}
else {
    const resultBtn = document.getElementById("result")
    resultBtn.style.backgroundColor = "orange"
    panelClass = document.getElementsByClassName('panel')[0] 
    resultBtn.addEventListener("click", () => {
        if(falseCheck > 0)
        {
            panelClass.style.boxShadow = "rgba(246, 38, 5, 0.241) 0px 10px 50px"
            alert("You have failed")
        }
        else
        {
            panelClass.style.boxShadow = "rgba(99, 244, 9, 0.241) 0px 10px 50px"
            alert("You have passed")
        }
    })
}

})
