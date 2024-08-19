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
        "",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ]; // от 11 до 19
    const tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ]; // десятки 10, 20, и т д
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

    const thousands = ["hundred", "thousand"];

    if (num === 0) {
        return "zero";
    }

    let toWords = "";

    if (num >= 100) {
        toWords = hundreds[Math.floor(num / 100)] + " ";
        num = num % 100;
    }

    if (10 < num && num <= 19) {
        toWords = toWords + teens[num - 10] + " ";
    }

    if (num >= 20) {
        toWords = toWords + tens[Math.floor(num / 10)] + " ";
        num = num % 10;
        toWords = toWords + oneNum[num] + " ";
    } else {
        toWords = toWords + oneNum[num] + " ";
    }
    if (num < 1000) {
        return (
            oneNum[Math.floor(num / 100)] +
            " " +
            thousands[0] +
            (num % 100 !== 0 ? " " + toReadable(num % 100) : "")
        );
    }
    return toWords.trim();
}

console.log(toReadable(555));
