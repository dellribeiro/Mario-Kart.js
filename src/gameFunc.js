import {getRandomBlock, logRollResult, rollDice} from "./utils.js";

export async function playRaceEngine(character1, character2) {
    const blocks = {
        RETA: "VELOCIDADE",
        CURVA: "MANOBRABILIDADE",
        CONFRONTO: "PODER"
    };

    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        character1.DICE_RESULT = await rollDice();
        character2.DICE_RESULT = await rollDice();

        if (block === "CONFRONTO") {
            await handleConfront(character1, character2);
        } else {
            let skill = blocks[block];
            await handleSkillTest(character1, character2, skill);
        }

        console.log("-----------------------------");
    }
}

async function handleSkillTest(character1, character2, skill) {
    let totalTestSkill1 = character1.DICE_RESULT + character1[skill];
    let totalTestSkill2 = character2.DICE_RESULT + character2[skill];

    await logRollResult(character1.NOME, skill.toLowerCase(), character1.DICE_RESULT, character1[skill]);
    await logRollResult(character2.NOME, skill.toLowerCase(), character2.DICE_RESULT, character2[skill]);

    if (totalTestSkill1 > totalTestSkill2) {
        console.log(`${character1.NOME} marcou um ponto!`);
        character1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
        console.log(`${character2.NOME} marcou um ponto!`);
        character2.PONTOS++;
    } else {
        console.log("Empate! Nenhum ponto foi marcado.");
    }
}

async function handleConfront(character1, character2) {
    let powerResult1 = character1.DICE_RESULT + character1.PODER;
    let powerResult2 = character2.DICE_RESULT + character2.PODER;

    console.log(`${character1.NOME} confrontou ${character2.NOME}! 🥊`);
    await logRollResult(character1.NOME, "poder", character1.DICE_RESULT, character1.PODER);
    await logRollResult(character2.NOME, "poder", character2.DICE_RESULT, character2.PODER);

    const items = ["casco", "bomba"];
    const randomItem = items[Math.floor(Math.random() * items.length)];

    let itemPenalty = randomItem === "casco" ? 1 : 2;
    console.log(`Item sorteado: ${randomItem === "casco" ? "Casco 🐢(-1 ponto)" : "Bomba 💣(-2 pontos)"}`);

    if (powerResult1 > powerResult2) {
        if (character2.PONTOS >= itemPenalty && character2.PONTOS > 0) {
            console.log(
                `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu ${itemPenalty} ponto(s)`
            );
            character2.PONTOS -= itemPenalty;
        }
        if (Math.random() <= 0.66) {
            character1.PONTOS++;
            console.log(`${character1.NOME} recebeu um turbo! (+1 ponto) 🚀`);
        }
    } else if (powerResult2 > powerResult1) {
        if (character1.PONTOS >= itemPenalty && character1.PONTOS > 0) {
            console.log(
                `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu ${itemPenalty} ponto(s)`
            );
            character1.PONTOS -= itemPenalty;
        }
        if (Math.random() <= 0.66) {
            character2.PONTOS++;
            console.log(`${character2.NOME} recebeu um turbo! (+1 ponto) 🚀`);
        }
    } else {
        console.log("Confronto empatado! Nenhum ponto foi perdido");
    }
}

export async function declareWinner(character1, character2) {
    console.log("Resultado final:");
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

    if (character1.PONTOS > character2.PONTOS)
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
    else if (character2.PONTOS > character1.PONTOS)
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
    else console.log("A corrida terminou em empate");
}