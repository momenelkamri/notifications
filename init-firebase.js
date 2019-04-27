var MsgElem = document.getElementById("msg"),
TokenElem = document.getElementById("token"),
NotisElem = document.getElementById("notis"),
ErrElem = document.getElementById("err");

// Initialize Firebase
 var config = {
     apiKey: "AIzaSyDAZlQye2MqLtASMbG2NdCI38mEcVogoPw",
     authDomain: "test-3a1f2.firebaseapp.com",
     databaseURL: "https://test-3a1f2.firebaseio.com",
     projectId: "test-3a1f2",
     storageBucket: "test-3a1f2.appspot.com",
     messagingSenderId: "1089182027842"
 };
 firebase.initializeApp(config);

 var messaging = firebase.messaging();

 // Add the public key generated from the console here.
// messaging.usePublicVapidKey('AAAA_ZhO0EI:APA91bGspUiMjA4idrgVLj_A_emW5_eqdo6s0CoU888wXtZc-kstTeR3aa5jtBLvnE3bVZ2vEH6CwNO3poRGiip_PUlY7k8ebpMs2A7-osU3QWHDd_m20g7RUzrvJX4096jfeFhz5ePy');

 messaging
   .requestPermission()
   .then(function () {
        MsgElem.innerHTML = "Notification permission granted." 
        console.log("Notification permission granted.");

        return messaging.getToken()
    })
    .then(function(token) {
        // print the token on the HTML page
        TokenElem.innerHTML = "token is : " + token
    })
    .catch(function (err) {
        ErrElem.innerHTML = ErrElem.innerHTML + "; " + err
        console.log("Unable to get permission to notify.", err);
    });

messaging.onMessage(function(payload) {
    console.log("Message received. ", payload);
    NotisElem.innerHTML = NotisElem.innerHTML + JSON.stringify(payload) 
});