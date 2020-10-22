// module.exports = function check(str, bracketsConfig) {
  function check(str, bracketsConfig) {
    pairAarr = bracketsConfig[0];

    var openBrackets = [];
    var closeBrackets = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        let pair = bracketsConfig[i];
        openBrackets.push(pair[0]);
        closeBrackets.push(pair[1]);
    }

    // console.log(str[0]);
    rselt = true;
    bufer = [];
    for (let i = 0; i < str.length - 1; i++) {
        if (openBrackets.includes(str[i])) {
            bufer.push(str[i]);
        } else {
            index = "";
            for (let j = 0; j < closeBrackets.length; j++) {
                str[i] === closeBrackets[j] ? (index = j) : index;
                console.log(`1-  + ${bufer}`);
                bufer.pop(str[i-1]);
                console.log(`2-  + ${bufer}`);

            }
            if (openBrackets[index] !== str[i]) {
                console.log(false);

            }
            // console.log(index);
        }

        // console.log(str[i]);
    }
    console.log(bufer);
}

const config3 = [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
];
check("([{}])", config3);
