import { declareWinner, playRaceEngine } from "./gameFunc.js";
import readline from 'readline';
import { chooseCharacter } from './chooseCharacter.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async function main() {
    const player1 = await chooseCharacter(1, rl);
    const player2 = await chooseCharacter(2, rl);

    console.clear();
    console.log(`Jogador 1 escolheu: ${player1.NOME}`);
    console.log(`Jogador 2 escolheu: ${player2.NOME}`);
    console.log(
        `\n🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`
    );

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);

    rl.close();
})();
