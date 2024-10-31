import { useState } from "react";
import supabase from "../supabase";
import "../style.css";

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

function IsValid(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function NewFactForm({ setFacts, setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const textLength = text.length;
  const [isUploading, setIsUploading] = useState(false);
  async function HandleSubmit(e) {
    e.preventDefault();

    if (text && IsValid(source) && category && textLength <= 200) {
      console.log("true");

      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from("facts")
        .insert([{ text, source, category }])
        .select();
      setIsUploading(false);
      if (!error) setFacts((facts) => [newFact[0], ...facts]);
      setText("");
      setSource("");
      setCategory("");
      setShowForm(false);
    }
  }

  return (
    <>
      <form className="fact-form" onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="Share a fact with the world"
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={isUploading}
        />
        <span>{200 - textLength}</span>
        <input
          type="text"
          placeholder="Trustworthy source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          disabled={isUploading}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={isUploading}
        >
          <option value="">Choose catagory:</option>
          {CATEGORIES.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name.toUpperCase()}
            </option>
          ))}
        </select>
        <button className="btn btn-large" disabled={isUploading}>
          Post
        </button>
      </form>
    </>
  );
}
export default NewFactForm;
