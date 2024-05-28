const Country = ({country, onSelect}) => {

const handleClick = () => {
    console.log("handle click")
    console.log(country.name.common)

    onSelect(country)
}

return (
    <li>
    {country.name.common} <button onClick={handleClick}>show </button>
    </li>
)
}

export default Country