import Languages from './Languages'
import Weather from './Weather'

const ShowCountry = ({country}) => {

    console.log('in ShowCountry')

    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h3>languages</h3>
            <Languages key={country.id} country={country}/>
            <div style={{fontSize: '200px'}}>{country.flag}</div>
            <h2>Weather in {country.capital}</h2>
            <Weather country={country}/>
        </div>
    )   
}

export default ShowCountry