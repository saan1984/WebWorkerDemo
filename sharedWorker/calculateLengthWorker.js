self.addEventListener("connect", function (event) {
    var port = event.ports[0];
    port.addEventListener("message", function (event) {
        var requestData = event.data,
            inputString = requestData.string,
            stringLength = inputString.length;
        port.postMessage({result:stringLength});
    }, false);
    port.start();
}, false);