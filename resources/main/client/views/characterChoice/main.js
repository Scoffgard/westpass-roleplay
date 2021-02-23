let chars;

const list = document.getElementById('list');

let selectedChar = null;

alt.on('chars', data => {
    chars = data;
    for (let char of chars) {
        let div = document.createElement('div');
        div.id = 'char' + char.characterID;
        div.onclick = () => selectCharacter(char.characterID);
        div.classList.add('character');
        div.innerHTML = `<p>${char.characterID} - ${char.name}</p>`;
        list.insertBefore(div, document.getElementById('charnew'));
    }
});

function selectCharacter(id) {
    if (selectedChar != null) {
        const previouslySelected = document.getElementById('char' + selectedChar);
        previouslySelected.classList.remove('selected');
    }

    selectedChar = id;

    const elem = document.getElementById('char' + id);
    elem.classList.add('selected');
}

function validateChar() {
    if (selectedChar == null) return;
    alt.emit('validate', selectedChar);
}

alt.emit('loaded');