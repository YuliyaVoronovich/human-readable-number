module.exports = function toReadable (number) {
  let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0)  return 'zero';

    if (number > 0 && number < 20)  return ones[number];

    if (number >= 20 && number < 100) {

        if (!(number % 10)) {
            return `${dozens[number / 10]}`;
        } else {
            return `${dozens[Math.floor(number / 10)]} ${ones[number % 10]}`;
        }
    }

    if (number / 100 > 0) {

        if (!(number % 100)) {
            return `${ones[number / 100]} hundred`;
        } else if (number % 100 < 20) {
            return `${ones[Math.floor(number / 100)]} hundred ${ones[number % 100]}`;
        } else {
            return (`${ones[Math.floor(number / 100)]} hundred ${dozens[Math.floor(number % 100 / 10)]} ${ones[number % 10]}`).trim();
        }
    }

}