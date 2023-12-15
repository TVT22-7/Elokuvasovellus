# Elokuvasovellus
Postman dokumentaatio : https://documenter.getpostman.com/view/25682305/2s9YkkfNmC 


# Elokuvasovellus

## Ryhmä 7 (Henrik Junttila, Otso Sallmén, Leevi Seppälä, Veikka Puolitaival ja Olli Saukko)

### Alustus

Tervetuloa tutustumaan Oulun Ammattikorkeakoulun toisen vuoden tieto- ja viestintätekniikan opiskelijoiden leffaharrastajille suunnattuun sivustoon, joka yhdistää IMDB:n avoimen datan ja Finnkinon tarjoaman rajapinnan. Projektimme keskiössä on luoda monipuolinen ja käyttäjäystävällinen verkkosivu, joka tarjoaa elokuvaharrastajille ajantasaista tietoa elokuvista ja mahdollisuuden jakaa arvioita ja uutisia myös ystäville.

### Minkälainen projektimme on

Sovelluksemme tavoitteena on tarjota kattava palvelu leffaharrastajille. Käytämme iMDB-alustaa hyödyntäen sen avointa dataa, joka sisältää laajan valikoiman tietoa ja kuvia elokuviin liittyen (Kuva 1). Lisäksi integroimme Finnkinon avoimen rajapinnan, joka mahdollistaa uutisten hakemisen kätevästi. Projektissamme toteutamme oman palvelimen ja tietokannan sovelluksen oman datan hallintaan. Hyödynnämme The Movie Database APIa, mikä edellyttää API-avaimen hankkimista heidän sivustonsa kautta. Finnkinon API puolestaan tarjoaa mahdollisuuden hakea tietoa uutisista ja teatterin esitysajoista ilman kirjautumista. Projektia tehdessämme keskitymme myös versionhallintaan ja ryhmätyön perusteisiin, joista molemmat ovat tärkeitä ottaen huomioon, että ryhmäämme kuuluu 5 henkilöä. Kaikki jäsenet toimivat Full Stack-kehittäjinä. Ryhmän jäsenistä Veikka on ainoa, jolla on koodauskokemusta koulun ulkopuolelta. Muiden ryhmäläisten osaaminen perustuu koulussa opittuihin asioihin.

### Sovelluksen käyttöönotto

Kun sovellus halutaan laittaa käyntiin, täytyy ensiksi käynnistää palvelin. Ensiksi navigoidaan terminaalissa server-kansioon, jossa on palvelinpuolen koodit. Komennolla "node index.js", Node.js-ympäristö käynnistyy ja se ajaa koodit server.js-tiedostosta. Kun palvelin on käynnissä, käynnistä uusi terminaali, jossa ajetaan verkkosivun kooditiedostot. Sen jälkeen voi siirtyä verkkosivulle, jossa sovellus on ajossa.

### Elokuvasovelluksen esittely

Sovellus on rakennettu käyttäen Visual Studio Codea ja ajoympäristönä Node.js. Tietokanta on tehty PostgreSQL:llä Renderiin. Ohjelmointikielinä toimivat JavaScript, HTML ja CSS. Käyttöliittymän toteutus React.js-Frameworkilla. Ketterän kehityksen toteutus onnistuu GitHubin avulla, sekä Kanban-taulu (tehtävien organisointi) Click-Upissa [Click-Up Link](https://sharing.clickup.com/9015106127/l/h/8cnf6jf-315/144ba41465eca1c).

Sovellus koostuu React-applikaatiosta. Sovelluksen pääsivut, jotka muodostavat käyttöliittymänrakenteen ovat: Sisäänkirjautuminen/käyttäjän luominen, Etusivu, Ryhmänäkymä, Elokuvanarvostelu, Asetukset (Kuvat 1, 2, 3). Sovelluksen arkkitehtuuri ja tietokantarakenne on kuitenkin paljon monimutkaisempi mitä tästä voisi olettaa. (Kuva 4 ja Kuva 5).
