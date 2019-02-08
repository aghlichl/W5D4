Array.prototype.myEach = function (callback) {
    let i;
    for (i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

let x = 6;
let y = 7;

const printer = function (arg) {
    console.log(`${arg}`);
}

Array.prototype.myMap = (callback) => {
    const results = [];

    this.myEach(function (el) {
        results.push(callback(el))
    })
}


const mapper = function (arg) {
    return arg + 2
}

Array.prototype.myReduce = function (callback, initialValue) {
    let acc;
    let dup;
    if (initialValue) {
        acc = initialValue;
        dup = this.slice();
    } else {
        acc = this[0];
        dup = this.slice(1);
    }

    dup.myEach(function (el) {
        acc += callback(el);
    })
    return acc;
}

const reducer = function (arg) {
    return arg * 2
}