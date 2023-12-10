import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

function Teht12() {
  const codeString = `
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function käännäMerkkijono(sana) {
  let käännös = "";
  for (let i = sana.length - 1; i >= 0; i--) {
    käännös += sana[i];
  }
  return käännös;
}

rl.question("Syötä sana: ", (sana) => {
  const käännös = käännäMerkkijono(sana);

  if (sana === käännös) {
    console.log("Sana on palindromi!");
  } else {
    console.log("Sana ei ole palindromi.");
  }

  rl.close();
});`;

  const codeString2 = `
// alustetaan puhelinluettelo
const phoneBook = [];

// syötteen lukeminen
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// lisätään henkilö
function addPerson(name, phoneNumber) {
  phoneBook.push({ name, phoneNumber });
}

// etsitään henkilö
function phoneNumberLookup(table, name) {
  for (const entry of table) {
    if (entry.name === name) {
      return entry.phoneNumber;
    }
  }
  return "Numeroa ei löytynyt.";
}

// toiminallisuus
function promptUser() {
  rl.question(
    "Paina 1, jos haluat lisätä henkilön, Paina 2 etsiäksesi numero tai Paina 3 poistuaksesi: ",
    (choice) => {
      if (choice === "1") {
        rl.question("Nimi: ", (name) => {
          rl.question("Numero: ", (phoneNumber) => {
            addPerson(name, phoneNumber);
            promptUser();
          });
        });
      } else if (choice === "2") {
        rl.question("Etsi nimellä: ", (name) => {
          const result = phoneNumberLookup(phoneBook, name);
          promptUser();
        });
      } else if (choice === "3") {
        rl.close();
      } else {
        console.log("Error. Paina 1, 2, tai 3.");
        promptUser();
      }
    }
  );
}

promptUser();

`;

  return (
    <div>
      <h1 className="tehtavaheader">
        Javascript -perusteet, teht 1. & teht 2.
      </h1>
      <div className="Tehtava">
        <p>
          Tehtävässä 1 piti tehdä sovellus, joka kysyy syötettävän sanan ja
          tarkistaa onko sana palindromi ts. sana on sama toisinpäin.
          <br></br>
          Pientä alkuvaikeutta tehtävän kanssa oli, sillä Full Stackin aikana
          tottui tekemään tietynlaisia tehtäviä JavaScriptillä ja heti suoraan
          Create React Appilla, joten oli yllättävän haastavaa päästä kärryille
          konsolipohjaisesta tekemisestä! Paljon muuta en tämän tehtävän
          tekemisestä enään muistakaan.
        </p>
        <p>
          <a
            href="https://github.com/EmBBuU/skripteja/blob/main/teht1.js"
            target="_blank"
          >
            Linkki GitHubiini, tehtävään 1
          </a>
        </p>
        <h3>Tehtävä 1 koodi:</h3>
        <pre className="Koodi">
          <SyntaxHighlighter language="javascript" style={solarizedlight}>
            {codeString}
          </SyntaxHighlighter>
        </pre>
        <p>
          Tehtävässä 2 piti tehdä puhelinluettelo, jossa hakutoiminto hakee
          nimen perusteella puhelinnumeron.
          <br></br>
          Pientä alkuvaikeutta oli vielä tässäkin tehtävässä. Toki osa itse
          aiheutteua vaikeutta, kun yritin hyötykäyttää samantyylistä tekemääni
          tehtävää, Full Stack Open kurssilta. Mutta se oli tehty hieman
          “vaikeammin” ja loppuenlopuksi se vain sekoitti omaa tekemistä. Tässä
          piti myös hieman pyytää opiskelukaverilta apuja, sillä piti myöntää,
          että kesä ja harjoittelu datahommien parissa, oli onnistuneesti
          pyyhkinyt oman muistini tästä aihealueesta suhteellisen lahjakkasti :D
        </p>
        <p>
          <a
            href="https://github.com/EmBBuU/skripteja/blob/main/teht2.js"
            target="_blank"
          >
            Linkki GitHubiini, tehtävään 2
          </a>
        </p>
        <h3>Tehtävä 2 koodi:</h3>
        <pre className="Koodi">
          <SyntaxHighlighter language="javascript" style={solarizedlight}>
            {codeString2}
          </SyntaxHighlighter>
        </pre>
        <p>
          Olisin voinut ehkä uhrata enemmän aikaa näiden asioiden opiskeluun,
          mutta ne tuntuivat niin turhilta kun olin jo tehnyt "edistyneemmän"
          tason juttuja ohjelmistotuotannon kurssilla, sekä siellä Full Stack
          Open -kurssilla. Mutta yleensä se ruohonjuuritason tekeminen pitäisi
          ensimmmäisenä olla kunnossa. Onnistuin mielestäni näissä tehtävissä
          kuitenkin loppuenlopuksi oikein hyvin ja sain ne valmiiksi, pienellä
          avustuksella.
        </p>
      </div>
    </div>
  );
}

export default Teht12;
