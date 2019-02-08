Array.prototype.bubbleSort = function () {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        let i = 0;
        for (i; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                let temp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = temp;
                sorted = false;
            }
        }
    }
    return this
}

String.prototype.subStrings = function () {
    let i;
    const subStrings = [];
    for (i = 0; i < this.length; i++) {
        let j;
        subStrings.push(this.slice(i, i + 1))
        for (j = 0; j < this.length; j++) {
            if (j > i) {
                subStrings.push(this.slice(i, j + 1))
            }
        }
    }
    return subStrings;
}