/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function (order, friends) {
    const map = new Map();
    let ans = [];
    for (let i = 0; i < friends.length; i++) {
        map.set(friends[i]);
    }

    for (let i = 0; i < order.length; i++) {
        if (map.has(order[i])) ans.push(order[i]);
    }
    return ans;
};