/*function receivesAFunction() {
    spy();
   
  }
  function spy() {
    console.log("Hello");
  }

  function returnsAnamedFunction(){

  }*/
  function receivesAFunction(callback) {
  setTimeout(function () {
    callback()
  }, 2000)
}