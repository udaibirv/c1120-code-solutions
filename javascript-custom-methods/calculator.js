/* exported calculator */
var calculator = {
  add: function(x, y){
    return x + y;
  },
  subtract: function(x, y){
    return x - y;
  },
  multiply: function(x, y){
    return x * y;
  },
  divide: function(x, y){
    return x / y;
  },
  square: function(x){
    return x * x;
  },
  sumAll: function(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
      sum+=arr[i];

    }
    return sum;
  },
  getAverage: function (arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
      sum+=arr[i];
    }
    return sum/ arr.length;
  }
}
