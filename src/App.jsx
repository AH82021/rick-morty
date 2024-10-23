
import { useState } from 'react'
import './App.css'
import CharacterList from './components/CharacterList'

function App() {
  const [searchTerm,setSearchTerm] = useState('')


  const handleSearchChange =(e)=>{
    setSearchTerm(e.target.value)
  }
  return (
    <>
      <h1 className='app-title'>Rick & Morty</h1>
      <div className='search-container'>
        <input type="text" 
        placeholder='Search characters ..' 
          className='search-input'
     value={searchTerm}
     onChange={handleSearchChange}
        />
      </div>
      <CharacterList  searchData={searchTerm}/>
    </>
  )
  
}

export default App
