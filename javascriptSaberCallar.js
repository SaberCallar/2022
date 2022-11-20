//Make coming soon message appear when future editions are clicked
function comingsoon() {
	alert("Edition coming soon");
}

//Make disclaimer statement when click on navbar link "Disclaimer"
function disclaimer() {
	alert("The purpose of this website is to explore various types of typographic and layout styles for text documents, as an end-of-course project for the Information Modelling and Web Technologies module of the Masters Degree in Digital Humanities and Digital Knowledge at the University of Bologna, 2021-22, taught by Professor Fabio Vitali.\nThe documents contained in this web site have been selected for their length and complexity. Their publication here is not intended to be an alternative to, or to replace, their original locations, all of which are highlighted in the project's documentation.\nAll copyrights and related rights on the content remain with their original owners. All copyright on the typographic and layout choices are 2022 © Saber Callar");
}

//Scroll up button functions
window.onscroll = () => {
  toggleTopButton();
}
function scrollToTop(){
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleTopButton() {
  if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
    document.getElementById('back-to-up').classList.remove('d-none');
  } else {
    document.getElementById('back-to-up').classList.add('d-none');
  }
}


//Swapping CSS themes
// When the CSS theme is changed save a key-value pair in localStorage
function CSSSwap(csspath) {
	document.getElementById('CurrentCSS').setAttribute('href', csspath);
	localStorage.setItem('href', csspath);
}

// Save the CSS theme and make sure it's consistent while browsing the site
//Save the starting style as a variable as soon as we load a page of the site
//Check value of the variable and change the href of the page to be consistent
$(document).ready(function () {
	var initialStyle = localStorage.getItem('href');
	switch (initialStyle) {
    case 'VogueCSS.css':
      document.getElementById('CurrentCSS').setAttribute('href', 'VogueCSS.css');
      break;
    case 'MondrianCSS.css':
      document.getElementById('CurrentCSS').setAttribute('href', 'MondrianCSS.css');
      break;
	}
})
	
	
	
	
//EDITION 1: BORGES


//BIBLIOTECA DE BABEL

//Show just the English text of the story
//If in bilingual mode, hide Spanish text and expand width
function showEnglishBB() {
	$('#BBEnglish').css('display', 'block')
	$('#BBSpanish').css('display', 'none')
	$('#BBEnglish').removeClass('col-md-6')
	$('#BBEnglish').addClass('col-md-12')
}

//Show just the Spanish text of the story
//If in bilingual mode, hide English text and expand width
function showSpanishBB() {
	$('#BBSpanish').css('display', 'block')
	$('#BBEnglish').css('display', 'none')
	$('#BBSpanish').removeClass('col-md-6')
	$('#BBSpanish').addClass('col-md-12')
}

//Show English and Spanish side-by-side
//Allow each language to occupy half the space
function showBilingualBB() {
	$('#BBSpanish').css('display', 'block')
	$('#BBEnglish').css('display', 'block')
	$('#BBEnglish').removeClass('col-md-12')
	$('#BBSpanish').removeClass('col-md-12')
	$('#BBEnglish').addClass('col-md-6')
	$('#BBSpanish').addClass('col-md-6')
} 


//PIERRE MENARD

//Show just the English text of the story
//If in bilingual mode, hide Spanish text and expand width
function showEnglishPM() {
	$('#PMEnglish').css('display', 'block')
	$('#PMSpanish').css('display', 'none')
	$('#PMEnglish').removeClass('col-md-6')
	$('#PMEnglish').addClass('col-md-12')
}

//Show just the Spanish text of the story
//If in bilingual mode, hide English text and expand width
function showSpanishPM() {
	$('#PMSpanish').css('display', 'block')
	$('#PMEnglish').css('display', 'none')
	$('#PMSpanish').removeClass('col-md-6')
	$('#PMSpanish').addClass('col-md-12')
}

//Show English and Spanish side-by-side
//Allow each language to occupy half the space
function showBilingualPM() {
	$('#PMSpanish').css('display', 'block')
	$('#PMEnglish').css('display', 'block')
	$('#PMEnglish').removeClass('col-md-12')
	$('#PMSpanish').removeClass('col-md-12')
	$('#PMEnglish').addClass('col-md-6')
	$('#PMSpanish').addClass('col-md-6')
} 


//JARDÍN DE SENDEROS

//Show just the English text of the story
//If in bilingual mode, hide Spanish text and expand width
function showEnglishJS() {
	$('#JSEnglish').css('display', 'block')
	$('#JSSpanish').css('display', 'none')
	$('#JSEnglish').removeClass('col-md-6')
	$('#JSEnglish').addClass('col-md-12')
}

//Show just the Spanish text of the story
//If in bilingual mode, hide English text and expand width
function showSpanishJS() {
	$('#JSSpanish').css('display', 'block')
	$('#JSEnglish').css('display', 'none')
	$('#JSSpanish').removeClass('col-md-6')
	$('#JSSpanish').addClass('col-md-12')
}

//Show English and Spanish side-by-side
//Allow each language to occupy half the space
function showBilingualJS() {
	$('#JSSpanish').css('display', 'block')
	$('#JSEnglish').css('display', 'block')
	$('#JSEnglish').removeClass('col-md-12')
	$('#JSSpanish').removeClass('col-md-12')
	$('#JSEnglish').addClass('col-md-6')
	$('#JSSpanish').addClass('col-md-6')
} 


//EDITION 2: CERVANTES


//RINCONETE Y CORTADILLO

//Show just the English text of the story
//If in bilingual mode, hide Spanish text and expand width
function showEnglishRC() {
	$('#RCEnglish').css('display', 'block')
	$('#RCSpanish').css('display', 'none')
	$('#RCEnglish').removeClass('col-md-6')
	$('#RCEnglish').addClass('col-md-12')
}

//Show just the Spanish text of the story
//If in bilingual mode, hide English text and expand width
function showSpanishRC() {
	$('#RCSpanish').css('display', 'block')
	$('#RCEnglish').css('display', 'none')
	$('#RCSpanish').removeClass('col-md-6')
	$('#RCSpanish').addClass('col-md-12')
}

//Show English and Spanish side-by-side
//Allow each language to occupy half the space
function showBilingualRC() {
	$('#RCSpanish').css('display', 'block')
	$('#RCEnglish').css('display', 'block')
	$('#RCEnglish').removeClass('col-md-12')
	$('#RCSpanish').removeClass('col-md-12')
	$('#RCEnglish').addClass('col-md-6')
	$('#RCSpanish').addClass('col-md-6')
} 


//LA FUERZA DE LA SANGRE

//Show just the English text of the story
//If in bilingual mode, hide Spanish text and expand width
function showEnglishFS() {
	$('#FSEnglish').css('display', 'block')
	$('#FSSpanish').css('display', 'none')
	$('#FSEnglish').removeClass('col-md-6')
	$('#FSEnglish').addClass('col-md-12')
}

//Show just the Spanish text of the story
//If in bilingual mode, hide English text and expand width
function showSpanishFS() {
	$('#FSSpanish').css('display', 'block')
	$('#FSEnglish').css('display', 'none')
	$('#FSSpanish').removeClass('col-md-6')
	$('#FSSpanish').addClass('col-md-12')
}

//Show English and Spanish side-by-side
//Allow each language to occupy half the space
function showBilingualFS() {
	$('#FSSpanish').css('display', 'block')
	$('#FSEnglish').css('display', 'block')
	$('#FSEnglish').removeClass('col-md-12')
	$('#FSSpanish').removeClass('col-md-12')
	$('#FSEnglish').addClass('col-md-6')
	$('#FSSpanish').addClass('col-md-6')
} 


//EL LICENCIADO VIDRIERA

//Show just the English text of the story
//If in bilingual mode, hide Spanish text and expand width
function showEnglishLV() {
	$('#LVEnglish').css('display', 'block')
	$('#LVSpanish').css('display', 'none')
	$('#LVEnglish').removeClass('col-md-6')
	$('#LVEnglish').addClass('col-md-12')
}

//Show just the Spanish text of the story
//If in bilingual mode, hide English text and expand width
function showSpanishLV() {
	$('#LVSpanish').css('display', 'block')
	$('#LVEnglish').css('display', 'none')
	$('#LVSpanish').removeClass('col-md-6')
	$('#LVSpanish').addClass('col-md-12')
}

//Show English and Spanish side-by-side
//Allow each language to occupy half the space
function showBilingualLV() {
	$('#LVSpanish').css('display', 'block')
	$('#LVEnglish').css('display', 'block')
	$('#LVEnglish').removeClass('col-md-12')
	$('#LVSpanish').removeClass('col-md-12')
	$('#LVEnglish').addClass('col-md-6')
	$('#LVSpanish').addClass('col-md-6')
} 