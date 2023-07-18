/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
import MoviesScraper from '../src/moviesScraper.js'
import { expect } from 'chai'

const moviesScraper = new MoviesScraper()

describe('Testing if scraped data is correct', function () {
  it('Testing Netflix link data', async function () {
    const result = await moviesScraper.scrapeTitles(['https://www.filmweb.pl/ranking/vod/netflix/film/2023'], 10)
    expect(result[0].length).to.equal(10)
    expect(result[0]).to.deep.equal(['Nimona', 'Fenomen', 'Zaopiekujcie się Mayą', 'Bill Russell: Legenda NBA', 'Wham!', 'Jesteśmy idealni', 'Głodni', 'Magiczna słonica', 'Siła ducha', 'Black Clover: Mahō Tei no Ken'])
  })
  it('Testing HBO Max link data', async function () {
    const result = await moviesScraper.scrapeTitles(['https://www.filmweb.pl/ranking/vod/hbo_max/film/2023'], 10)
    expect(result[0]).to.deep.equal(['Na planie serialu \"The Last of Us\"', 'Martwe zło: Przebudzenie', 'Mumie', 'Shazam! Gniew bogów', 'Magic Mike: Ostatni taniec', 'Domówka', 'Ostatnio odwiedzone'])
    expect.fail(result[0].length, 10, 'Check if page missing titles')
  })
  it('Testing Canal + link data', async function () {
    const result = await moviesScraper.scrapeTitles(['https://www.filmweb.pl/ranking/vod/canal_plus_manual/film/2023'], 10)
    expect(result[0]).to.deep.equal(['Przerwany lot', 'Klub zabójców', 'Zabójca', 'Ostatnio odwiedzone'])
    expect.fail(result[0].length, 10, 'Check if page missing titles')
  })
  it('Testing Disney + link data', async function () {
    const result = await moviesScraper.scrapeTitles(['https://www.filmweb.pl/ranking/vod/disney/film/2023'], 10)
    expect(result[0].length).to.equal(10)
    expect(result[0]).to.deep.equal(['Stan Lee', 'Ślicznotka: Historia Brooke Shields', 'Ulica Rye Lane', 'Dusiciel z Bostonu', "Flamin' Hot: Smak sukcesu", 'Misja: Bal', 'Najlepszy rzut Changa', 'Ant-Man i Osa: Kwantomania', 'Biali nie potrafią skakać', 'Quasi'])
  })

  it('Testing Netflix link data', async function () {
    const result = await moviesScraper.scrapeRatings(['https://www.filmweb.pl/ranking/vod/netflix/film/2023'], 10)
    expect(result[0].length).to.equal(10)
    expect(result[0]).to.deep.equal(['7,36', '7,28', '7,08', '7,05', '7,04', '6,82', '6,63', '6,62', '6,59', '6,50'])
  })
  it('Testing HBO Max link data', async function () {
    const result = await moviesScraper.scrapeRatings(['https://www.filmweb.pl/ranking/vod/hbo_max/film/2023'], 10)
    expect(result[0]).to.deep.equal(['6,71', '5,99', '5,87', '5,54', '4,93', '4,26'])
    expect.fail(result[0].length, 10, 'Check if page missing ratings')
  })
  it('Testing Canal + link data', async function () {
    const result = await moviesScraper.scrapeRatings(['https://www.filmweb.pl/ranking/vod/canal_plus_manual/film/2023'], 10)
    expect(result[0]).to.deep.equal(['6,05', '5,06', '4,04'])
    expect.fail(result[0].length, 10, 'Check if page missing ratings')
  })
  it('Testing Disney + link data', async function () {
    const result = await moviesScraper.scrapeRatings(['https://www.filmweb.pl/ranking/vod/disney/film/2023'], 10)
    expect(result[0].length).to.equal(10)
    expect(result[0]).to.deep.equal(['6,77', '6,69', '6,24', '6,22', '6,18', '6,00', '5,67', '5,56', '5,37', '4,91'])
  })
})
