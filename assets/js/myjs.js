// like - deslike
var count=0;
function like(a){
	var c=document.getElementById(a);
	if(count==0)
	{
		c.setAttribute("style", "background-color:#eb1436; !important;display: inline-block;float: right;margin-top: 10px;margin-right: 10px;");
		count++;	
	}
	else{
		c.setAttribute("style", "background-color:#333; !important;display: inline-block;float: right;margin-top: 10px;margin-right: 10px;");
		count=0;
	}
}


// login validation
if(localStorage.username && localStorage.password)
{
	document.getElementById('mail').value=localStorage.username;
	document.getElementById('pwd').value=localStorage.password;
	document.getElementById("staylogin").checked = true;	
}

$('#login-btn').on("click",function(){

		var mail=document.getElementById('mail').value;
		var pwd=document.getElementById('pwd').value;
	
		if(mail=="")
		{
			$('#err_email').html('Please Enter Your Username.');
		}
		else
		{
	    	$('#err_email').html('');
	    }
		if(pwd=="")
		{
			$('#err_pwd').html('Please Enter Your Password.');
		}
		else
		{
	    	$('#err_pwd').html('');
	    }
	    if((mail!="") && (pwd!=""))
	    {
	    	var save = document.getElementById("staylogin").checked;
	  		if(save==true)
	  		{
	  			localStorage.setItem("username", mail);
	  			localStorage.setItem("password", pwd);
	  			$("#login").modal('hide');
	  		}
	  		else{
	  			document.getElementById('mail').value="";
				document.getElementById('pwd').value="";
				localStorage.removeItem("username");
				localStorage.removeItem("password");
				$("#login").modal('hide');
	  		}
	    }
});


// password show-hide

$c=0;
$('.show-pwd').click(function(){
	
	if($c==0)
	{
		$('#pwd').attr("type","text");
		$('.show-pwd').attr("class","fa fa-eye-slash show-pwd");
		$c=1;
	}else{
		$('#pwd').attr("type","password");
		$('.show-pwd').attr("class","fa fa-eye show-pwd");
		$c=0;
	}
});
	
$co=0;
$('.show-rpwd').click(function(){
	
	if($co==0)
	{
		$('#rpwd').attr("type","text");
		$('.show-rpwd').attr("class","fa fa-eye-slash show-rpwd");
		$co=1;
	}else{
		$('#rpwd').attr("type","password");
		$('.show-rpwd').attr("class","fa fa-eye show-rpwd");
		$co=0;
	}
});

$cou=0;
$('.show-rcpwd').click(function(){
	
	if($cou==0)
	{
		$('#rcpwd').attr("type","text");
		$('.show-rcpwd').attr("class","fa fa-eye-slash show-rcpwd");
		$cou=1;
	}else{
		$('#rcpwd').attr("type","password");
		$('.show-rcpwd').attr("class","fa fa-eye show-rcpwd");
		$cou=0;
	}
});

// registration validation

$('#register-btn').on("click",function(){
	var username=document.getElementById('username').value;
	var rpwd=document.getElementById('rpwd').value;
	var rcpwd=document.getElementById('rcpwd').value;
	var rmail=document.getElementById('rmail').value;
	var fname=document.getElementById('fname').value;
	var lname=document.getElementById('lname').value;
	var er_username="";
	var er_rpwd="";
	var er_rcpwd="";
	var er_rmail="";
	var er_fname="";
	var er_lname="";
	if(username=="")
	{
		er_username="Please Enter Username.";
		$('#err_username').html(er_username);

	}
	else
	{
		var usernameRegex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
		if(!usernameRegex.test(username))
		{
			er_username="Enter Minimum 8 character and 1 special character.";
			$('#err_username').html(er_username);					
		}
		else
		{
			er_username="";
    		$('#err_username').html(er_username);
		}
    }
	if(rpwd=="")
	{
		er_rpwd="Please Enter Password.";
		$('#err_rpwd').html(er_rpwd);
	}
	else
	{
		var rpwdRegex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
		if(!rpwdRegex.test(rpwd))
		{
			er_rpwd="Enter Minimum 8 character and 1 special character.";
			$('#err_rpwd').html(er_rpwd);
		}
		else
		{
			er_rpwd="";
    		$('#err_rpwd').html(er_rpwd);
		}
		
    }
    if(rcpwd=="")
	{
		er_rcpwd="Please Enter Confirm Password.";
		$('#err_rcpwd').html(er_rcpwd);
	}
	else
	{
		if(rpwd!=rcpwd)
		{
			er_rcpwd="Please Enter Valid Confirm Password.";
			$('#err_rcpwd').html(er_rcpwd);
		}
		else
		{
			er_rcpwd="";
    		$('#err_rcpwd').html(er_rcpwd);	
		}
    }
    if(rmail=="")
	{
		er_rmail="Please Enter Email.";
		$('#err_rmail').html(er_rmail);
	}
	else
	{
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!re.test(String(rmail).toLowerCase()))
		{
			er_rmail="Please Enter Valid Email.";
			$('#err_rmail').html(er_rmail);					
		}
		else{
			er_rmail="";
    		$('#err_rmail').html(er_rmail);
		}
    }
    if(fname=="")
	{
		er_fname="Please Enter First Name.";
		$('#err_fname').html(er_fname);
	}
	else
	{
		var fnameRegex = /^[a-zA-Z]+$/;
		if(!fnameRegex.test(fname))
		{
			er_fname="Enter Valid First Name.";
			$('#err_fname').html(er_fname);
		}
		else
		{
			er_fname="";
    		$('#err_fname').html(er_fname);
		}
		
    }
    if(lname=="")
	{
		er_lname="Please Enter Last Name.";
		$('#err_lname').html(er_lname);
	}
	else
	{
		var fnameRegex = /^[a-zA-Z]+$/;
		if(!fnameRegex.test(lname))
		{
			er_lname="Enter Valid Last Name.";
			$('#err_lname').html(er_lname);
		}
		else
		{
			er_lname="";
    		$('#err_lname').html(er_lname);
		}
		
    }
    
    if((er_username=="") && (er_rpwd=="") && (er_rcpwd=="") && (er_rmail=="") && (er_fname=="") && (er_lname==""))
    {
    	localStorage.setItem("username", username);
	  	localStorage.setItem("password", rcpwd);
	  	$("#register").modal('hide');
    }
});


function videoplay(a)
{
	// $(window).on('scroll',function() {
		var v=document.getElementById(a);
		v.setAttribute("style", "position:fixed;bottom:10px;right:10px;z-index:999999;height:400px;width:500px;border:none;outline:none;border-radius:10px;");
	// });
	
}

function videopause(a)
{
	var v=document.getElementById(a);
	v.removeAttribute("style");
}
