window.onload = function () {
    listAllSpells();
};

function listAllSpells() {
  const spellList = document.getElementById("spellList");

  // Limpa a lista de feitiços
  spellList.innerHTML = "";

  // Faz uma solicitação à API
  fetch("https://hp-api.onrender.com/api/spells")
    .then((response) => response.json())
    .then((data) => {
      // Cria uma lista com todos os feitiços
      const ul = document.createElement("ul");

      data.forEach((spell) => {
        const liName = document.createElement("li");
        // const liDescription = document.createElement("li");

        liName.textContent = `Nome: ${spell.name}`;
        // liDescription.textContent = `Descrição: ${spell.description}`;

        ul.appendChild(liName);
        // ul.appendChild(liDescription);
      });

      spellList.appendChild(ul);
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao buscar os feitiços:", error);
      spellList.innerHTML = "Ocorreu um erro ao buscar os feitiços.";
    });
}

function clearSpellList() {
  // Limpa a lista de feitiços
  const spellList = document.getElementById("spellList");
  spellList.innerHTML = "";
}

function searchSpell() {
  // Aqui fica o código existente para a busca de feitiços

  const spellName = document.getElementById("spellName").value;
  const spellList = document.getElementById("spellList");

  // Limpa a lista de feitiços
  spellList.innerHTML = "";

  // Faz uma solicitação à API
  fetch("https://hp-api.onrender.com/api/spells")
    .then((response) => response.json())
    .then((data) => {
      // Filtra os feitiços com base no nome
      const filteredSpells = data.filter((spell) =>
        spell.name.toLowerCase().includes(spellName.toLowerCase())
      );

      if (filteredSpells.length === 0) {
        spellList.innerHTML = "Nenhum feitiço encontrado.";
        return;
      } else if (spellName === "") {
        spellList.innerHTML = "Digite um nome de feitiço.";
        return;
      }
      // Cria uma lista com os feitiços filtrados
      const ul = document.createElement("ul");

      filteredSpells.forEach((spell) => {
        const liName = document.createElement("li");
        const liDescription = document.createElement("li");

        liName.textContent = `Nome: ${spell.name}`;
        liDescription.textContent = `Descrição: ${spell.description}`;

        ul.appendChild(liName);
        ul.appendChild(liDescription);
      });

      spellList.appendChild(ul);
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao buscar os feitiços:", error);
      spellList.innerHTML = "Ocorreu um erro ao buscar os feitiços.";
    });
}
