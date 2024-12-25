/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    var mergedString = "";
    let i = j = 0;
    let len1 = word1.length;
    let len2 = word2.length;
    while (i < len1 || j < len2) {
        if (i < len1 && j < len2) {
            mergedString += word1[i] + word2[j]
            i++;
            j++;
        }
        else if (i < len1) {
            mergedString += word1[i];
            i++;
        }
        else {
            mergedString += word2[j]
            j++;
        }
    }
    return mergedString;
};