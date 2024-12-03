export async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

export async function getRandomBlock() {
    const blocks = ["RETA", "CURVA", "CONFRONTO"];
    const randomIndex = Math.floor(Math.random() * blocks.length);
    return blocks[randomIndex];
}

export async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(
        `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
            diceResult + attribute
        }`
    );
}