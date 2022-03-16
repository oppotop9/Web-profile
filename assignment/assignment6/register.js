window.onload = pageLoad;


function pageLoad(){
  
  var form = document.getElementById("myForm");
  form.onsubmit = validateForm;

}

function validateForm() {
    var lastname = document.forms["myForm"]["lastname"];
    var gender = document.forms["myForm"]["gender"];
	  var bday = document.forms["myForm"]["bday"];
    var email = document.forms["myForm"]["email"];
    var username = document.forms["myForm"]["username"];
    var pass1 = document.forms["myForm"]["password"];
    var pass2 = document.forms["myForm"]["password2"];
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    pass1=pass1.value;
    pass2=pass2.value;
    
    if(lastname.value=="")
    {
      alert("Fill lastname");
      document.getElementById("errormsg").innerHTML = "// erorr : Fill lastname please //";
      return false;
      
    }
    else if(gender.value=="")
    {
      alert("Fill gender");
      document.getElementById("errormsg").innerHTML = "// erorr : Fill gender please //";
      return false;
    }
    else if(bday.value=="")
    {
      alert("Fill birthday");
      document.getElementById("errormsg").innerHTML = "// erorr : Fill birthday please //";
      return false;
    }
    else if(email.value=="")
    {
      alert("Fill email");
      document.getElementById("errormsg").innerHTML = "// erorr : Fill email please //";
      return false;
    }
    else if(username.value=="")
    {
      alert("Fill username");
      document.getElementById("errormsg").innerHTML = "// erorr : username email please //";
      return false;
    }
    else if (pass1!=pass2) {
        alert("password not match");
        return false;
      }
    else if (pass1==pass2){
      alert("Pass");
    }
    
    
}

// URL parameter
// const queryString = window.location.search;
// console.log(queryString);

// const urlParams = new URLSearchParams(queryString);
// const firstname = urlParams.get('firstname')
// console.log(firstname);

// const lastname = urlParams.get('lastname')
// console.log(lastname);