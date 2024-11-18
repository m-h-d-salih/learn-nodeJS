
var isPalindrome = function(s) {
    if(s=="")
       return true;
    let rev="";
    
    const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for(let i=str.length-1;i>=0;i--)
    {
      rev+=str[i].toLowerCase();
    }
    return rev==str;

};