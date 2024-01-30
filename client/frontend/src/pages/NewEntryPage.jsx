import { useState } from "react";
import useDiaryContext  from "../hooks/useDiaryContext"

export default function NewEntry() {
  const {dispatch} = useDiaryContext()
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    const diary = { title, text }

    console.log(diary)
    const response = await fetch('/api/diary/', {
      method: 'POST',
      body: JSON.stringify(diary),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    
    if (!response.ok) {
      setError(data.error)
    }
    if (response.ok) {
      setTitle('')
      setText('')
      // setError(null)
      console.log('diary entry added', data)
      dispatch({type: "CREATE_DIARY", payload: data})
    }
  };

  return (
    <div className="newentry">
      <h1>Create a new diary entry!</h1>
      <form onSubmit={handleSubmit} className = "create-diary-entry">
        <label>Title: </label>
        <input type= "text" onChange={(e) => setTitle(e.target.value)} value = {title}/>
        <br/> <br/>
        <label>What are you thinking?</label>
        <textarea type= "text" onChange={(e)=> setText(e.target.value)} value = {text}/>
        <br/> <br/>
        <button>Submit Diary</button> 
        {error && <div className = "error">{error}</div>} 
      </form>
      
    </div>
  );
}
