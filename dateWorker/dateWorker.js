self.addEventListener("message",function(event){
    setInterval(function(){
        var time = new Date();
        self.postMessage({
            hour:time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        });
    },1000);
});