var friends = {};

friends.bill = {
    firstName: "Bill",
    lastName: "Loodre",
    number: "+3800998766",
    address: ["Kiev", "Demiivska", "56", "app. 4"]
};

friends.steve = {
    firstName: "Steve",
    lastName: "Hill",
    number: "+3809765432",
    address: ["Lviv", "Svobody", "23", "app. 67"]
};

friends.valery = {
    firstName: "Valery",
    lastName: "Primary",
    number: "+4570988",
    address: ["Lutsk", "Revune", "34", "app. 89"]
};

var list = function (friends) {
    for (var key in friends) {
    console.log(key);
    };
};
    
var search = function(name) {
    for (var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};
                