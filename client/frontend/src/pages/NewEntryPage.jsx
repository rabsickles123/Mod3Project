import { useState } from "react";
import "./DiaryEntry.css"
import { useNavigate } from "react-router-dom";

export default function NewEntry() {
  const navigate = useNavigate()
  const [date, setDate] = useState("")
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    const diary = { title, text, date }

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
      setDate('')
      setTitle('')
      setText('')
      setError(null)
      
      console.log('diary entry added', data) 
      navigate('/diary')
    }
  };

  return (
    <div className="diary-entry-class">
      <h1 className="diary-entry-title">Create a new diary entry!</h1>
      <form onSubmit={handleSubmit} className = "create-or-edit-diary-entry">
      <label>Date: </label>
        <input className = "input4" type= "date" onChange={(e) => setDate(e.target.value)} value = {date}/>
        <label>Title: </label>
        <input className = "input3" type= "text" onChange={(e) => setTitle(e.target.value)} value = {title}/>
        <br/> <br/>
        <label className="label2">Thoughts? Feelings? Weather?</label>
        <textarea className="text-area" type= "text" onChange={(e)=> setText(e.target.value)} value = {text}/>
        <br/> <br/>
        <button className="submit-update-diary-button">Submit Diary</button> 
        {error && <div className = "error">{error}</div>} 
      </form>
      
    </div>
  );
}