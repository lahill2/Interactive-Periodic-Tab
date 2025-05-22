const elements = [
  { symbol: "H", name: "Hydrogen", number: 1, group: 1 },
  { symbol: "He", name: "Helium", number: 2, group: 18 },
  { symbol: "Li", name: "Lithium", number: 3, group: 1 },
  { symbol: "Be", name: "Beryllium", number: 4, group: 2 },
  { symbol: "B", name: "Boron", number: 5, group: 13 },
  { symbol: "C", name: "Carbon", number: 6, group: 14 },
  { symbol: "N", name: "Nitrogen", number: 7, group: 15 },
  { symbol: "O", name: "Oxygen", number: 8, group: 16 },
  { symbol: "F", name: "Fluorine", number: 9, group: 17 },
  { symbol: "Ne", name: "Neon", number: 10, group: 18 },
  // Add more elements here...
];

const table = document.getElementById("periodic-table");
const search = document.getElementById("search");

function renderTable() {
  table.innerHTML = "";
  elements.forEach(el => {
    const div = document.createElement("div");
    div.className = "element";
    div.textContent = el.symbol;
    div.title = `${el.name} (Atomic Number: ${el.number})`;
    table.appendChild(div);
  });
}

search.addEventListener("input", () => {
  const term = search.value.toLowerCase();
  const boxes = document.querySelectorAll(".element");
  boxes.forEach((box, i) => {
    const el = elements[i];
    if (el.name.toLowerCase().includes(term) || el.symbol.toLowerCase().includes(term)) {
      box.classList.remove("hidden");
    } else {
      box.classList.add("hidden");
    }
  });
});

renderTable();
