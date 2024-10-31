import "../style.css";
import Fact from "./Fact";

function FactList({ facts, setFacts }) {
  if (facts.length === 0) {
    return <p className="message">No Facts yet</p>;
  }
  return (
    <>
      <section>
        <ul className="fact-list">
          {facts.map((fact) => (
            <Fact key={fact.id} fact={fact} setFacts={setFacts} />
          ))}
        </ul>
      </section>
    </>
  );
}
export default FactList;
