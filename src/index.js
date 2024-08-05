module.exports = function toReadable (number) {
    let result = '', str = number.toString();
    if (number === 0) {
        return result = 'zero';
    } else {
        while (str.length > 0) {
            if (str.length === 3) {
                switch (str[0]) {
                    case '1': result = 'one hundred '; break;
                    case '2': result = 'two hundred '; break;
                    case '3': result = 'three hundred '; break;
                    case '4': result = 'four hundred '; break;
                    case '5': result = 'five hundred '; break;
                    case '6': result = 'six hundred '; break;
                    case '7': result = 'seven hundred '; break;
                    case '8': result = 'eight hundred '; break;
                    case '9': result = 'nine hundred '; break;
                }
            }
            if (str.length === 2) {
                if (str[0] === '1') {
                    switch (str) {
                        case '10': result += 'ten'; break;
                        case '11': result += 'eleven'; break;
                        case '12': result += 'twelve'; break;
                        case '13': result += 'thirteen'; break;
                        case '14': result += 'fourteen'; break;
                        case '15': result += 'fifteen'; break;
                        case '16': result += 'sixteen'; break;
                        case '17': result += 'seventeen'; break;
                        case '18': result += 'eighteen'; break;
                        case '19': result += 'nineteen'; break;
                    }
                    str = '';
                } else {
                    switch (str[0]) {
                        case '2': result += 'twenty '; break;
                        case '3': result += 'thirty '; break;
                        case '4': result += 'forty '; break;
                        case '5': result += 'fifty '; break;
                        case '6': result += 'sixty '; break;
                        case '7': result += 'seventy '; break;
                        case '8': result += 'eighty '; break;
                        case '9': result += 'ninety '; break;
                        case '0': result += ''; break;
                    }
                }
            }
            if (str.length === 1) {
                switch (str[0]) {
                    case '1': result += 'one'; break;
                    case '2': result += 'two'; break;
                    case '3': result += 'three'; break;
                    case '4': result += 'four'; break;
                    case '5': result += 'five'; break;
                    case '6': result += 'six'; break;
                    case '7': result += 'seven'; break;
                    case '8': result += 'eight'; break;
                    case '9': result += 'nine'; break;
                    case '0': result += ''; break;
                }
            }
            str = str.slice(1);
        }
    return result.trim();
    }
}
