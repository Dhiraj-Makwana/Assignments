/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp. aprs aprs
*/

function isAnagram(str1, str2) {
    //converting a string into an array
    const lowerstr2 = str2.toLowerCase();
    const lowerstr1 = str1.toLowerCase();
    const string1 = lowerstr1.split('');
    const string2 = lowerstr2.split('');

    //sort array
    string1.sort();
    string2.sort();

    if(string1.length !== string2.length) {
        return false;
    } 
    else {
        for(let i=0; i<string1.length; i++) {
            if(string1[i] !== string2[i]) {
                return false;
            }
        }
    }
    return true;
}

module.exports = isAnagram;