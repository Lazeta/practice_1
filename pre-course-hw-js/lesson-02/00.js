let s1 = '()'; //true
let s2 = '()[]{}'; //true
let s3 = '(]'; //false
let s4 = '{[]}'; // true
let s5 = '([)]'; //false
let s6 = '{[[]{}]}()()'; //true

function isValid(s) {
    let stack = [];
    let brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let i = 0; i < s.length; i++) {
        const current = s[i];

        if(isClosedBrackets(current)) {
            if (brackets[current] !== stack.pop()) return false; 
        } else {
            stack.push(current);
        }
    }

    return stack.length === 0;
}
function isClosedBrackets(char) {
    return [')','}',']'].indexOf(char) > -1;
}

console.log(s1, isValid(s1));
console.log(s2, isValid(s2));
console.log(s3, isValid(s3));
console.log(s4, isValid(s4));
console.log(s5, isValid(s5));
console.log(s6, isValid(s6));

let objects = [
    { name: 'Bob' },
    { name: 'Anna' },
    { name: 'Tom' }
]
for (let i = objects.lenght - 1; i >= 0; i--){
    const object = objects[i]
    console.log(object.name)
}
