import { useEffect, useState } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import ShowCountry from './components/ShowCountry'
import Weather from './components/Weather'

// git bash command
// $ set "VITE_SOME_KEY=d5476bf21fb0f598c423e0d32b4089ed" && npm run dev

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => response.data)
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])
  
  const handleSearch = event => {
    setSearch(event.target.value)
    console.log(search)
  }

  const handleSelectCountry = country => {
    setSelectedCountry(country)
  }

  const handleBackButton = () => {
    setSelectedCountry(null)
  }

  return (
    <div>
      find countries
      <input onChange={handleSearch}/>
      {selectedCountry ? (
        <div>
          <ShowCountry country={selectedCountry} />
          <button onClick={handleBackButton}>back</button>
        </div>
      ) : (
        <Countries countries={countries} search={search} onSelectCountry={handleSelectCountry}/>)}
    </div>
  )
}

export default App
