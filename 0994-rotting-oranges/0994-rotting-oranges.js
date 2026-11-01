/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let q = [];
    let m = grid.length;
    let n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                q.push([i, j, 0]);
            }
        }
    }

    let maxmin = 0

    while (q.length) {
        let [x, y, min] = q.shift();
        if (x > 0 && grid[x - 1][y] === 1) {
            grid[x - 1][y] = 2;
            q.push([x - 1, y, min + 1]);
        }

        if (x < m - 1 && grid[x + 1][y] === 1) {
            grid[x + 1][y] = 2;
            q.push([x + 1, y, min + 1]);
        }

        if (y > 0 && grid[x][y - 1] === 1) {
            grid[x][y - 1] = 2;
            q.push([x, y - 1, min + 1]);
        }

        if (y < n - 1 && grid[x][y + 1] === 1) {
            grid[x][y + 1] = 2;
            q.push([x, y + 1, min + 1]);
        }

        if (min > maxmin) { maxmin = min; }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }

    return maxmin;
};