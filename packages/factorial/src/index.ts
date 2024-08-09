/**
 * @author Sachin Acharya
 * @description Calculate the factorial of the number.
 */
interface Number {
    factorial(): Number | undefined
}

Number.prototype.factorial = function () {
    function factorial(value: number): number {
        if (value == 0 || value == 1) return 1

        return value * factorial(value - 1)
    }

    if ((this as number) < 0) {
        return undefined
    }
    return factorial(this as number)
}
