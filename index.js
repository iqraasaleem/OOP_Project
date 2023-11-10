import inquirer from "inquirer";
// chat application
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        const answer = await inquirer.prompt({
            type: "list",
            message: "whom do you like to talk with",
            name: "select",
            choices: ["yourself", "others", "student", "someone you already know"],
        });
        if (answer.select == "yourself") {
            console.log("hello ap khud se bt kerhey hain".toLocaleUpperCase());
            console.log("mai ab theak hunn".toLocaleUpperCase());
        }
        if (answer.select == "others") {
            console.log("kese hain app?".toLocaleUpperCase());
            console.log("long time no see..".toLocaleUpperCase());
        }
        if (answer.select == "someone you already know") {
            console.log("ap jantey hain kaun hun mai?".toLocaleUpperCase());
            console.log("wese mai apko nh jantaa! ".toLocaleUpperCase());
        }
        if (answer.select == "student") {
            const answer = await inquirer.prompt({
                type: "input",
                message: "ap kis student se bt karna chahtey hain",
                name: "student",
            });
            const student = persons.students.find(value => value.name);
            if (!student) {
                const name = new Student(answer.student);
                persons.addStudent(name);
                console.log(`hello i am ${name.name}, or mai theak hun.`);
                console.log(persons.students);
            }
            if (student) {
                const name = new Student(answer.student);
                persons.addStudent(name);
                console.log(`hello i am ${student.name}, or mai theak hun.`);
                console.log(persons.students);
            }
            ;
        }
    } while (true);
};
programStart(persons);
