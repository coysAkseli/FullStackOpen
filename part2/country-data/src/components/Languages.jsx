const Languages = ({country}) => {

    const languageValues = Object.values(country.languages)
    //console.log(languageValues)
  
    return (
      <ul>
        {
          languageValues.map((lang, index) => {
            return (
              <li key={index}> {lang}</li>
            )
          })
        }
      </ul>
    )
  }

export default Languages