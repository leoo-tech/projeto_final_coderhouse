function searchSpell() {
  const input = document.getElementById("spellInput").value.toLowerCase();
  const spellList = document.getElementById("spellList");

  // Limpa a lista de feitiços
  spellList.innerHTML = "";

  // Faz uma solicitação à API
  fetch('https://hp-api.onrender.com/api/spells')
        .then(response => response.json())
        .then(data => {
            // Encontra o feitiço correspondente à entrada do usuário
            const foundSpell = data.find(spell => spell.name.toLowerCase() === input);
            
            if (!foundSpell) {
                spellList.innerHTML = 'Feitiço não encontrado.';
            } else {
                // Cria uma lista com o feitiço encontrado
                const ul = document.createElement('ul');
                const liName = document.createElement('li');
                const liDescription = document.createElement('li');
                
                liName.textContent = `Nome: ${foundSpell.name}`;
                liDescription.textContent = `Descrição: ${foundSpell.description}`;
                
                ul.appendChild(liName);
                ul.appendChild(liDescription);
                
                spellList.appendChild(ul);
            }
        })
        .catch(error => {
            console.error('Ocorreu um erro ao buscar os feitiços:', error);
            spellList.innerHTML = 'Ocorreu um erro ao buscar os feitiços.';
        });
}
;