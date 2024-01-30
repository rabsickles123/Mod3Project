import { useEffect } from "react";
import { Link } from "react-router-dom";
import useDiaryContext from "../hooks/useDiaryContext";

export default function DiaryEntries() {
    const {diary, dispatch} = useDiaryContext()

    const getData = async () => {
        try {
          const response = await fetch('/api/diary');
          const data = await response.json();
          console.log(data);
          dispatch({type: 'SET_DIARY', payload: data })
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(() => {
        getData();
      }, []);

      console.log("Diary state: ", diary)

    return(
        <div className = "diary">
          <div className = "diary-entry">
            {diary && diary.map((diaryEntry) => (
             <Link key = {diaryEntry._id} to={`/diary/${diaryEntry._id}`}>{diaryEntry.title} <br/> <br/> </Link>            
            ))}                        
          </div>
        </div>
    )
}