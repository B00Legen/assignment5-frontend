let userProfile = {
	name: "Alfredo",
	birthYear: 1970,
	isDeveloper: false,
	hobbies: ["Soccer", "Ping-Pong"]
};

function updateUser(name, birthYear) {
	userProfile.name = name;
	userProfile.birthYear = birthYear;
	if (name != "") {
		userData.innerHTML = userProfile.name;
	}
}

document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();
    let name = document.getElementById('name').value;
    let birthYear = document.getElementById('birthYear').value;
	updateUser(name, birthYear);
});
