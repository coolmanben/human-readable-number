module.exports = function toReadable (number) {
    var number_arr = number.toString().split('');
    var number_leng = number_arr.length;
    var res_str = '';
    var i = 0
    if ( number_leng == 0 ) {res_str = 'non'};
    
    one_units   = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight","nine"];
    two_units   = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen","sixteen", "seventeen", "eighteen", "nineteen"];
    tens        = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    scales      = ["", "", "hundred", "thousand", "million", "billion", "trillion"];
    // 0-9
    if (number_leng == 1) {
        res_str = (one_units[number_arr [0] - '0']);
        return res_str;
    }

    while (i < number_leng) {
        if ( number_leng >=3) {
            if (number_arr[i] - '0' != 0) {
                res_str = res_str + one_units[number_arr[i]] + ' ' + scales[number_leng - 1] + ' ' ;
            }
            number_leng--;
        }
        else {
            // 10-19
            if (number_arr[i] - '0' == 1) {              
                res_str = res_str + two_units[number_arr[i+1]] + ' ';       
                return res_str.trim() ;
            }
            // 20-99
            else {
                if (number_arr[i] > 0 ) {        
                    res_str = res_str + tens[number_arr[i]] + ' ';    
                }
                i++ ;         
                //console.log( number_arr[i + 1] );
                if (number_arr[i] - '0' != 0) {
                    res_str = res_str  + one_units[number_arr[i]] + ' ';
                }
            }
        }
        i++
    }
    return res_str.trim();

}

//console.log(toReadable (2));

