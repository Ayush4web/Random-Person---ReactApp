import logo from './logo.svg'
import './App.css'
import { useGlobalContext, } from './Context'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'

function App() {
  const { person, value, setValue, title, setTitle, loading, fetchPerson } =
    useGlobalContext()
    const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
  const handleValue = (e) => {
    if (e.target.classList.contains('btn')) {
      const newValue = e.target.dataset.label
      setTitle(newValue)
      setValue(person[newValue])
    }
  }
  return (
    <main className="main">
      <div className="bg-black"></div>
      <div className="container">
        <div className="img">
          <img src={(person && person.image) || defaultImage} alt="" />
        </div>
        <div className="title">
          <h3>my {title} is</h3>
          <h2>{value}</h2>
        </div>

        <div className="btn-group">
          <button className="btn" data-label="name" onMouseOver={handleValue}>
            <FaUser />
          </button>
          <button className="btn" data-label="email" onMouseOver={handleValue}>
            <FaEnvelopeOpen />
          </button>
          <button className="btn" data-label="age" onMouseOver={handleValue}>
            <FaCalendarTimes />
          </button>
          <button className="btn" data-label="street" onMouseOver={handleValue}>
            <FaMap />
          </button>
          <button className="btn" data-label="phone" onMouseOver={handleValue}>
            <FaPhone />
          </button>
          <button
            className="btn"
            data-label="password"
            onMouseOver={handleValue}
          >
            <FaLock />
          </button>
        </div>
        <button className="random-btn" onClick={fetchPerson}>
          {loading ? 'loading...' : 'random user'}
        </button>
      </div>
    </main>
  )
}

export default App
