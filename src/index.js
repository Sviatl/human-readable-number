module.exports = function toReadable(number) {
    return toReadable1(number);
}

function toReadable1(number) {
    if (number == 0) return 'zero';
    mm = [];
    while (number > 0) {
        c = number % 10;
        mm.push(c);
        number = (number - c) / 10;
    }
    ans = "";
    if (mm.length ==1) {
        return toNumb2(mm[0]);
    }
    for (i = mm.length - 1; i >= 1; i--) {
        // console.log(mm[i]);
        if (ans != '' && mm[i] != 0) {
            ans = ans + ' ';
        }
        if (i == 1) {
            ans = ans + toNumb2(mm[i], i, mm[i - 1]);
        }
        else {
            ans = ans + toNumb2(mm[i], i);
        }
    }
    return ans.trim();
}

function toNumb2(i, p = 0, j = undefined) {
    ans = "";
    jj = i;
    if (j != undefined) {
        i = i * 10 + j;
    }
    if (p >= 2 || p == 0 || (i < 20 && i >= 10)) {
        switch (i) {
            case 0:
                ans = ans + '';
                break;
            case 1:
                ans = ans + 'one';
                break;
            case 2:
                ans = ans + 'two';
                break;
            case 3:
                ans = ans + 'three';
                break;
            case 4:
                ans = ans + 'four';
                break;
            case 5:
                ans = ans + 'five';
                break;
            case 6:
                ans = ans + 'six';
                break;
            case 7:
                ans = ans + 'seven';
                break;
            case 8:
                ans = ans + 'eight';
                break;
            case 9:
                ans = ans + 'nine';
                break;
            case 10:
                ans = ans + 'ten';
                break;
            case 11:
                ans = ans + 'eleven';
                break;
            case 12:
                ans = ans + 'twelve';
                break;
            case 13:
                ans = ans + 'thirteen';
                break;
            case 14:
                ans = ans + 'fourteen';
                break;
            case 15:
                ans = ans + 'fifteen';
                break;
            case 16:
                ans = ans + 'sixteen';
                break;
            case 17:
                ans = ans + 'seventeen';
                break;
            case 18:
                ans = ans + 'eighteen';
                break;
            case 19:
                ans = ans + 'nineteen';
                break;
            default:
                ans = ans + "";
        }
    }
    else {
        switch (jj) {
            case 0:
                ans = ans + ' ' + toNumb2(j);
                break;
            case 1:
                ans = ans + ' ' + toNumb2(j);
                break;
            case 2:
                ans = ans + 'twenty ' + toNumb2(j);
                break;
            case 3:
                ans = ans + 'thirty ' + toNumb2(j);
                break;
            case 4:
                ans = ans + 'forty ' + toNumb2(j);
                break;
            case 5:
                ans = ans + 'fifty ' + toNumb2(j);
                break;
            case 6:
                ans = ans + 'sixty ' + toNumb2(j);
                break;
            case 7:
                ans = ans + 'seventy ' + toNumb2(j);
                break;
            case 8:
                ans = ans + 'eighty ' + toNumb2(j);
                break;
            default:
                ans = ans + 'ninety ' + toNumb2(j);
        }
    }

    if (p == 2) {
        if (i == 1) {
            ans = ans + ' hundred';
        }
        else {
            ans = ans + ' hundred';
        }

    }
    return ans;
}

// console.log(toReadable1(111));