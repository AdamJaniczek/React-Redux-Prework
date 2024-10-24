let min = 1;
let max = 10;
let random = Math.random();
let result = Math.floor(random * (max - min + 1) + min);
let userNumber = Number(prompt("Podaj liczbę z zakresu od: " + min + " do: " + max));
if (result === userNumber) {
    alert("Super odgadłeś wylosowaną liczbę: " + result);
} else {
    alert("Niestety nie zgadłeś liczby. Wylosowana liczba to: " + result);
}