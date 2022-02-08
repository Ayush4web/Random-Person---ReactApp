import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()
const url = 'https://randomuser.me/api/'

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [person, setPerson] = useState(null)
  const [value, setValue] = useState('random person')
  const [title, setTitle] = useState('name')

  const fetchPerson = async () => {
    setLoading(true)

    const response = await fetch(url)
    const data = await response.json()
    const person = data.results[0]
    const { phone, email } = person
    const { large: image } = person.picture
    const { password } = person.login
    const { first, last } = person.name
    const {
      dob: { age },
    } = person
    const {
      street: { number, name },
    } = person.location

    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    }
    setPerson(newPerson)
    setLoading(false)
    setTitle('name')
    setValue(newPerson.name)
  }
  useEffect(() => {
    fetchPerson()
  }, [])

  return (
    <AppContext.Provider
      value={{ person, value, setValue, title, setTitle, loading ,fetchPerson}}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
