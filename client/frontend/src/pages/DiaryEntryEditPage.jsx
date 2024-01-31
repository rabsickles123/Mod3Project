import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function DiaryEntryEditPage() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`/api/diary/${id}`);
            const data = await response.json();
            
            // Set the initial state of form fields with data from the API
            setTitle(data.title || '');
            setText(data.text || '');
          } catch (err) {
            console.error('Error fetching diary entry:', err.message);
          }
        };
    
        fetchData(); // Fetch data when the component mounts
      }, [id])

  const handleSubmit = async (e) => {

    e.preventDefault()

    const diary = { title, text }

    console.log(diary)
    const response = await fetch(`/api/diary/${id}`, {
      method: 'PUT',
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
      setError(null)
    
      console.log('diary entry added', data)
      navigate('/diary')
    }
  };

  return (
    <div className="newentry">
      <h1>Update your diary entry!</h1>
      <form onSubmit={handleSubmit} className = "create-diary-entry">
        <label>Title: </label>
        <input type= "text" onChange={(e) => setTitle(e.target.value)} value = {title}/>
        <br/> <br/>
        <label>What are you thinking?</label>
        <textarea type= "text" onChange={(e)=> setText(e.target.value)} value = {text}/>
        <br/> <br/>
        <button>Update Diary</button> 
        {error && <div className = "error">{error}</div>} 
      </form>
      
    </div>
  );
}