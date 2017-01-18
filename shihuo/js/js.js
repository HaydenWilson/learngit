

function show1(){
	var oDiv=document.getElementById("two_dimension");
	var up1=document.getElementById("up1");
	
	var oDiv1=document.getElementById("more_01");
	var show1=document.getElementById("show_2");
	
	var oDiv2=document.getElementById("more_02");
	var show3=document.getElementById("show_3");
	
	up1.onmouseover=function(){
		oDiv.style.display="block";
	}
	
	oDiv1.onmouseover=function(){
		show1.style.display="block";
		
		oDiv1.className="none";
	}
	show1.onmouseover=function(){
		show1.style.display="block";
	}
	
	oDiv2.onmouseover=function(){
		show3.style.display="block";
	}
	show3.onmouseover=function(){
		show3.style.display="block";
		
	}
	
}

function hidd(){
	var oDiv=document.getElementById("two_dimension");
	var up1=document.getElementById("up1");
	
	var oDiv1=document.getElementById("more_01");
	var show1=document.getElementById("show_2");
	
	var oDiv2=document.getElementById("more_02");
	var show3=document.getElementById("show_3");
	
	up1.onmouseout=function(){
		oDiv.style.display="none";
	}
	
	oDiv1.onmouseleave=function(){
		show1.style.display="none";
	}
	show1.onmouseleave=function(){
		show1.style.display="none";
	}
	
	oDiv2.onmouseout=function(){
		show3.style.display="none";
	}
	show3.onmouseout=function(){
		show3.style.display="none";
	}
	
	
}


function closeOne(){
	var oDiv=document.getElementById("clear_01");
	var oPhoto=document.getElementById("fixed_01");

	oDiv.onclick=function(){
		oPhoto.style.display="none";
	}
}
