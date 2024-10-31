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

function Fact({ fact, setFacts }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const isDisputed =
    fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;
  async function HandleVote(columnName) {
    setIsUpdating(true);
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ [columnName]: fact[columnName] + 1 })
      .eq("id", fact.id)
      .select();
    setIsUpdating(false);
    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
      );
  }

  return (
    <>
      <li className="fact">
        <p>
          {isDisputed ? <span className="disputed">[Disputed]</span> : null}
          {fact.text}
          <a className="source" href={fact.source} target="_blank">
            (Source)
          </a>
        </p>
        <span
          className="tag"
          style={{
            backgroundColor: CATEGORIES.find(
              (cat) => cat.name === fact.category
            ).color,
          }}
        >
          {fact.category}
        </span>

        <div className="vote-buttons">
          <button
            onClick={() => HandleVote("votesInteresting")}
            disabled={isUpdating}
          >
            👍 {fact.votesInteresting}
          </button>
          <button
            onClick={() => HandleVote("votesMindblowing")}
            disabled={isUpdating}
          >
            🤯 {fact.votesMindblowing}
          </button>
          <button
            onClick={() => HandleVote("votesFalse")}
            disabled={isUpdating}
          >
            😡 {fact.votesFalse}
          </button>
        </div>
      </li>
    </>
  );
}
export default Fact;
