
var nizNav=[["Home","index.html"],["Explore","#explorew"],["Shop","#shop"],["Contact","#contact"]];
var nizDiv=[["Arabica <i class='fas fa-flask'></i> "," <span> Coffea arabica </span>, also known as the Arabian coffee,coffee shrub of Arabia,mountain coffee or arabica coffee, is a species of Coffea. It is believed to be the first species of coffee to be cultivated, and is the dominant cultivar, representing about 60% of global production. Coffee produced from the (less acidic, more bitter, and more highly caffeinated) robusta bean makes up most of the remaining coffee production. Arabica coffee was first found in Yemen and documented by the 12th century. Coffea arabica is called būna in Arabic."],["Robusta <i class='fas fa-flask'></i>","Robusta originated in central and western sub-Saharan Africa. It is the second most popular coffee in the world, making up 40% of the worlds coffee production.Robusta coffee tastes earthy and is often said to have a bitter, rubbery/grain-like flavor, with a peanutty aftertaste.Robusta coffee beans contain more caffeine and less sugar than arabica beans, and therefore taste stronger and harsher than arabica."],["Liberica <i class='fas fa-flask'></i>","Coffea liberica (or Liberian coffee) is a species of flowering plant in the family Rubiaceae from which coffee is produced. It is native to western and central Africa from Liberia to Uganda and Angola, and has become naturalized in the Philippines, Indonesia, Seychelles, the Andaman & Nicobar Islands, French Polynesia, Central America, the West Indies, Venezuela, Colombia, Malaysia and Brazil."]]
var navigacija=document.getElementById("navigacija");
var nav="<ul class='lista'>";
for(let i=0;i<nizNav.length;i++){
    nav+=`<li class='linkLI'> <a class='linkA'href='${nizNav[i][1]}'> ${nizNav[i][0]}</a></li>`;
}
nav+="</ul>";
navigacija.innerHTML=nav;
var blokovi=document.getElementById("blokovi");
var blokcici="";
for(var x=0;x<nizDiv.length;x++){
    blokcici+="<div class='blokcic'> <h3 class='bn'><a class='a' href='#'>"  + nizDiv[x][0] + "</a></h3>" + "<p class='kafe'>" + nizDiv[x][1] + "</p>" + "</div>";
}
blokovi.innerHTML=blokcici;


document.getElementById("skriveni").style.display="none";
document.getElementById("prikaz").addEventListener('click',function(){
if(document.getElementById("skriveni").style.display=="block"){
    document.getElementById("skriveni").style.display="none";
    document.getElementById("prikaz").innerHTML="Show more";
}
else{
    document.getElementById("skriveni").style.display="block"
    document.getElementById("prikaz").innerHTML="Show less";
}
});

document.getElementById("kontaktiraj").addEventListener('click',function(){
alert("0641234567");


});
window.addEventListener("load",function(){
    document.getElementById("greska1").innerHTML="*";
    document.getElementById("greska2").innerHTML="*";
    document.getElementById("greska3").innerHTML="*";
    document.getElementById("greska4").innerHTML="*";
    document.getElementById("greska5").innerHTML="*";
    document.getElementById("greska7").innerHTML="*";
    });
    window.addEventListener("load",function(){
        slajder();
        function slajder() {
            if(document.getElementById('naslov').innerHTML=="Please register!")
            {document.getElementById('naslov').innerHTML="Thank you!"}
       
        else {document.getElementById('naslov').innerHTML="Please register!"};
        setTimeout(slajder,3000);
    }
        
    });
    document.getElementById("taster").addEventListener("click",function(){
        var x=document.getElementById("username").value;
        var y=document.getElementById("password").value;
        var z=document.getElementById("plozinka").value;
        var n=document.getElementById("imejl").value;
        var p=document.getElementById("ime2").value;
        var RegExUsername=/^[A-z0-9\_\-]{3,16}$/
        var RegExPassword=/^[\w\d]{3,}$/
     
        var RegExEmail=/^[\w][\w\d\-\.\_]{2,10}@[\w][\w\d\-\.\_]+[\w]{2,4}$/
        if(RegExUsername.test(x)){
            document.getElementById("greska1").innerHTML=""
        }
        else{document.getElementById("greska1").innerHTML=" * Incorrect Username"}
        if(RegExEmail.test(n)){
            document.getElementById("greska4").innerHTML=""
        }
        else{document.getElementById("greska4").innerHTML=" * Incorrect email adress"} 
    
        if(RegExPassword.test(y)){
            document.getElementById("greska2").innerHTML=""
        }
        else{document.getElementById("greska2").innerHTML=" * Incorrect password"} 
        if(y==z)    {
            document.getElementById("greska3").innerHTML="";
        } 
        else{ document.getElementById("greska3").innerHTML=" * Password and confirm password are not the same,please try again"}
        if(document.getElementById("c1").checked)
        {document.getElementById("greska7").innerHTML=""}
        else{document.getElementById("greska7").innerHTML=" * You have to checked that you agree"}
        var svi=document.getElementsByClassName("rgroup");
        var cekiranRadioTaster="";
        for( var i=0;i<svi.length;i++)
        if(svi[i].checked)
        {cekiranRadioTaster=svi[i].value
        break}
        if (cekiranRadioTaster=="")
        {document.getElementById("greska5").innerHTML=" * You must checked the gender"}
        else { document.getElementById("greska5").innerHTML=""}
        if(p<5)
        {document.getElementById("greska6").innerHTML=" * You must have more then 5 caracters,try again"}
        
        else{document.getElementById("greska6").innerHTML=""}
    
    });

    //JQ
    $(document).ready(function(){
        $('#tabela tbody tr:even').css('background-color','#dddddd');
      });
    $("#spec").html("Coffe specialties:");

    $(document).ready(function(){
        slideShow();
      });
      
      function slideShow() {
        var current = $('#slike .show');
        var next = current.next().length ? current.next() : current.parent().children(':first');
        
        current.hide().removeClass('show');
        next.fadeIn().addClass('show');
        
        setTimeout(slideShow, 3000);
      }

      $(document).ready(function(){
        $('#menu li').hover(function() {
          $(this)
            .find('ul')
           .slideDown('fast');
        }, function() {
          $(this)
            .find('ul')
            .fadeOut('fast');
        });
      });
      


    
     

   