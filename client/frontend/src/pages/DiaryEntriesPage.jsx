import { useEffect, useState } from "react";

export default function DiaryEntries() {
    const [diaries, setDiaries] = useState(null)

    const getData = async () => {
        try {
          const response = await fetch('/api/test');
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
        <div>
            {diaries && diaries.map((diary) => {
              <p key ={diary._id}>{diary.title}</p>
            })}
        </div>
    )
}