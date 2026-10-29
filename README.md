# Elokuvasovellus (React)

React-sovellus, jolla voi selata suosittuja elokuvia, hakea elokuvia nimellä ja tallentaa suosikkeja. Elokuvien tiedot haetaan [TMDB](https://www.themoviedb.org/)-rajapinnasta.

## Ominaisuudet

- Suosittujen elokuvien listaus etusivulla
- Elokuvahaku nimen perusteella
- Suosikkien lisäys ja poisto, oma suosikkisivu
- Suosikit säilyvät selaimen localStoragessa
- Sovelluksen tila jaetaan React Contextilla

## Teknologiat

React, Vite, React Router, Context API, TMDB REST API

## Käynnistys

1. Hanki ilmainen API-avain osoitteesta https://www.themoviedb.org/settings/api
2. Luo tiedosto `frontend/.env` mallin `frontend/.env.example` pohjalta ja lisää avain:

   ```
   VITE_TMDB_API_KEY=oma-avain
   ```

3. Käynnistä sovellus:

   ```bash
   cd frontend
   npm install
   npm run dev
   ```
