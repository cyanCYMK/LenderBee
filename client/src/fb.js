console.log('wuddup yo');
console.log('blah');
console.log('hey');
window.fbAsyncInit = function() {
  FB.init({
    appId : '1584011465146361',
    cookie: true,
    xfbml : true,
    version : 'v2.2'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

var checkLoginState = function() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

var statusChangeCallback = function(response) {
  console.log('statusChangeCallback');
  console.log(response);
  if (response.status === 'connected') {
    testAPI();
  } else if (response.status === 'not_authorized') {
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  } else {
    document.getElementById('status').innerHTML = 'Please log ' +
      'into Facebook.';
  }
}

var testAPI = function() {
  console.log('Welcome! Fetching your information... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML = 
      'Thanks for logging in, ' + response.name + '!';
  });
}

// module.exports = {
//   checkLoginState: checkLoginState,
//   statusChangeCallback: statusChangeCallback,
//   testAPI: testAPI
// };
