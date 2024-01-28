import { useState } from "react";

export default function NewEntry() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
  };

  return (
    <div className="newentry">
      <h1>Diary Entry</h1>
      <form onSubmit={handleSubmit}>
        <div className = "diaryentry">
        <h2>Title: <textarea type = "text" className = "diary-title" placeholder = "Diary title" ></textarea></h2>
        <h2>Thoughts:<textarea type="text" className = "diary-text" placeholder="Type your thoughts here..." onChange={(e) => setTitle(e.target.value)}/></h2>
        <br />
        <button type="submit">Submit</button>
        </div>
        
      </form>
    </div>
  );
}
