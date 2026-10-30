/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let s = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "+" ||
            tokens[i] === "-" ||
            tokens[i] === "*" ||
            tokens[i] === "/"
        ) {
            let right = parseInt(s.pop(), 10);
            let left = parseInt(s.pop(), 10);
            let res;
            if (tokens[i] === "+") res = left + right;
            if (tokens[i] === "-") res = left - right;
            if (tokens[i] === "*") res = left * right;
            if (tokens[i] === "/") res = left / right;
            s.push(res);
        }
        else {
            s.push(tokens[i]);
        }
    }
    return parseInt(s[s.length - 1], 10);
};