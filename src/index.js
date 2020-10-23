module.exports = function check(str, bracketsConfig) {
        pairAarr = bracketsConfig[0];

        var openBrackets = [];
        var closeBrackets = [];
        var ident = [];
        for (let i = 0; i < bracketsConfig.length; i++) {
            var pair = bracketsConfig[i];
            openBrackets.push(pair[0]); //создание массива открывающих скобок
            closeBrackets.push(pair[1]); //создание массива закрывающих скобок

            if (openBrackets[i] === closeBrackets[i]) {
                ident.push(openBrackets[i]);
            }
        }

        rselt = true;
        bufer = [];

        for (let i = 0; i < str.length; i++) {
            if (
                !ident.includes(bufer[bufer.length - 1]) &&
                ident.includes(str[i])
            ) {
                bufer.push(str[i]);
            } else if (
                openBrackets.includes(str[i]) &&
                !ident.includes(str[i])
            ) {
                bufer.push(str[i]);
            } else if (bufer.length === 0) {
                return false;
            } else {
                index = "";
                for (let j = 0; j < closeBrackets.length; j++) {
                    if (
                        str[i] === closeBrackets[j] &&
                        bufer[bufer.length - 1] === openBrackets[j]
                    ) {
                        index = j;
                        bufer.pop(str[i - 1]);
                        break;
                    } else if (!closeBrackets.includes(str[i])) {
                        return false;
                    }
                }
            }

        }
        if (bufer[0] === undefined) {
            return true;
        } else {
            return false;
        }
    }
;
