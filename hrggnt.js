
function bukaTabed(aks, namaTabed) {
    var i, isitabed, tunjuktabed;
    isitabed = document.getElementsByClassName('isitabed');
    for (i = 0; i < isitabed.length; i++) {
        isitabed[i].style.display = 'none';
    }
    tunjuktabed = document.getElementsByClassName('tunjuktabed');
    for (i = 0; i < tunjuktabed.length; i++) {
        tunjuktabed[i].className = tunjuktabed[i].className.replace(' terbuka', '');
    }
    document.getElementById(namaTabed).style.display = 'block';
    aks.currentTarget.className += ' terbuka';
}

function gntHrg(){
	
	//ambl hrg


var strdoc = document.getElementsByClassName("getvarprod");
var nilai = strdoc.length;
var i = 0;
for ( i = 0; i < nilai ; i++) {
var strd = strdoc[i].innerHTML; 
var cekharga = strd.includes(">price_");
if (cekharga == true) {
	var vps = strd.search(">price_") + 7;
	var vpe = strd.indexOf("$",vps);
	var pricing = strd.substring(vps,vpe);
	var terbanyak = pricing.length;
    if (terbanyak > 3){
	var harga;
    var azero;
    var bzero;
    var czero;
    var zero;
    var ribu;
    var juta;
    var miliar;
    switch(terbanyak) {
        case 4:
        case 5:
        case 6:
        	azero = terbanyak - 3 ;
        	zero = pricing.substring( azero , terbanyak);
			ribu = pricing.substring( 0 , azero );
        	harga = ribu + "." + zero ;    
        break;
        case 7:
        case 8:
        case 9:
        	azero = terbanyak - 3 ;
            bzero = terbanyak - 6 ;
        	zero = pricing.substring( azero , terbanyak);
			ribu = pricing.substring( bzero , azero );
            juta = pricing.substring( 0 , bzero );
        	harga = juta + "." + ribu + "." + zero ;
        break;
        case 10:
        case 11:
        case 12:
        	azero = terbanyak - 3 ;
            bzero = terbanyak - 6 ;
            czero = terbanyak - 9 ;
        	zero = pricing.substring( azero , terbanyak);
			ribu = pricing.substring( bzero , azero );
            juta = pricing.substring( czero , bzero );
            miliar = pricing.substring ( 0 , czero);
        	harga = miliar + "." + juta + "." + ribu + "." + zero ;
        break;
      default:
	  harga = "-";
    }
    }
    else {
    harga = pricing;
    }
	}
else {
	var harga = "-";
}
document.getElementsByClassName("getharga")[i].innerHTML = harga;
}
	
//ambil images

var i;
var amb = document.getElementById("informasi");
var gambar = amb.getElementsByTagName("IMG");
var jmltag = gambar.length;
var tobung = document.getElementById("inpgmb");
var tobungm = document.getElementById("imgminiside");

for (i = 0; i < jmltag; i++) {
	var bung = document.createElement("DIV");
	var gamb = document.createElement("IMG");
	var sbisi = document.createElement("DIV");
	var isimg = document.createElement("DIV");
	var mgkls = document.createElement ("IMG");
	
	bung.setAttribute("class","jadiimgslide");
	gamb.setAttribute("class","imgctr");
	gamb.setAttribute("style","width:100%");
	bung.appendChild(gamb);
	gamb.src = gambar[i].src;
	gamb.alt = gambar[i].alt;
	var tingg = gambar[i].height;
	var lebbb = gambar[i].width;
	
	var u = i + 1;
	var nom = "perBesarGambar(" + u + ")";
	gamb.setAttribute("onclick",nom);
	tobung.insertBefore(bung, tobung.childNodes[i]);
	
	sbisi.setAttribute("class","sbisiimg");
	isimg.setAttribute("class","isiimg");
	var nomfunc = "currentSlide(" + u + ")";
	isimg.setAttribute("onclick",nomfunc);
	mgkls.src = gambar[i].src;
	isimg.appendChild(mgkls);
	sbisi.appendChild(isimg);

	
	if ( lebbb < tingg) {
	mgkls.setAttribute("class","ihori kelasimg");
	}
	else {
	mgkls.setAttribute("class","ivert kelasimg");
	}
	tobungm.insertBefore( sbisi , tobungm.childNodes[i]);
}
tobung.getElementsByTagName("div")[0].setAttribute("style","display:block;");
tobungm.getElementsByTagName("div")[0].firstChild.classList.add("actives");
tobungm.getElementsByTagName("img")[0].classList.add("active");

for (rk = 0; rk < jmltag; rk++) {
	var linkgam = gambar[0].parentElement;
	var chillink = linkgam.parentElement;
	chillink.removeChild(linkgam);
}	

}