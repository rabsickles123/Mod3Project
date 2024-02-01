import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DiaryPage.css"
import baseURL from "../Api";

export default function DiaryEntries() {
    const navigate = useNavigate()
    const [diary, setDiary] = useState(null)

    const getData = async () => {
        try {
          const response = await fetch(baseURL + '/api/diary');
          const data = await response.json();
          // console.log(data);
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

    return(
        <div className = "diary">
          <h1 className = "diary-page-title">Here are all your diary entries!</h1>
          <div >
            
            {diary && diary.map((diaryEntry) => (
              <div className = "diary-entry"  key = {diaryEntry._id}>
                <Link className="diary-link" to={`/diary/${diaryEntry._id}`}>{diaryEntry.date}{diaryEntry.title}</Link>
                <br/><br/>
                <button className = "delete-button" onClick = {()=> handleDelete(diaryEntry._id)}> Delete</button>
                <button className = "edit-button" onClick = {()=> navigate(`/diary/${diaryEntry._id}/edit`)}>Edit</button>
                <br/><br/>
              </div>                        
            ))}                              
          </div>
        </div>
    )


}
