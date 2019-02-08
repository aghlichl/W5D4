Array.prototype.uniq = function () {
    const result = [];
    let i;
    for (i = 0; i < this.length; i++) {
        if (result.indexOf(this[i]) === -1) {
            result.push(this[i]);
        }
    }
    return result;
}

Array.prototype.twoSum = function () {
    const result = [];
    let i;
    for (i = 0; i < this.length; i++) {
        let j;
        for (j = 0; j < this.length; j++) {
            debugger
            if (i < j) {
                if (this[i] + this[j] === 0) {
                    result.push([i, j])
                }
            }
        }
    }
    return result;
}

Array.prototype.transpose = function () {
    const result = [];
    let i;
    for (i = 0; i < this[0].length; i++) {
        let temp = [];
        let j;
        for (j = 0; j < this.length; j++) {
            temp.push(this[j][i])
        }
        result.push(temp)
    }
    return result;
}