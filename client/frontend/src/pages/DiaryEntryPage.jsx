import DiaryDetails from "../Components/Diarydetails";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import "./Diarydetails.css";


export default function DiaryEntryPage() {
    const params = useParams()
    

    const [diary, setDiary] = useState({})

    console.log(diary)
    const getData = async () => {
        try {
          const response = await fetch(`/api/diary/${params.id}`);
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

    return(
        <div className="diary-details"> <DiaryDetails diary = {diary} /> </div>
    )
}