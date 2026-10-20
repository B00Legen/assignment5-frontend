function getAge(currentYear, birthYear) {
	return currentYear - birthYear;
}

const userProfile = {
	name: "Alfredo",
	birthYear: 1990,
	isDeveloper: false,
	hobbies: ["Soccer", "Ping-Pong"]
};

console.log(userProfile);
userData.innerHTML = userProfile.name + " is " + getAge(2026, userProfile.birthYear) + " years old";
userData.innerHTML += " and has " + userProfile.hobbies.length + " hobbies";
