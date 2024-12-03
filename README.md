<h1>Desafio de projeto: Mario Kart.JS</h1>

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
<tr>
<td style="border: 1px solid black; text-align: center;">
<p>Mario</p>
<img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Velocidade: 4</p>
<p>Manobrabilidade: 3</p>
<p>Poder: 3</p>
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Peach</p>
<img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Velocidade: 3</p>
<p>Manobrabilidade: 4</p>
<p>Poder: 2</p>
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Yoshi</p>
<img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Velocidade: 2</p>
<p>Manobrabilidade: 4</p>
<p>Poder: 3</p>
</td>
</tr>
<tr>
<td style="border: 1px solid black; text-align: center;">
<p>Bowser</p>
<img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Velocidade: 5</p>
<p>Manobrabilidade: 2</p>
<p>Poder: 5</p>
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Luigi</p>
<img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Velocidade: 3</p>
<p>Manobrabilidade: 4</p>
<p>Poder: 4</p>
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Donkey Kong</p>
<img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Velocidade: 2</p>
<p>Manobrabilidade: 2</p>
<p>Poder: 5</p>
</td>
</tr>
</table>

<p></p>

<h3>🕹️ Regras & mecânicas:</h3>

<b>Jogadores:</b>

O Computador deve receber dois personagens para disputar a corrida em um objeto cada

<b>Pistas:</b>

<ul>
  <li>Os personagens irão correr em uma pista aleatória de 5 rodadas</li>
  <li>A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto
    <ul>
      <li>Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto</li>
      <li>Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto</li>
      <li>Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto</li>
      <li>Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)</li>
    </ul>
  </li>
</ul>

<b>Condição de vitória:</b>

Ao final, vence quem acumulou mais pontos

### 🕹️ Novas Funcionalidades

- **Menu de seleção de personagem:**

  - O jogador pode escolher entre os personagens disponíveis no início da corrida.

- **Confronto aprimorado:**

  - É sorteado aleatoriamente um item que penaliza o perdedor:
    - **Casco** 🐢: -1 ponto.
    - **Bomba** 💣: -2 pontos.
  - O vencedor tem 66% de chance de ganhar um **turbo** (+1 ponto) 🚀.
  - Personagens não perdem pontos caso a penalidade seja maior do que seus pontos disponíveis (evitando valores negativos).

  

  

  