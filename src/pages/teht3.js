import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

function Teht3() {
  const codeString = `
    // Luodaan Henkilo-luokka
    class Henkilo {
      constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
        this.etunimet = etunimet;
        this.sukunimi = sukunimi;
        this.kutsumanimi = kutsumanimi;
        this.syntymavuosi = syntymavuosi;
      }
    }
    
    // Luodaan Urheilija-luokka, joka perii Henkilo-luokan
    class Urheilija extends Henkilo {
      constructor(
        etunimet,
        sukunimi,
        kutsumanimi,
        syntymavuosi,
        linkkiKuvaan,
        omapaino,
        laji,
        saavutukset
      ) {
        super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
        this.linkkiKuvaan = linkkiKuvaan;
        this.omapaino = omapaino;
        this.laji = laji;
        this.saavutukset = saavutukset;
      }
    
      // Getterit ja setterit saantifunktioiden määrittämiseksi
      getLinkkiKuvaan() {
        return this.linkkiKuvaan;
      }
    
      setLinkkiKuvaan(linkkiKuvaan) {
        this.linkkiKuvaan = linkkiKuvaan;
      }
    
      getOmaPaino() {
        return this.omapaino;
      }
    
      setOmaPaino(omapaino) {
        this.omapaino = omapaino;
      }
    
      getLaji() {
        return this.laji;
      }
    
      setLaji(laji) {
        this.laji = laji;
      }
    
      getSaavutukset() {
        return this.saavutukset;
      }
    
      setSaavutukset(saavutukset) {
        this.saavutukset = saavutukset;
      }
    }
    
    // Esimerkkejä Urheilija-olioista
    const urheilija1 = new Urheilija(
      "Matti",
      "Meikäläinen",
      "Masa",
      1990,
      "https://esimerkkikuva.com/masa",
      80,
      "Juoksu",
      ["Kultamitali 100m", "Hopeamitali 200m"]
    );
    const urheilija2 = new Urheilija(
      "Liisa",
      "Lätkä",
      "Lissu",
      1985,
      "https://esimerkkikuva.com/lissu",
      65,
      "Jalkapallo",
      ["SM-kulta", "Maailmanmestaruus"]
    );
    const urheilija3 = new Urheilija(
      "Eero",
      "Einstein",
      "Eki",
      2000,
      "https://esimerkkikuva.com/eki",
      70,
      "Uinti",
      ["Kansallinen ennätys"]
    );
    
    // Tulostetaan Urheilija-olioiden tiedot konsoliin
    console.table([urheilija1, urheilija2, urheilija3]);
`;

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
        <h3>Tehtävä 3 koodi:</h3>
        <pre className="Koodi">
          <SyntaxHighlighter language="javascript" style={solarizedlight}>
            {codeString}
          </SyntaxHighlighter>
        </pre>
      </div>
    </div>
  );
}
export default Teht3;
