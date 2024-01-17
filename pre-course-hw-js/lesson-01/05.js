let rule = "Ещё не родился тот человек, который поставил бы цель и не смог бы стать программистом.";

switch (true) {
    case rule.length < 25:
        console.log("Все таки нет правил без исключения")
        break;
    case rule.length === 25:
        console.log("50 на 50")
    default: console.log("У меня 100 пудов все получиться")
}