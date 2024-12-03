import { characters } from './characters.js';

function displayCharacterOptions() {
    console.clear();
    console.log("Escolha seu personagem:");
    characters.forEach((character, index) => {
        console.log(`${index + 1}. ${character.NOME} - Velocidade: ${character.VELOCIDADE}, Manobrabilidade: ${character.MANOBRABILIDADE}, Poder: ${character.PODER}`);
    });
}

export function chooseCharacter(playerNumber, rl) {
    return new Promise((resolve) => {
        displayCharacterOptions();
        rl.question(`\nJogador ${playerNumber}, escolha seu personagem (1-${characters.length}): `, (choice) => {
            const characterIndex = parseInt(choice) - 1;

            if (characterIndex >= 0 && characterIndex < characters.length) {
                const selectedCharacter = characters[characterIndex];
                resolve(selectedCharacter);
            } else {
                console.clear();
                console.log("Escolha inválida. Tente novamente.");
                resolve(chooseCharacter(playerNumber, rl));
            }
        });
    });
}
