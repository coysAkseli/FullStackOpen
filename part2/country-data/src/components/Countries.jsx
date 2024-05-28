import ShowCountry from './ShowCountry'
import Country from './Country'

const Countries = ({countries, search, onSelectCountry}) => {

let arrayCountries = []

for (let i=0; i<countries.length; i++) {
    arrayCountries.push(countries[i])
    //console.log(countries[i])
}

let matchCountries = arrayCountries.filter(c => c.name.common.toLowerCase().startsWith(search.toLowerCase()))

/**
 * >10 matches
 */
if (matchCountries.length > 10)
    return (
    <p>Too many matches</p>
    )

    /**
     * 1 match
     */
if (matchCountries.length === 1) {
    //let country = matchCountries[0]
    return (
    <ShowCountry country={matchCountries[0]} />
    )
}

/**
 * 2-9 matches
 */
else return (
    <div>
    <ul>
        {matchCountries.map(country => (
        <Country key={country.id} country={country} onSelect={onSelectCountry}/>
        ))}
    </ul>
    </div>
)
}

export default Countries