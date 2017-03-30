
	var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i = 0;
  var slides = document.getElementsByClassName('jadiimgslide');
  var dots = document.getElementsByClassName('kelasimg');
  var doss = document.getElementsByClassName('isiimg');
  var hanyasatu = document.getElementsByClassName('imgctr')
  var captionKecil = document.getElementById('capketkecil');
  if (n > slides.length) {slideIndex = 1} <!--membalik slide ke awal -->
  if (n < 1) {slideIndex = slides.length} <!--nomor slide ke terakhir -->
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
  }
  for (i = 0; i < doss.length; i++) {
      doss[i].className = doss[i].className.replace(' actives', '');
  }
  for (i = 0; i < hanyasatu.length; i++) {
	  hanyasatu[i].className = hanyasatu[i].className.replace(' satusatunya', '');
  }
  
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
  doss[slideIndex-1].className += ' actives';
  hanyasatu[slideIndex-1].className += ' satusatunya';
  captionKecil.innerHTML = dots[slideIndex-1].alt;
}

var indeksGam = 1;

function perBesarGambar(d) {
besarkanGambar(indeksGam = d);}
function besarkanGambar(d){
  var bkingambes = document.getElementById('perbesgam');
  var imge = document.getElementsByClassName('imgctr');
  var modgambar = document.getElementById('tampilbesar');
  var modketerangan = document.getElementById('ketgambesar');
  if (d > imge.length) {indeksGam = 1}
  if (d < 1) {indeksGam = imge.length} 
    bkingambes.style.display = 'block';
    modgambar.src = imge[indeksGam -1].src;
    modketerangan.innerHTML = imge[indeksGam -1].alt;
	var span = document.getElementsByClassName('ttup')[0];
	span.onclick = function tutupGambarbesar() {
    bkingambes.style.display = 'none';}
}
