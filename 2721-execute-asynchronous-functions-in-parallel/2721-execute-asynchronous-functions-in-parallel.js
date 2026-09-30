/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        // Edge case: empty input array resolves immediately with []
        if (functions.length === 0) {
            resolve([]);
            return;
        }

        const results = new Array(functions.length);
        let completedCount = 0;

        functions.forEach((fn, index) => {
            fn()
                .then((val) => {
                    // Store by original index to preserve order
                    results[index] = val;
                    completedCount++;

                    // Resolve when all promises have completed
                    if (completedCount === functions.length) {
                        resolve(results);
                    }
                })
                .catch((err) => {
                    // Reject immediately on the first error
                    reject(err);
                });
        });
    });
};
