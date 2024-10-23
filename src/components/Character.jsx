import './Character.css'
const Character = ({name,origin,image}) => {
  return (
    <div className="character-container">
      <h2>{name}</h2>
      <img src={image} alt={name} className='img' />
      <h3>origin:{origin.name} </h3>
    </div>
  )
}

export default Character