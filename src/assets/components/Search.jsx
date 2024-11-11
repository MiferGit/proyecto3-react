import { useRef, useState } from "react"
import './Styles/Search.css'


function Search({setLocationId}) {
const [error, setError] = useState('')    
const inputRef = useRef()

const onSubmit = (e)=> {
e.preventDefault()
const id = parseInt(inputRef.current.value)
console.log(typeof id)

if (isNaN(id)) {
    setError('❌ Invalid number')
    setTimeout(() => {setError('')}, 2000);
    return
}

if (id < 1 || id > 126) {
    setError('❌ Hey! you most provide an id from 1 to 126')
    setTimeout(() => {setError('')}, 3000);
    return
}

setLocationId(id)
// inputRef.current.value = '' 
e.target.reset()

}


//************************************************** */
  return (
    <>
    <form onSubmit={onSubmit} className="search" >
        <input ref={inputRef} type="text" className="search__input"/>
        <button className="search__btn">Search</button>
    </form>
    <p className="message__error">{error && error}</p>
    </>
  )
}

export default Search