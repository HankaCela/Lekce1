// Délka filmu v minutách
const delkaFilmuMinuty = 223;
const hodiny = Math.floor(delkaFilmuMinuty / 60);
const minuty = delkaFilmuMinuty % 60; 

document.body.innerHTML += "<h1>Délka filmu</h1>" +
                          "<p>Film Pán prstenů: Dvě věže trvá " + hodiny + " hodin a " + minuty + " minut.</p>";


// Výplata, Hodinová mzda v Kč
const mzdaHodina = 320;
const hodinyDen = 7;
const dnyMesic = 21;
const mesicniPrijem = mzdaHodina * hodinyDen * dnyMesic;
const pausal = 0.60; 
const zdanitelnyPrijem = mesicniPrijem * (1 - pausal); 
const dan = Math.floor(zdanitelnyPrijem * 0.15);

let vystup = "<h1>Výpočet výplaty</h1>" +
             "<p>Měsíční příjem: " + mesicniPrijem + " Kč</p>" +
             "<p>Daň po odečtení paušálu: " + dan + " Kč</p>";
             

// Email, Sestavení e-mailové adresy
const jmeno = "Hana"; 
const prijmeni = "Cela";  
const domena = "@mujmail.com";
const email = jmeno.toLowerCase() + "." + prijmeni.toLowerCase() + domena.toLowerCase();

vystup += "<h1>E-mailová adresa</h2>" +
          "<p>Vaše e-mailová adresa je: " + email + "</p>";  
        document.body.innerHTML += vystup;
 
// Ultramaratom  
const start = 15; 
const delka = 12;
let konec = (start + delka) % 24;

document.body.innerHTML += "<h1>Výpočet konce závodu</h1>" +
"<p>Závod skončí v " + konec + ":00 hodin.</p>"

//Nahodna čísla
const nahodneCislo = Math.random();
document.body.innerHTML += "<h1>Náhodné číslo</h1>" +
                                  "<p>Vaše náhodné číslo: " + nahodneCislo + "</p>";
                          
// Převod měny
 const wageInEur = 20;

 const exchangeRate = 24.55;

 const wageInCzk = Math.round(wageInEur * exchangeRate);

 document.body.innerHTML += "<h1>Mzda v korunách: " + wageInCzk + " Kč</h1>"
