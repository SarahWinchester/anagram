function anagram(str1, str2) {
    
    if(str1.length !== str2.length){
        console.log(str1 + " and "+ str2+ " they are not anagrams");
        return "This is not an anagram"  
    }else{
        let strsplit1= str1.toLowerCase().split("").sort().join();
        console.log(strsplit1);
        let strsplit2= str2.toLowerCase().split("").sort().join();
        console.log(strsplit2)
        if (strsplit1 === strsplit2) {
            console.log( str1+ " and " + str2 + " are anagrams");
            return str1+ " and " + str2 + " are anagrams"
        }else{
            console.log(str1 + " and "+ str2+ " they are not anagrams");
        }
    }
}
anagram("Lima", "Roma");