/**
 * @author Sachin Acharya
 * @description Reverse method on string to reverse the given string
 */

interface String {
    reverse(): String
}

String.prototype.reverse = function () {
    function reverse(string: String): String {
        if (string == "") return ""
        return reverse(string.substring(1)) + string.charAt(0)
    }

    return reverse(this)
}
