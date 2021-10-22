
  const words = ["rope", "pore", "repo", "red rum", "murder","listen","silent","endeavour"];
  const output = [];

  function sortStrChars(word) {
    if (!word) {
      return;
    }
    word = word.split(''); // divides the word in single characters
    word = word.sort(); // sort them in alphabetical order
    word = word.join(''); // reunite the characters
    word = word.replace(/[^\w]/g, ''); //regExp to get rid of the space and symbols
    word = word.toLowerCase(); //every letter is now lower case
    return word;
  }
  
  function groupAnagrams(words) {
    const anagrams = {}; 
    words.forEach((word) => {
      const sortedWord = sortStrChars(word);
      if (anagrams[sortedWord]) {
        return anagrams[sortedWord].push(word); // push the words that mathces the comparison in the same array
      }
      anagrams[sortedWord] = [word];
    });
    return anagrams;
  }
  
  const groupedAnagrams = groupAnagrams(words);
  for (const sortedWord in groupedAnagrams) {
    output.push(groupedAnagrams[sortedWord].toString()); 
  }