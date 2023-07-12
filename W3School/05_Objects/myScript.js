const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

function myFunction(){
    console.log
    console.log(person.fullName());

}

