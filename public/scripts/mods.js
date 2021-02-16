
var pageFigure = 3;

var config = { 
   apiKey: "AIzaSyCQkFnFlidgQVIB61H3IPPlsoQRqdXQGcM", 
   authDomain: "kimtjtj-fc115.firebaseapp.com", 
   databaseURL: "https://kimtjtj-fc115.firebaseio.com", 
   projectId: "kimtjtj-fc115", 
   storageBucket: "kimtjtj-fc115.appspot.com", 
   messagingSenderId: "612058102152" 
   }; 
   firebase.initializeApp(config); 

firebase.auth().onAuthStateChanged(function(user) {
	if(user && location.pathname == "/404.html"){
		window.location.href='/';
	}
	else if (user == null && location.pathname != "/404.html") {
		// No user is signed in.
		// alert(location.pathname);
		window.location.href='/404.html';
	}
	else{
		// alert('logout1');
	}
});

document.title = getTitle();

function emailLogin()
{
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
		alert('login failed');
	});
}

function logout(){
	firebase.auth().signOut().then(function() {
		// Sign-out successful.
		window.location.href='/404.html';
	}).catch(function(error) {
		// An error happened.
		window.location.href='/404.html';
	});
}

function move(plus_minus){
	var url = location.pathname;
	var preUrl = url.substring(0, url.lastIndexOf('/') + 1);
	var pageNum = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('_'));
	var pageCount = url.substring(url.lastIndexOf('_') + 1, url.lastIndexOf('.html'));
	pageNum *= 1;
	// alert(pageNum);
	if(plus_minus == 'plus')
		pageNum++
	else if(plus_minus == 'minus')
		pageNum--
	pageNum = getPageNum(pageNum);
	var newUrl = preUrl.concat(pageNum).concat('_').concat(pageCount).concat(".html");
	// alert(newUrl);
	window.location.href = newUrl;
}

function getTitle(){
	var url = location.pathname;
	return url.substring(url.lastIndexOf('/') + 1);
}

function percentageMove(){
	var url = location.pathname;
	var preUrl = url.substring(0, url.lastIndexOf('/') + 1);
	var percentage = document.getElementById('percentage').value;
	var pageCount = url.substring(url.lastIndexOf('_') + 1, url.lastIndexOf('.html'));
	pageNum = Math.floor(pageCount * percentage / 100);
	pageNum = getPageNum(pageNum);
	// alert(pageNum);
	var newUrl = preUrl.concat(pageNum).concat('_').concat(pageCount).concat(".html");
	// alert(newUrl);
	window.location.href = newUrl;
	
}

function pageMove(){
	var url = location.pathname;
	var preUrl = url.substring(0, url.lastIndexOf('/') + 1);
	var page = document.getElementById('percentage').value;
	var pageCount = url.substring(url.lastIndexOf('_') + 1, url.lastIndexOf('.html'));
	pageNum = getPageNum(page);
	// alert(pageNum);
	var newUrl = preUrl.concat(pageNum).concat('_').concat(pageCount).concat(".html");
	// alert(newUrl);
	window.location.href = newUrl;
	
}

function getPageNum(pageNum){
	pageNum = pageNum + '';
	return pageNum.length >= pageFigure ? pageNum : new Array(pageFigure - pageNum.length + 1).join('0') + pageNum;
}

function pageDown(){
	pixelDown = document.documentElement.clientHeight;
	pixelDown *= 0.90;
	
	window.scrollBy(0, pixelDown);
}

//var provider = new firebase.auth.GoogleAuthProvider();
//
//firebase.auth().onAuthStateChanged(function(user) {
//	if (user) {
//		// User is signed in.
//		var currentUser = firebase.auth().currentUser;
//
//		if ( currentUser == null || currentUser.displayName != "김태준") {
//			// var currentUserName = document.getElementById("currentUserName");
//			// currentUserName.value = currentUser.displayName;
//			// window.location.href='404.html';
//		} else {
//		}
//
//	} else {
//		// No user is signed in.
//		firebase.auth().signInWithRedirect(provider);
//	}
//});
//
//function logout(){
//	firebase.auth().signOut().then(function() {
//		// Sign-out successful.
//		window.location.href='404.html';
//		alert('2');
//	}).catch(function(error) {
//		// An error happened.
//		window.location.href='404.html';
//		alert('1');
//	});
//}


//document.getElementById("googleLogout").onclick = alert('');
//function() {
//	alert('3');
//	firebase.auth().signOut().then(function() {
//		// Sign-out successful.
//		window.location.href='404.html';
//alert('');
//	}).catch(function(error) {
//		// An error happened.
//		window.location.href='404.html';
//alert('1');
//	});
//	alert('2');
//}

