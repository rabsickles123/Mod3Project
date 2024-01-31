import { useState } from "react";
import { useNavigate } from "react-router-dom"


export default function Diarydetails({diary}) {
    
    return(
        <div>
           <h1>{diary.title}</h1> 
           <p>{diary.text}</p>        
        </div>
    )

}