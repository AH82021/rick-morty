import { useEffect } from "react"
import { useState } from "react"
import Character from "./Character"
import './CharacterList.css'



const CharacterList = ({searchData}) => {

  const[characters,setCharacters] =useState([])
  const[loading,setLoading] = useState(true)


  // useEffect 
  useEffect(()=>{

    async function fetchData() {
      
      const data = await fetch('https://rickandmortyapi.com/api/character')

      const {results} = await data.json()
      console.log(results);
      
       
    setCharacters(results)
    setLoading(false)
      
       

    }

    fetchData()

  },[])


  // fiter based on serach term

  const filteredCharacters = characters.filter((character)=> character.name.toLowerCase().includes(searchData.toLowerCase()))


  return (
    <div className="character-list">
   
      { loading ? ( <div> Loading ...</div>) : 
      ( filteredCharacters.map((character)=>(

     <Character key={character.id} name={character.name} origin={character.origin} image={character.image} />
      ))
    )}
    </div>
  )
}

export default CharacterList