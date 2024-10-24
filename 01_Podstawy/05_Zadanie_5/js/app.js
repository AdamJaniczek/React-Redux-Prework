function rockPaperScissors(player1, player2) {
    const validMoves = ["papier", "nożyce", "kamień"];
    player1 = player1.toLowerCase();
    player2 = player2.toLowerCase();

    if (!validMoves.includes(player1) || !validMoves.includes(player2)) {
        return "Błędne informacje";
    }

    if (player1 === player2) {
        return "Remis";
    }

    const winningMoves = {
        kamień : "nożyce",
        papier : "kamień",
        nożyce : "papier"
    };

    return winningMoves[player1] === player2 ? "Gracz 1 wygrał" : "Gracz 2 wygrał";

}
let player1 = "papier";
let player2 = "kamień";
console.log(rockPaperScissors(player1, player2));