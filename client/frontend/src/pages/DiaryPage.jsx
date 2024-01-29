import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DiaryEntryPage from "./DiaryEntryPage";

export default function DiaryEntries() {
    const [diaries, setDiaries] = useState(null)

    const getData = async () => {
        try {
          const response = await fetch('/api/diary');
          const data = await response.json();
          console.log(data);
          setDiaries(data)
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(() => {
        getData();
      }, []);

    return(
        <div className = "diary">
          <div className = "diary-entry">
            {diaries && diaries.map((diary) => (
             <a key = {diary._id} href="/diary/:id"><DiaryEntryPage diary = {diary}/></a> 
            ))}             
          </div>
        </div>
    )
}