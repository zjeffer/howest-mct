"use strict";

const toonBestemmingen = function(jsonObject) {
    console.log(jsonObject);
    let htmlstring = `<table border="1" width="100%"><tr><th>FNaam</th><th>VNaam</th><th>Straat</th><th>Nummer</th><th>Postcode</th><th>Gemeente</th><th>verwijderen</th></tr>`;
    for (let klant of jsonObject) {
        htmlstring += `<tr><td>${klant.FNaam}</td><td>${klant.VNaam}</td><td>${klant.Straat}</td><td>${klant.Nummer}</td><td>${klant.Postcode}</td><td>${klant.Gemeente}</td></tr>`;
    }
    htmlstring += `</table>`;
    document.querySelector(".js-klanten").innerHTML = htmlstring;
};

const toonFout = function(response) {
    document.querySelector(".js-klanten").innerHTML = "Er is een fout opgetreden";
};

const init = function() {
    console.info("Toont alle klanten");
    handleData("http://localhost:5000/api/v1/klanten", toonBestemmingen, toonFout);
};

document.addEventListener("DOMContentLoaded", function() {
    console.info("DOM geladen");
    init();
});
