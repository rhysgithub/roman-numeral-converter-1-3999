function convertToRoman(num) {
    
    
    let numString = num.toString();
    let numArr = [];
    let romanArr = [];
    
    for (let a = 0; a < numString.length; a++) {
        numArr.push(numString.charAt(a));
    }

    switch (numArr[numArr.length-1]) {
        case "1": 
        romanArr.unshift("I");
        break;
        case "2": 
        romanArr.unshift("II");
        break;
        case "3": 
        romanArr.unshift("III");
        break;
        case "4": 
        romanArr.unshift("IV");
        break;
        case "5": 
        romanArr.unshift("V");
        break;
        case "6": 
        romanArr.unshift("VI");
        break;
        case "7": 
        romanArr.unshift("VII");
        break;
        case "8": 
        romanArr.unshift("VIII");
        break;
        case "9": 
        romanArr.unshift("IX");
        break;
        case "0": 
        romanArr.unshift("");
        break;
    }

    switch(numArr[numArr.length-2]) {
        case "1": 
        romanArr.unshift("X");
        break;
        case "2": 
        romanArr.unshift("XX");
        break;
        case "3": 
        romanArr.unshift("XXX");
        break;
        case "4": 
        romanArr.unshift("XL");
        break;
        case "5": 
        romanArr.unshift("L");
        break;
        case "6": 
        romanArr.unshift("LX");
        break;
        case "7": 
        romanArr.unshift("LXX");
        break;
        case "8": 
        romanArr.unshift("LXXX");
        break;
        case "9": 
        romanArr.unshift("XC");
        break;
        case "0": 
        romanArr.unshift("");
        break;
    }

    switch(numArr[numArr.length-3]) {
        case "1": 
        romanArr.unshift("C");
        break;
        case "2": 
        romanArr.unshift("CC");
        break;
        case "3": 
        romanArr.unshift("CCC");
        break;
        case "4": 
        romanArr.unshift("CD");
        break;
        case "5":
        romanArr.unshift("D");
        break;
        case "6": 
        romanArr.unshift("DC");
        break;
        case "7": 
        romanArr.unshift("DCC");
        break;
        case "8": 
        romanArr.unshift("DCCC");
        break;
        case "9": 
        romanArr.unshift("CM");
        break;
        case "0": 
        romanArr.unshift("");
        break;
    }

    switch(numArr[numArr.length-4]) {
        case "1": 
        romanArr.unshift("M");
        break;
        case "2": 
        romanArr.unshift("MM");
        break;
        case "3": 
        romanArr.unshift("MMM");
        break;
        case "0": 
        romanArr.unshift("");
        break;
    }
    let romanStr = romanArr.toString("");
    let romanStrTidied = romanStr.replaceAll(",", "")
    return romanStrTidied;
}
console.log(convertToRoman(1131));
