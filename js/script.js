

function menubtn() {
 	var x = document.getElementById('menu');
	 if( x.style.visibility == "hidden") { 
    x.style.visibility = "visible";
  	}
	
  	else { 
    x.style.visibility = "hidden";
    }
}

function show(x){
	
 document.getElementById("img").style.display="none";
 document.getElementById("frm").style.display="none";
 document.getElementById("abt").style.display="none";
 document.getElementById(x).style.display="block";	
	

	}