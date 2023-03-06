const callbacks = {};
let uniqueId = 0;
function callHandler(name, data, callback) {
  const id = `cb_${uniqueId++}_${new Date().getTime()}`;
  callbacks[id] = callback;
  window.bridge.send(name, JSON.stringify(data), id);
}

window.onload = function () {
  callHandler("notify", { data: { name: "liubaozhu", addr: "suiping" }}, 
  {
    success: function() {
    console.log("yes");
  }});
  let result;
  if (window.bridge) {
    result = window.bridge.back();
    window.bridge.onReceive = function(callbackId, result) {
      console.log('callbackId', callbackId, 'result', result);
    }
  } else {
    result = "Hello, Hybrid World";
  }
  document.getElementById("main-content").innerHTML = result;
};
