function employeesManagers(obj){
    for(let segment in users){
        console.log(segment.toUpperCase());
        for(var i = 0; i < users[segment].length; i++){
            var charCount = users[segment][i].last_name.length + users[segment][i].first_name.length;
            console.log(i+1 + " - " + users[segment][i].last_name.toUpperCase() + ", " + users[segment][i].first_name.toUpperCase() + " - " + charCount)
        }
    }
}

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 employeesManagers(users);