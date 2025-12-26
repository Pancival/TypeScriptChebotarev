class User {
	userName;
	surname;
	age;

	constructor(userName, surname, age) {
		this.userName = userName;
		this.age = age;
		this.surname = surname;
	}

	setAge(age) {
		this.age = age;
	}

	getAge() {
		return this.age;
	}
}
