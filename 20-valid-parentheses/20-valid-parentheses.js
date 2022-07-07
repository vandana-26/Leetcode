/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] == "(" || s[i] == "{" || s[i] == "["){
            arr.push(s[i]);
        }
       if(s[i] == ")" || s[i] == "}" || s[i] == "]"){
         if(arr[arr.length-1] == "(" && s[i] ==")")
             arr.pop();
         else if(arr[arr.length-1] == "{" && s[i] =="}")
             arr.pop();
         else if(arr[arr.length-1] == "[" && s[i] =="]")
             arr.pop();
          else
              return false;
               
        } 
    }
      
  if(arr.length != 0)
      return false
else 
    return true;

};