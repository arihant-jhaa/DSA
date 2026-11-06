/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
    let a = 0;
    let b = 1;

    while (true) {
        yield a;
        const next = a + b;
        a = b;
        b = next;
    }
};


/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */