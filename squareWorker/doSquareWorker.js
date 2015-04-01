self.addEventListener("message",function(event){
    var inputData = event.data,
        inputNumber = parseInt(inputData.number,10),
        squareResult = Math.pow(inputNumber,2);
    self.postMessage({result:squareResult});
});