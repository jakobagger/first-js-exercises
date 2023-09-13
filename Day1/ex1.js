function add(n1, n2){
    return n1 +n2;
}
const sub = function(n1,n2){
    return n1 - n2
}
const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};


