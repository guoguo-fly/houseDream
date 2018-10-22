

$(document).ready(function(){
    init();
    function init (){
    var xhr  = new XMLHttpRequest();
    xhr.open("get","http://localhost:63342",false);  //true异步  false同步
    xhr.send();

    //ajax对象的回调函数，在xhr对象的readyState改变时会触发这个函数，readState会有5个值
    xhr.onreadystatechange = function() {
        console.log(xhr.status);
        console.log(xhr.readyState);
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("get data successfully!")
        }else{
            console.log("get data failure!")
        }
    }
    }
});