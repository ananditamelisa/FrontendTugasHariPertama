var counter = 0;
imageSlider();

function validate(){
	var name = document.getElementById('inputName').value;
	var email = document.getElementById('inputEmail').value;
	var phone = document.getElementById('inputPhone').value;
	var address = document.getElementById('inputAddress').value;
	var password = document.getElementById('inputPassword').value;
	if(name == "" || email == "" || phone == "" || address == "" || password == ""){
		alert('All Field Must be Filled');
		return false;
	}else if(name.length>30 || name.length<5){
		alert('Name must be between 5-30');
		return false;
	}else if(isNaN(phone)){
		alert('Phone must be in number format');
		return false;
	}else if(!address.endsWith('Street')){
		alert('Address must ends with Street');
		return false;
	}else if(!email.endsWith('.com')){
		alert('Email must be an email format')
	}else{
		alert('Register Success\n' + name + '\n' + phone + '\n' + address + '\n' + email);
	}
}



function imageSlider() {
    var pic = document.getElementsByClassName("slides");
    for (var i = 0; i < pic.length; i++) {
       pic[i].style.display = "none";  
    }
    counter++;
    if (counter > pic.length) {counter = 1}    
    pic[counter-1].style.display = "block";  
    setTimeout(imageSlider, 2000);
}	