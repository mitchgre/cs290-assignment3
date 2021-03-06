/**
* the \@param notation indicates an input paramater for a function. For example
* @param {string} foobar - indicates the function should accept a string
* and it should be called foobar, for example function(foobar){}
* \@return is the value that should be returned
*/

/**
* Write a function called `uselessFunction`.
* It should accept no arguments.
* It should return the null value.
* @return {null} - 'useless'.
*/

//your code here
function uselessFunction (){
    return null;
}
//end your code

var bar = 'not a function';
var barType = typeof bar;

/**
* Assign the above variable 'bar' to an anonymous function with the following
* properites.
* @param {float[]} doubleArray - an array of floating point numbers.
* The function should multiply every number in the array by 2 (this should
* change the content of the array).
* @return {boolean} - true if the operation was sucessful, false otherwise.
* This should return false if any value in the array cannot be doubled.
*/

// your code here
bar = function( doubleArray){
    if (Array.isArray(doubleArray)){  // make sure it's an array
	for (var i=0; i < doubleArray.length; i++){ // loop over every element in array
	    if (!(typeof doubleArray[i] == 'number')) // return false if not a number
		return false;
	    else 
		doubleArray[i] *= 2;
	    }
	 return true;
	 }
    else
	return false;
}

//end your code

/**
* Creates a new GitLog
* @class
* @property {string} hash - the hash of the commit
* @property {Date} date - the date of the commit as a JS Date object
* @property {string} message - the commit message
*/
function GitLog(hash, date, message) {
    this.hash = hash;
    this.date = date;
    this.message = message;
}

/**
* Create a function called parseGit to parse Git commit logs
* The logs will be generated by the following command
* git log --pretty=format:"%h %ad \"%s\"" --date=rfc
* The result looks like this
* 3782618 Wed, 7 Jan 2015 21:42:26 -0800 "Initial commit"
* |hash | |             date           | |   message    |
* There will always be a space between the hash and date and between the date
* and the first " of the commit message.
*
* You will covert these into GitLog objects with the following properties:
*1
*
* @param {array.<string>} logArray - an array of Git commit messages of the
* above
* format.
* @return {array.<GitLog>} - return an array GitLog instances
*/

//your code here
function parseGit(logArray){

    // http://stackoverflow.com/questions/12744995/finding-the-nth-occurrence-of-a-character-in-a-string-in-javascript
    function nth_ocurrence(str, needle, nth) {
	for (var i=0;i<str.length;i++) {
	    if (str.charAt(i) == needle) {
		if (!--nth) {
		    return i;    
		}
	    }
	}
	return false;
    } // end nth_occurence function

    var arr = []; // initialize empty array 
    // create new GitLog object from each line logArray string?  
    // no, logArray is already broken into an array of strings from each line
    // var lines = logArray.split('\n');


    // loop over each line in logArray 
    for (var i=0; i < logArray.length; i++)
	{
	    var tmpLog = new GitLog();
	    var tmpStr = logArray[i];

	    // hash is substring from 0..1st space
	    tmpLog.hash = tmpStr.substring(0,nth_ocurrence(tmpStr,' ',1));
	    // date is substring from 1st space+1 to 1st "
	    tmpLog.date = new Date(tmpStr.substring(nth_ocurrence(tmpStr,' ',1) + 1,
					 nth_ocurrence(tmpStr,'\"',1) - 1));
	    // message is substring from 1st "+1 to end of string-1
	    tmpLog.message = tmpStr.substring(nth_ocurrence(tmpStr,'\"',1)+1,
					       tmpStr.length-1);
	    
	    // pack results into arr
	    arr.push(tmpLog);
	    
	    }
    return arr;
}
//end your code
