class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.length = 0;
        this.increase(length);
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
    }

    get innerLength() {
        return this.length
    }

    set innerLength(value) {
        this.length = value < 0 ? 0 : value;
    }

    toString() {
        return this.length < this.innerString.length ? this.innerString.substring(0, this.length) + '...' : this.innerString;
    }
}