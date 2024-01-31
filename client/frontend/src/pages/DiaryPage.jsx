import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function DiaryEntries() {
    const navigate = useNavigate()
    const [diary, setDiary] = useState(null)

    const getData = async () => {
        try {
          const response = await fetch('/api/diary');
          const data = await response.json();
          console.log(data);
          setDiary(data)
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(() => {
        getData();
      }, []);

      const handleDelete = async(id) => {
        try {
            await fetch(`/api/diary/${id}` , {
                method: 'DELETE'
            })
            setDiary(diary.filter((d) => d._id !==id))
        } catch (err) {
            console.log(err.message)
        }
    }

    
    const handleEdit = async(id) => {
      try {
          await fetch(`/api/diary/${id}` , {
              method: 'DELETE'
          })
          setDiary(diary.filter((d) => d._id !==id))
      } catch (err) {
          console.log(err.message)
      }
  }

    return(
        <div className = "diary">
          <h1>Here are all your diary entries!</h1>
          <div className = "diary-entry" >
            
            {diary && diary.map((diaryEntry) => (
              <div key = {diaryEntry._id}>
                <Link to={`/diary/${diaryEntry._id}`}>{diaryEntry.title}</Link>
                <br/><br/>
                <button onClick = {()=> handleDelete(diaryEntry._id)}> Delete</button>
                <button onClick = {()=> handleEdit(diaryEntry._id)}>Edit</button>
                <br/><br/>
              </div>                        
            ))}                              
          </div>
        </div>
    )


}
