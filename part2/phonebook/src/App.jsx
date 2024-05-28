import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'
import pbService from './services/phonebook'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [notificationMsg, setNotificationMsg] = useState('')
  const [color, setColor] = useState('')

  useEffect(() => {
    console.log('effect')
    pbService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])

  console.log('render', persons.length, 'notes')

  let storedID = ''

  const addPerson = event => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      // too many problems with creating id manually
      // id: persons.length+1,
      number: newNumber
    }

    console.log(`new object id: ${nameObject.id}`)

    if (persons.some(p => {
      storedID = p.id
      return (
        p.name === nameObject.name
      )
      })) 
    {
      if (!window.confirm(`${newName} is already added. Do you want to replace the old number?`)) return

      setColor('green')
      setNotificationMsg(`Changed ${newName} number`)
      setTimeout(() => {
        setNotificationMsg(null)
      }, 5000)

      pbService
      .replaceNumber(nameObject, storedID)
      .then(response => {
        setPersons(persons.map(person =>
          person.id === storedID ? response.data : person
        ))
        }).catch(error => {
          setColor('red')
          setNotificationMsg(`Information of ${newName} has already been deleted from the server`)
          setPersons(persons.filter(p => p.id !== storedID))
      })
    } 

    else {
      setColor('green')
      setNotificationMsg(`Added ${newName}`)
      setTimeout(() => {
        setNotificationMsg(null)
      }, 5000)

      pbService
      .create(nameObject)
      .then(returnedName => {
        setPersons(persons.concat(returnedName))
      })
    }
    setNewName('')
    setNewNumber('')
    
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchName = (event) => {
    setSearchName(event.target.value)
    console.log(searchName)
  }

  const handleDelete = (id) => {
    console.log(id)

    console.log(`http://localhost:3001/persons/${id}`)

    if (!window.confirm('Are you sure about that?')) return

    pbService
      .deleteName(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
        console.error('error', error)
        alert('failed')
      })
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMsg} color={color}/>
      <Filter searchName={searchName} handleSearchName={handleSearchName} />
      <h2>add a new</h2>
      <Form addPerson={addPerson} 
        newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} searchName={searchName} handleDelete={handleDelete}/>
    </div>
  )
}

const Notification = ({message, color}) => {

  const notificationStyle = {
    color: color,
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  }

  if (!message) return null

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  )
}

export default App