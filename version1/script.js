const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

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

//Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".fact-list");

//Create DOM elements
factsList.innerHTML = "";

//Load data from supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://ixcnrtxvisygwdhtfeps.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4Y25ydHh2aXN5Z3dkaHRmZXBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc1MDc3ODUsImV4cCI6MjA0MzA4Mzc4NX0.nO8h429ZPDDX9H0nT7Nm1vNA_-kYjE1MYa_0Wb2VLSM",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4Y25ydHh2aXN5Z3dkaHRmZXBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc1MDc3ODUsImV4cCI6MjA0MzA4Mzc4NX0.nO8h429ZPDDX9H0nT7Nm1vNA_-kYjE1MYa_0Wb2VLSM",
      },
    }
  );
  const data = await res.json();
  console.log(data);
  //const filteredData = data.filter((fact) => fact.category === "society");

  //console.log(data);
  createFactList(data);
}

//createFactList(initialFacts);

function createFactList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class = "fact"> 
    <p>
      ${fact.text}
        <a class="source" href="${fact.source}" target="_blank">(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>
    <\li>`
  );
  console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);

  //Form visibility
  btn.addEventListener("click", function () {
    //to hide/unhide fact-form
    if (form.classList.contains("hidden")) {
      form.classList.remove("hidden");
      btn.textContent = "Close";
    } else {
      form.classList.add("hidden");
      btn.textContent = "Share a fact";
    }
  });
}

/*
const fact = ["abcd", 2022, true];
const [text, year, is, zzz] = fact;
console.log(zzz);
const newFact = [...fact, "zzz"];
console.log(newFact);

const factObj = {
  text: "frsgtgj",
  year: 2015,
  valid: true,
  w: function () {
    return `this is ${this.text} `;
  },
};
//const { text, year } = factObj;
console.log(factObj.w());

function calcAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  return age;
}

const age = calcAge(2000);
console.log(age);

const calcAge2 = (year) => 2023 - year;


let voteInteresting = 2;
let voteMindblowing = 5;
let voteFalse = 1;
const totalUpvotes = voteInteresting + voteMindblowing;

if (voteInteresting === voteMindblowing) {
  alert("This fact is equally interesting and mindblowing");
} else {
  alert("This fact is trashy");
  alert("You are dumb");
  alert("You think you are smart?");
  prompt("Shanize,stop talking");
}

[2, 3, 4, 5, 6].forEach(function (el) {
  console.log(el);
});

const mapping = [2, 3, 4, 5, 6].map(function (el) {
  return el * 10;
});

console.log(mapping);

const mappings = [2, 3, 4, 5, 6].map((el) => el * 10);
console.log(mappings);

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
const allCat = CATEGORIES.map((el) => el.name);
console.log(allCat);
const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];
const ages = initialFacts.map((el) => calcAge(el.createdIn));
console.log(ages);
*/
