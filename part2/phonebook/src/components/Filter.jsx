const Filter = ({searchName, handleSearchName}) => {
    return (
    <div>
      filter shown with
      <input style={{margin: '5px'}}
        value={searchName}
        onChange={handleSearchName}  
      />
    </div>
    )
}

export default Filter