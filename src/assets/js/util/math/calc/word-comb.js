// <!-- Paste this code into an external JavaScript file named: word-comb.js  -->

/* This script and many more are available free online at
The JavaScript Source :: http://javascript.internet.com
Created by: Brett McLean :: http://www.brettbits.com/ */

// calculateCombinations 以 inputText 作为参数，它是一个包含所有的字符串
// 用户提供的字符。它计算这些字符存在多少组合，
// 在 outputField 中打印它们，并将数字返回给调用函数。
function calculateCombinations(inputText) {
    let inputCopy = inputText;
    let numerator = factorial(inputText.length);
    let denominator = 1;
    while (inputCopy !== "") {
        denominator *= factorial(howManyOccurrences(inputCopy, inputCopy.charAt(0)));
        inputCopy = stripCharactersFromString(inputCopy, inputCopy.charAt(0));
    }
    return numerator / denominator;
}

// HowManyOccurrences 返回 characterToFind 在 stringToSearch 中出现的次数。
// 示例：howManyOccurrences("abcabcabca", "a") 返回 4。
function howManyOccurrences(stringToSearch, characterToFind) {
    let count = 0;
    for (let i = 0; i < stringToSearch.length; i++) {
        if (stringToSearch.charAt(i) === characterToFind)
            count++;
    }
    return count;
}

// stripCharactersFromString 返回 stringToStripFrom，所有出现的情况
// 删除了 characterToStrip。
// 示例：stripCharactersFromString("abcabcabca", "a") 返回 "bcbcbc"。
function stripCharactersFromString(stringToStripFrom, characterToStrip) {
    let outputString = "";
    for (let i = 0; i < stringToStripFrom.length; i++)
        if (stringToStripFrom.charAt(i) !== characterToStrip)
            outputString += stringToStripFrom.charAt(i);
    return outputString;
}

// factorial 返回 inputNumber 的阶乘，也写成 (inputNumber)!。
// 阶乘的定义：inputNumber! = (inputNumber) * (inputNumber-1) * ... * 2 * 1
// 示例：阶乘(4) = 4! = 4 * 3 * 2 * 1 = 24
function factorial(inputNumber) {
    let outputNumber = 1;
    for (let i = inputNumber; i > 0; i--)
        outputNumber *= i;
    return outputNumber;
}

// createWordList 递归生成一个包含所有可能组合的数组
// 给定的字母串。它通过取单词中的每个字母来解决这个问题，
// 然后将剩余字母的所有可能组合附加到它上面。
// 最初，wordArray 应该是空的，strbase 应该等于 ""，并且剩余字符
// 应该包含用户的输入字符串。
// how to use: createWordList([], '', '123') // print ['123', '132', '213', '231', '312', '321']
function createWordList(wordArray, strbase, remainingchars) {
    if (remainingchars.length === 1) { // 基本情况：只剩下一个字符，并且只能以一种方式排列
        wordArray[wordArray.length] = strbase + remainingchars.charAt(0); // append one remaining character to string base
    } else {
        for (let j = 0; j < remainingchars.length; j++) {
            let currchar = remainingchars.charAt(j); // 剩余字符的第一个字符
            if (remainingchars.indexOf(currchar) === j) // 确保重复字母不会导致组合冗余
                wordArray = createWordList(wordArray, strbase + remainingchars.charAt(j), remainingchars.substring(0, j) + remainingchars.substring(j + 1, remainingchars.length)); // 递归调用
        }
    }
    return wordArray; // 返回包含 stbase 的 wordArray 加上剩余字符的所有可能组合
}

// printWordList 接受一个数组，并打印其中包含的每个字符串，以逗号分隔。
// 然后将此输出放入名为“combinationlist”的文本区域。
function printWordList(wordArray) {
    let output = "";
    for (let i = 0; i < wordArray.length - 1; i++)
        output += wordArray[i] + ", ";
    output += wordArray[wordArray.length - 1];
    return output;
}

// showCombinations 接收用户输入的字符作为参数，从中计算存在多少组合
// 字符，然后显示这些组合中的每一种。这个函数有一个保护措施，它警告
// 用户如果计算需要很长时间来处理。
function showCombinations(inputText) {
    let numCombinations = calculateCombinations(inputText);
    let confirmMessage = "The following calculation will involve finding " + numCombinations + " different combinations of the letters";
    confirmMessage += "\nyou have provided. Depending on the speed of your computer, it may take a while to";
    confirmMessage += "\nprocess this request, or in a worst-case scenario, your web browser may crash.";
    confirmMessage += "\nThis will do no damage to your computer that a restart will not solve.";
    confirmMessage += "\n运算7位以上数字将会使你的计算机运行缓慢或死机，您确定要继续吗？";
    if (numCombinations < 5000 || confirm(confirmMessage)) // 仅在要计算的组合数较少或用户同意警告时才执行此操作
        printWordList(createWordList([], "", inputText)); // 计算并打印所提供字母的所有组合
}

export {
    calculateCombinations,
    createWordList
}