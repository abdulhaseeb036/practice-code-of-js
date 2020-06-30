// IS FUNCTION MAY HAM NY HTML MAY AIK PARAGRAPH LIYA US KO ID DE INTRO KI 
// US K ANDAR ADHA PARA LIKHA PURA NHI LIKHA OR LAST MAY PARA K HAM NY AIK
// LINK BNA DIA VIEW MORE K . US LINK PR VIE K YE FUNCTION CALL KRWADIA.
// JS K FUNCTION MAY HAM NY VE K VARIABLE MAY HAMARA JO FULL PARAGRAPH THA.
// WO RAKH WADIA APP HM NY KRNA YE HY K HTML WLY PARA KO GET KRNA HY .
// TU SECOND LINE MAY JS K FUNCTION MAY HAM NY INTRO VAR K ANDAR US HTML
// K PARA KO GET KRLIA. PHIT NEXT LINE MAY US HTML K PERA KO INTRO.INNERHTML
// KO VE JO PURA PARA HY US K EQUALS RKH WADIA AP ON CLICK MAY PURA PERA KULAY
// GA VE VARIABLE K ANDAR JO HY .
function vie(){
    var ve = "haseeeb alam rafiq is an good peronality person <ul><li><a href='index.html'>haseebs full intro</a></li><li><a href='index.html'>life style haseeb's</a></li><ul>";
    var intro = document.getElementById("intro");
    intro.innerHTML = ve;
}

function foo(id , src){
    var img = document.getElementById(id);
    img.src =src;

}

// ye tag name sy get krta hy or us ko style deta hy background k upper 
// or ye index may save krta hy html may jitny bhi paragraph hon gay 
// un ko indexes may save krdey ga phir aap index sy us k index get kr k 
// design save krdeta hy . agr sary index pr aaply krna hu to for loop
// sy krlo.
    var ex = document.getElementsByTagName("p");
    ex[2].style.backgroundColor = 'blue';



