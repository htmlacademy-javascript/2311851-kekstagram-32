// eslint-disable-next-line no-unused-vars
const checkStringLength = function(string,length){
  if(string.length <= length){
    return true;
  }else{
    return false;
  }
};


// eslint-disable-next-line no-unused-vars
const isPalindrome = function(string){
  string = string.toLowerCase().replaceAll(' ','');
  let newString = '';
  for(let i = string.length - 1;i >= 0;i--){
    newString += string[i];
  }

  if(newString === string){
    return true;

  }else{
    return false;
  }

};

