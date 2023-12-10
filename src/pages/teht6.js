import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

function Teht6() {
  return (
    <div>
      <h1 className="tehtavaheader">
        Tehtävä 6 , urheilija II (REST API & React sovellus)
      </h1>
      <div className="Tehtava">
        <p>
          Kurssin toinen lopputyö tämän ePortfolion lisäksi. Piti toteuttaa
          JavaScript-palvelinsovellus, joka tarjoaa REST-rajapinnan kautta
          tiedon urheilijoista. Suunnitella ja toteuttaa express.js-kirjaston
          avulla REST-rajapinta, datan haku,lisäys, poisto ja päivitys
          mariadb-tietokantaan (Slackin mukaan myös MySQL kävi). Toteuttaa
          React:lla käyttöliittymä, jonka avulla voi lukea sekä lisätä,
          päivittää ja poistaa urheilijoita tietokantaan käyttäen vaiheen 1
          backendiä. Ottaa Bootstrap käyttöön käyttöliittymässä.
        </p>
        <p>
          Tietokannan luonti sujui oikein hyvin. Muukin osuus sujui kohtuullisen
          hyvin, mutta nyt en ole ihan varma, että missä on vika, kun mitään ei
          renderöidy näytölle. Ja jos tästä edistyn, niin joko saan errorin, tai
          pelkkää valkoista pihalle. Jätin liian vähän aikaa tämän tehtävän
          tekemiseen ja se kostautuu. Joudun tämän palauttaman sellaisessa
          kunnossa, että se ei täysin toimi. Uskon että ihan heti seuraava
          päivänä näit ei kuitenkaan tarkisteta, niin saatan tähän keritä vielä
          muutoksia ja korjauksia alkuviikosta tehdä. Mutta tässä vaiheessa
          tavoitteeni on vain saada kurssi läpi, jotta voisin ruveta töissä
          kerryttämään maisteriharjoittelun opintopisteitä. Toivon että tämä
          riittää saamaan kurssin edes läpi, tällä hetkellä se on kuitenkin se
          ainut päätavoitteeni tällä kurssilla.
        </p>
        <p>
          <br></br>
          <a href="https://github.com/EmBBuU/urheilijat" target="_blank">
            Linkki GitHubiini, tehtävään 6
          </a>
        </p>
        <h3>Tietokannan luonti -skripti:</h3>
        <pre className="Koodi">
          <SyntaxHighlighter language="sql" style={solarizedlight}>
            {`
CREATE DATABASE IF NOT EXISTS \`urheilija\`;
USE \`urheilija\`;
CREATE TABLE IF NOT EXISTS \`urheilijan_tiedot\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`etunimi\` varchar(100) NOT NULL,
  \`sukunimi\` varchar(100) NOT NULL,
  \`kutsumanimi\` varchar(100) NOT NULL,
  \`syntymapaiva\` date NULL,
  \`paino\` DECIMAL(5,2) NULL,
  \`linkki\` varchar(200) NULL,
  \`laji\` varchar(100) NULL,
  \`saavutukset\` varchar(100) NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

INSERT INTO \`urheilijan_tiedot\` (\`etunimi\`, \`sukunimi\`, \`kutsumanimi\`, \`syntymapaiva\`, \`paino\`, \`linkki\`, \`laji\`, \`saavutukset\`)
VALUES
('Matti', 'Meikäläinen', 'Masa', '1990-05-15', 75.5, 'https://fi.wikipedia.org/wiki/Grumpy_Cat#/media/Tiedosto:Grumpy_Cat_by_Gage_Skidmore.jpg', 'Juoksu', 'Kaksi maratonia voitettu'),
('Maija', 'Mallikas', 'Maiju', '1985-08-23', 62.2, 'https://fi.wikipedia.org/wiki/Grumpy_Cat#/media/Tiedosto:Grumpy_Cat_by_Gage_Skidmore.jpg', 'Uinti', 'Olympiahopea 2012'),
('Teppo', 'Testaaja', 'Tepe', '1992-02-10', 80.0, 'http://www.example.com/teppo.jpg', 'Voimaharjoittelu', 'Painonnostomestari'),
('Aino', 'Aalto', 'Ainu', '1988-11-30', 57.8, 'http://www.example.com/aino.jpg', 'Tennis', 'Grand Slam -turnauksen voittaja'),
('Jari', 'Jalkapalloilija', 'Jartsa', '1983-06-05', 70.3, 'http://www.example.com/jari.jpg', 'Jalkapallo', 'Suomen mestari');
          `}
          </SyntaxHighlighter>
        </pre>
      </div>
    </div>
  );
}
export default Teht6;
