/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let s = [];
    for (let i = 0; i < tokens.length; i++) {
        if (['+', '-', '*', '/'].includes(tokens[i])) {
            let right = +(s.pop());
            let left = +(s.pop());
            let res;
            if (tokens[i] === "+") res = left + right;
            if (tokens[i] === "-") res = left - right;
            if (tokens[i] === "*") res = left * right;
            if (tokens[i] === "/") res = Math.trunc(left / right);;
            s.push(res);
        }
        else {
            s.push(tokens[i]);
        }
    }
    return +(s[s.length - 1]);
};