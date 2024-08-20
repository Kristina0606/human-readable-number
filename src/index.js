function toReadable(num) {
    const oneNum = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ]; // от 1 до 9
    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ]; // от 10 до 19
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ]; // десятки 20, 30, и т.д.
    const hundreds = [
        "",
        "one hundred",
        "two hundred",
        "three hundred",
        "four hundred",
        "five hundred",
        "six hundred",
        "seven hundred",
        "eight hundred",
        "nine hundred",
    ]; // сотни

    if (num === 0) {
        return "zero";
    }

    let toWords = "";

    if (num >= 100) {
        toWords += hundreds[Math.floor(num / 100)] + " ";
        num %= 100;
    }

    if (num >= 10 && num <= 19) {
        toWords += teens[num - 10] + " ";
    } else {
        if (num >= 20) {
            toWords += tens[Math.floor(num / 10)] + " ";
            num %= 10;
        }
        if (num > 0) {
            toWords += oneNum[num] + " ";
        }
    }

    return toWords.trim();
}

module.exports = toReadable;

console.log(toReadable(5555)); // "five thousand five hundred fifty five"
