import React from "react";

function Home() {
  return (
    <div>
      <h1 className="homeheader">
        Hei...
        <br /> &emsp; &emsp; &emsp; ja tervetuloa lukemaan web-ohjelmoinnin
        portfoliotani!
      </h1>
      <div className="Home1">
        <p>
          Tämä nettisivu on tehnyt osana web- ohjelmoinnin kurssia ja tämä on
          kurssin viimeinen tehtävä: Tehtävä 7, ePortfolio. Nimensä mukaisesti
          tavoitteena oli tehdä ikäänkuin portfolio, kurssilla tehdyistä
          tehtävistä. Jokaisesta tehtävästä löydät jonkilaisen selonteon omalta
          välilehdeltään. Yleisesti kurssin fiiliksiä voit käydä lukemassa
          HackMD:ssä.
          <br></br>
          <a href="https://hackmd.io/@EmBBuU/Sy_LbLrQs" target="_blank">
            Linkki kehittjän päiväkirjaani
          </a>
        </p>
      </div>
      <div className="Home2">
        <h1 className="feedbackheader">Palauteosio kurssista:</h1>
        <h3>
          Vertaa tietoja/taitoja lähtötilanteessa (1.9.) suhteessa tämän päivän
          tieto-/taitotasoon.
        </h3>
        <p>
          Koska olen tehnyt noin puolet Helsingin Full Stack Open -kurssista ja
          tehnyt myös jo OHTU 2 kurssin käyttäen näitä teknologioita, en voi
          sanoa taitotasoni kauheasti nouseeen. Toki paljon on asioita
          palautunut mieleen, jotka olivat jo kesän aikana unohtuneet... SQL
          tietokannan käyttö websovelluksen tietokantana tuli uutena asiana
          tällä kurssilla, koska Full Stack Open -kurssilla ja OHTU 2 käytimme
          Mongo DB:tä.
          <br></br>
          <a
            href="https://github.com/EmBBuU/OHTU_2/tree/dev_emppu"
            target="_blank"
          >
            Linkki OHTU 2 projektityöhömme
          </a>
          <br></br>
          <a href="https://github.com/EmBBuU/Full-Stack-Open" target="_blank">
            Linkki Full Stack Open -kurssin tehtäviini
          </a>
        </p>

        <h3>
          Pohdi ajankäyttöäsi suhteessa kurssin laajuuteen 5 op (= 133 tuntia
          opiskelijan työtä).
        </h3>
        <p>
          Sellainen karkeasti 50 tuntia menee jo yksinään luentoihin, niin kyllä
          näihin tehtäviin on helposti saanut kulutettua tuon 80h, varmasti sen
          ylikin. Ja kuitenkin moni asia olisi pitänyt olla tuttua ja sujua
          hyvin, mutta sitä se ei todellakaan ollut. Paljon ylimääräsitä aikaa
          meni siinä, kun yritti ymmärtää että mitä missäkin tehtävässä nyt
          oikeasti haluttiin.
        </p>

        <h3>
          Kerro mitkä asiat tukivat oppimistasi ja mitkä kenties häiritsivät
          sitä.
        </h3>
        <p>
          Koko kurssi tavallaan tuki oppimista, koska tämä meni pitkälti vanhan
          kertaamisena. Suurin häiriötekijä oli epäselvät tehtävänannot ja oman
          aikataulutuksen haasteet. Mutta on suuri voitto olla tässä vaiheessa
          tätä kurssia, koska aloitin sen jo kerran viime syksynä ja olen sitä
          yrittänyt sen jälkeen vuoden verran tehdä tuolla Full Stack Open
          -kurssilla, että olisin voinut tämän hyväksilukea. Mutta en vaan ole
          saanut aikseksi saada tätä kurssia loppuun ja tämähän on nyt enään
          ainut este minun ja kandidaatin tutkinnon välissä...
        </p>

        <h3>
          Saitko riittävästi ohjausta/apua ja tulitko kuulluksi kurssin aikana?
          Tulitko pyytäneeksi apua/keskustelleeksi kurssin asioista?
        </h3>
        <p>
          En opettajan kanssa vaihtanut viestejä. Apua pyysin kyllä kurssilla
          olleilta opiskelukavereiltani.
        </p>

        <h3>Mitkä olivat kurssin kohokohdat ja mitä jäit kaipaamaan?</h3>
        <p>
          Tehtävä 5 oli kaikienkaikkiaan hyvin ohjeistettu ja mukava toteuttaa.
          Myös "HTML ja CSS alkuun tehtävä" oli todella hyödyllinen. Toistan
          ehkä hieman itseäni, mutta kaipaamaan jäin selvempiä tehtävänantoja.
          Myös opettaja olisi voinut olla ehkä paremmin valmistatunut tuntien
          ohjaukseen, koska välillä tuntui että luennosta meni vähän liian
          paljon aikaan turhaan säätämiseen.
        </p>

        <h3>
          Muistelun oheen voit myös kirjata mahdolliset tulevaisuuden
          suunnitelmasi web-ohjelmointiin liittyen: oletko aikeissa jatkaa tämän
          aiheen parissa muilla kursseilla, itsenäisesti tai kenties tulevassa
          työssäsi.
        </h3>
        <p>
          Kyllä nämä hommat toivottavasti olivat nyt lopullisesti tässä. Data ja
          tietokanta puoli ovat se minun juttuni ja haluan panostaa niiden
          opiskeluun ja niissä kehittymiseen. Meidän maisteriopinnot sen onneksi
          suhteellisen hyvin mahdollistavat, sekä tietysti nykyinen työni junior
          data engineerinä.
        </p>
      </div>
    </div>
  );
}
export default Home;
