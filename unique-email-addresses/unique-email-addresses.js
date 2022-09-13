/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
   
    let uniqueEmails = new Set();
    
    for(let i = 0; i < emails.length; i++){
        let emailPart = emails[i].split('@');
        
        let localPart = emailPart[0].split('+');
        
        let temp = localPart[0].replaceAll('.','') +'@' + emailPart[1]
        uniqueEmails.add(temp);
    }
    
    return uniqueEmails.size;
    
};