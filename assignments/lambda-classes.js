// CODE here for your Lambda Classes

class Person {

    constructor(name, age, location, gender) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.location = location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {

    constructor(name, age, location, gender, speciality, favLanguage, catchPhrase) {
        super(name, age, location, gender);
        this.speciality = speciality;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        console.log(`Today we're learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} revieves a perfect score on ${subject}`);
    }

    changeGrade(student) {
        if (student.hasGraduated === true) {
            console.log(`${student.name} has already graduated`);
        }
        else {
            let diff = Math.random() * 100;
            if (Math.random < 0.5) {
                diff = diff * (-1);
            }

            if (student.grade + diff <= 0) {
                student.grade = 0;
            }
            else if (student.grade + diff >= 100) {
                student.grade = 100;
            }
            else {
                student.grade = student.grade + diff;
            }
            csonsole.log(`${student.name} has now a grade of ${student.grade}`);
        }
    }
}

class Student extends Person {

    constructor(name, age, location, gender, previousBackground, className, favSubjects) {
        super(name, age, location, gender);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.grade = (Math.random() * 100)
        this.hasGraduated = false;
    }

    listsSubjects() {
        console.log(favSubjects.join());
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }

    graduate() {
        if (grade > 70) {
            hasGraduated = true;
            console.log("Congratulations, you have graduated");
        }
        else {
            console.log("Do more assignments");
        }
    }
}

class Projectmanager extends Instructor {

    constructor(name, age, location, gender, speciality, favLanguage, catchPhrase, gradClassName, favInstructor) {
        super(name, age, location, gender, speciality, favLanguage, catchPhrase);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}s code on ${subject}`);
    }
}