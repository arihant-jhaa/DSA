/**
 * @param {string} a
 * @return {number[]}
 */
var minOperations = function (a) {
    const n = a.length;
    const l = new Array(n).fill(0);
    const r = new Array(n).fill(0);
    const ans = new Array(n).fill(0);

    let lBalls = 0;
    for (let i = 1; i < n; i++) {
        if (a[i - 1] === '1') lBalls++;
        l[i] = l[i - 1] + lBalls;
    }

    let rBalls = 0;
    for (let j = n - 2; j >= 0; j--) {
        if (a[j + 1] === '1') rBalls++;
        r[j] = r[j + 1] + rBalls;
    }

    for (let i = 0; i < n; i++) {
        ans[i] = l[i] + r[i];
    }

    return ans;
};
