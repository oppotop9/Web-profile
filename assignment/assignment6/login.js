window.onload = loginLoad;

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const usernameRegis = urlParams.get('username')
console.log(usernameRegis);

const passwordRegis = urlParams.get('password')
console.log(passwordRegis);



function loginLoad(){
	var form = document.getElementById("myLogin");
  form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	//var pass = document.forms["myForm"]["password"];
	

	var username1 = document.forms["myLogin"]["username"];
	var password2 = document.forms["myLogin"]["password"];
	
	if (username1.value==usernameRegis&&password2.value==passwordRegis){
		alert("login success");
		
	  }
	else if (username1.value!=usernameRegis||password2.value!=passwordRegis){
		alert("username or password wrong");
		return false;
	  }
}

			