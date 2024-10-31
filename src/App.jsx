import { useEffect, useState } from "react";
import supabase from "./supabase";
import "./style.css";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";
import Categoryfilter from "./components/Categoryfilter";
import FactList from "./components/FactList";


function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <span style={{ fontSize: "40px" }}>{count}</span>
      <button className="btn btn-large" onClick={() => setCount((c) => c + 1)}>
        +1
      </button>
    </>
  );
}


function Loader() {
  return <p className="message">Loading....</p>;
}


function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(
    function () {
      async function getFacts() {
        setIsLoading(true);
        let query = supabase.from("facts").select("*");
        if (currentCategory !== "all")
          query = query.eq("category", currentCategory);
        console.log(currentCategory);
        const { data: facts, error } = await query
          .order("votesInteresting", { ascending: false })
          .limit(1000000);
        if (!error) setFacts(facts);
        else alert("There was a problem getting data");
        setIsLoading(false);
      }
      getFacts();
    },
    [currentCategory]
  );
  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      ) : null}
      <main className="main">
        <Categoryfilter setCurrentCategory={setCurrentCategory} />
        {isLoading ? (
          <Loader />
        ) : (
          <FactList facts={facts} setFacts={setFacts} />
        )}
      </main>
    </>
  );
}

export default App;
