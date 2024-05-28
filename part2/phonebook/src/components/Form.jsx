const Form = (props) => {
    return (
      <form onSubmit={props.addPerson}>
        <div> 
          name:
          <input style={{margin: '5px'}}
            value={props.newName}
            onChange={props.handleNameChange}
          />
        </div>
        <div>
          number: 
          <input style={{margin: '5px'}}
          value={props.newNumber}
          onChange={props.handleNumberChange}
          />
        </div>
        <button type="submit">add</button>
      </form>
    )
}

export default Form