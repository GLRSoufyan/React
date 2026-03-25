import './App.css'
import DropDown from './components/DropDown'

function App() {
  const foodOptions = ['Tacos', 'Pizza', 'Sushi']

  return (
    <>
      <h1>Mijn favoriete eten</h1>
      <p>Kies iets uit de dropdown:</p>

      <DropDown dropdownOptions={foodOptions} />
    </>
  )
}

export default App