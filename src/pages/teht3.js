import React from "react";

function Teht3() {
  return (
    <div>
      <h1 className="tehtavaheader">Tehtävä 3, vkot 4 ja 5</h1>
      <div className="Tehtava">
        <p>
          Kehitystehtävänä on määritellä olio-ohjelmointikielille ominainen
          luokkamäärittely ja periytyminen JavaScript-kielellä.<br></br>{" "}
          Määrittele yliluokka Henkilo, joka sisältää ihmisen henkilötietoja:
          etunimet, sukunimi, kutsumanimi, syntymävuosi.
          <br></br> Määrittele luokka Urheilija, joka perii Henkilo-luokan ja
          toteuttaa lisäksi saantifunktiot (get- ja set-) Urheilija-luokalle
          merkityksellisiin attribuutteihin. <br></br>Lisää Urheilija luokkaan
          seuraavat ominaisuudet: linkki kuvaan, omapaino, laji, saavutukset.
        </p>
        <p>
          Tässä ensimmäinen ongelma todellakin oli ymmärtää, että mitä hittoa
          tässä oli tarkoitus tehdä. Kun kaveri oli vääntänyt jutun juonen
          ratakiskosta, tuntui tehtävä hieman hassulta wb-ohjelmoinnin
          kurssille. Mutta ehkä idea oli päästä tutuksi JS olioiden kanssa? En
          edelleenkään tiedä ymmärsinkö minä, ja myös kaveri, tämän tehtävän
          väärin, vai oliko tämä todella niin yksinkertainen että piti oikeasti
          vain luoda getterit ja setterit, sekä oliot. Mutta niin mie tässä
          päädyin tekemään ja jos olen ymmärtänyt tämän väärin, en varmasti ole
          ainut jolle näin on käynyt.
        </p>
        <p>
          <a
            href="https://github.com/EmBBuU/skripteja/blob/main/teht3.js"
            target="_blank"
          >
            Linkki GitHubiini, tehtävään 3
          </a>
        </p>
      </div>
    </div>
  );
}
export default Teht3;
