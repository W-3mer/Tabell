let articles = JSON.parse(localStorage.getItem("articles")) || [];

function save() {
  localStorage.setItem("articles", JSON.stringify(articles));
}

function render() {
  const tbody = document.querySelector("tbody");
  if (!tbody) return;

  tbody.innerHTML = "";
  articles.forEach((a, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${a.number}</td>
        <td>${a.name}</td>
        <td>${a.date}</td>
      </tr>`;
  });
}

function addArticle(e) {
  e.preventDefault();
  articles.push({
    number: number.value,
    name: name.value,
    date: date.value
  });
  save();
  location.reload();
}

function sortAZ() {
  articles.sort((a, b) => a.name.localeCompare(b.name));
  save(); render();
}

function sortByNumber() {
  articles.sort((a, b) => a.number - b.number);
  save(); render();
}

render();
