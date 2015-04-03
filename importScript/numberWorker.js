self.addEventListener("message",function(event){
   var numberWorker = self.importScripts('greatest-number-script.js');
    var requestData = event.data,
        number1 = requestData.number1,
        number2 = requestData.number2,
        greatestNumber = findGreatestNumber(number1,number2);
    self.postMessage({result:greatestNumber});
});