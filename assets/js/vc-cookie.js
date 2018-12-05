var d = new Date();
d.setTime(d.getTime() + (30*24*60*60*1000)); // 30 day expiry
var expires = "expires="+ d.toUTCString();

function setCookie(){
  document.cookie = "vcagreement=yes; " + expires;
  document.getElementById("cookie-policy").style.display = "none";
}

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

if (getCookie("vcagreement")) {
  document.getElementById("cookie-policy").style.display = "none";
}
