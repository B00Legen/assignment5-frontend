function getAge(currentYear, birthYear) {
	return currentYear - birthYear;
}

let userProfile = {
	name: "Alfredo",
	birthYear: 1970,
	isDeveloper: false,
	hobbies: ["Soccer", "Ping-Pong"]
};

document.getElementById("userForm").addEventListener("submit", (e) => {
	e.preventDefault();
    
    let name = document.getElementById('name').value;
    let birthYear = document.getElementById('birthYear').value;
	
	if (name != "") {
		userProfile.name = name;
	}
	userProfile.birthYear = birthYear;
	
	username.innerHTML = userProfile.name;
	age.innerHTML = getAge(2026, userProfile.birthYear);
});

document.getElementById("hobbyForm").addEventListener("submit", (e) => {
	e.preventDefault();
	
	let hobby = document.getElementById("hobby").value;
	
	if (hobby != "") {
		let li = document.createElement("li");
		li.textContent = hobby;
		document.querySelector('ul').appendChild(li);
	}
});

document.getElementById("remover").addEventListener("click", (e) => {
	e.preventDefault();
	
	document.querySelector('ul li:last-child').remove();
});
