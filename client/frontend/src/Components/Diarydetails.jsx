import "./Diarydetails.css"


export default function Diarydetails({diary}) {
    
    return(
        <div className="diary-details">
           <h1 className= "diary-details-title">{diary.title}</h1> 
           <div className = "diary-details-text"><p>{diary.text}</p></div>    
        </div>
    )

}