/**
 *  This method evaluates two given strings and returns a boolean
 *  value if both are an Anagram. 
 *  For more information about anagrams:
 * @see https://en.wikipedia.org/wiki/Anagram
 * @param {String} str1 
 * @param {String} str2 
 * @returns {Boolean}
 * @author SarahWinchester
 */
function anagram(str1, str2) {
    if(str1.length == str2.length){
        let strsplit1= str1.toLowerCase().split("").sort().join();
        let strsplit2= str2.toLowerCase().split("").sort().join();
        if (strsplit1 === strsplit2) 
            return true;    
        else
            return false;
    }
    else 
        return false;
}