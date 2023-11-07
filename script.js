document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    const userScore = document.querySelector('.user');
    const botScore = document.querySelector('.bot');
    const botChoice = document.querySelector('.botChoice');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(Compare(button.textContent, BotChoice()))
            userScore.innerHTML = score.user;
            botScore.innerHTML = score.bot;
            console.log(botChoice)
        });
    });

    let RPS = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    const BotChoice = () => {
        let keys = Object.entries(RPS);
        let key = Math.floor(Math.random() * 3);
        return keys[key];
    }

    const Compare = (user, bot) => {
        user = user.toLowerCase();
        botChoice.innerHTML = `Bot chooses: ${bot[0]}`;

        if (user === bot[0]) {
            return "draw"
        } else if (user === bot[1]) {
            score.bot += 1;
            return "bot wins"
        } else {
            score.user += 1;
            return "user wins"
        }
    }

    const score = {
        user: 0,
        bot: 0
    }
});