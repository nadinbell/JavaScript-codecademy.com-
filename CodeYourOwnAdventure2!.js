var user = prompt("What do you want for breakfast: OMELETTE, FRIED EGGS, OATMEAL").toUpperCase();
switch(user) {
        case 'OMELETTE':
            var count = prompt("Is it enough 3 eggs for you?").toUpperCase();
            var milk = prompt("Is it enough half glass of milk?").toUpperCase();
            if (count === 'YES' && milk === 'YES') {
                console.log("Your choise is: " + user + " Enjoy your meal!"); 
            } else {
                console.log("Actually, you have no choice=) Enjoy your meal with 3 eggs and half glass of milk");
            }
        break;
        case 'FRIED EGGS':
            console.log("You choose " + user + " Enjoy!");
        break;
        case 'OATMEAL':
            var water = prompt("Cook it on water?").toUpperCase();
            var milky = prompt("Shoud I add some milk?").toUpperCase();
            if (water === 'YES' || milky === 'YES') {
                console.log("Your healthy breakfast is ready! Enjoy your " + user);
            } else {
                console.log("Are you a horse?");
            }
        break;
        default:
            console.log("Anything else?");
        break;
}
        