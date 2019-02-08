function range(start, end) {
    const arr = []
    if (start === end) {
        return start
    }
    arr.push(range((start + 1), end))
}