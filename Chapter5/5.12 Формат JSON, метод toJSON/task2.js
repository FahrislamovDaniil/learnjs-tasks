let room = {
    number: 23
};
  
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;
  
console.log( JSON.stringify(meetup, function replacer(key, value) {
    if (value == meetup && key != '') {
        return undefined;
    } else {
        return value;
    }
}));