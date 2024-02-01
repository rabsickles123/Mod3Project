import { useNavigate} from "react-router-dom"
import "./Diarydetails.css"



export default function Diarydetails({diary}) {
    const navigate = useNavigate()

    function handleClick(e) {
        e.preventDefault()
        navigate('/diary')
    }
    
    return(
        <div className="diary-details">
            <h2>{diary.date}</h2>
           <h1 className= "diary-details-title">{diary.title}</h1> 
           <div className = "diary-details-text"><p>{diary.text}</p></div> 
           <button onClick= {handleClick} className="Back-button">Back</button>   
        </div>
    )

}