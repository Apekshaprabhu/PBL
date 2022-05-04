const Questions = [{
    id: 0,
    q: "How are String represented in memory in C ?",
    a: [{ text: "The object of some class.", isCorrect: false },
        { text: "LinkedList of characters.", isCorrect: false },
        { text: "An array of characters", isCorrect: true },
        { text: "Same as other primitive data types.", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the disadvantage of arrays in C ?" ,
    a: [{ text: "Elements of an array can be accessed in constant time.", isCorrect: false},
        { text: "Elements are stored in contiguous memory blocks.", isCorrect: false },
        { text: "Multiple other data structures can be implemented using arrays.", isCorrect: false },
        { text: "The amount of memory to be allocated should be known beforehand.", isCorrect: true }
    ]

},
{
    id: 2,
    q: "If p is an integer pointer with a value 1000, then what will the value of p + 5 be ?" ,
    a: [{ text: "1005", isCorrect: false },
        { text: "1010", isCorrect: false },
        { text: "1020", isCorrect: true },
        { text: "1004", isCorrect: false }
    ]

},
{
    id: 3,
    q: "Which of the following are not standard header files in C ?",
    a: [{ text: "stdio.h", isCorrect: false},
        { text: "stdlib.h", isCorrect: false },
        { text: "conio.h", isCorrect: false },
        { text: "None of the above", isCorrect: true }
    ]

},
{
    id: 4,
    q: "How to find the length of an array in C ?",
    a: [{ text: "sizeof(a)", isCorrect: false},
        { text: "sizeof(a) / sizeof(a[0])", isCorrect: true },
        { text: "sizeof(a[0])", isCorrect: false },
        { text: "sizeof(a) * sizeof(a[0])", isCorrect: false }
    ]

},
{
    id: 5,
    q: "Which data structure is used to handle recursion in C ?",
    a: [{ text: "Trees", isCorrect: false},
        { text: "Deque", isCorrect: false },
        { text: "Queue", isCorrect: false },
        { text: "Stack", isCorrect: true }
    ]

},
{
    id: 6,
    q: "What will be the output of the following code snippet ?" + 
    '<br> #include <stdio.h>' +
    '<br> struct School {' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;int age, rollNo;' +
    '<br>};' +
    '<br>void solve() { ' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;struct School sc;' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;sc.age = 19;' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;sc.rollNo = 82;' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;printf("%d", (int)sizeof(sc));' +
    '<br>}' +
    '<br>int main() {' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;solve();' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;return 0;' +
    '<br>}' ,
    a: [{ text: "1", isCorrect: false},
        { text: "4", isCorrect: false },
        { text: "8", isCorrect: true },
        { text: "16", isCorrect: false}
    ]

},
{
    id: 7,
    q: "What will be the output of the following code snippet ?" + 
    '<br>#include <stdio.h>' +
    '<br>void solve(int x) {' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;if(x == 0) {' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("%d ", x);' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return;' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;}' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;printf("%d ", x);' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;solve(x - 1);' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;printf("%d ", x);' +
    '<br>}' +
    '<br>int main() {' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;solve(3);' +
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;return 0;'+
    '<br>}',
    a: [{ text: "3 2 1 0", isCorrect: false},
        { text: "3 2 1 0 1 2 3", isCorrect: true },
        { text: "0 1 2 3", isCorrect: false },
        { text: "None of the above", isCorrect: false }
    ]

},
{
    id: 8,
    q: "What is the output of the following code snippet : " + 
    '<br>#include <stdio.h>'+
    '<br>void solve() {'+
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;bool ok = false;'+
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;printf(ok ? "YES" : "NO");'+
    '<br>}'+
    '<br>int main() {'+
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;solve()'+
    '<br>&nbsp;&nbsp;&nbsp;&nbsp;return 0;'+
    '<br>}',
    a: [{ text: "YES", isCorrect: false},
        { text: "NO", isCorrect: false },
        { text: "Compilation Error", isCorrect: true },
        { text: "None of the above", isCorrect: false}
    ]

},
{
    id: 9,
    q: "What does the following declaration indicate ?" +
    '<br>' +
    "int x:8;",
    a: [{ text: "x stores a value of 8", isCorrect: false},
        { text: "x is an 8-bit integer.", isCorrect: true },
        { text: "Both A and B", isCorrect: false },
        { text: "None of the above.", isCorrect: false}
    ]

}

]
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

var falseCheck = 0
var trueCheck = 0

// Set start
var start = true;

//correct ans count
var count = 0
// Iterate
function iterate(id) {
var selectCheck = 0
// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerHTML = "Question " + (Number(id) + 1) +" : "+ Questions[id].q;

// Getting the options
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
})
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
})

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
})

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
    
})

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
            console.log(trueCheck)
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
