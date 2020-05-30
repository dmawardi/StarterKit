// Import CSS
import "./index.css";
// Import API functions
import { getUsers, deleteUser } from "./api/userApi";

// Populate table of users via API call
getUsers().then((result) => {
	console.log(result); // eslint-disable-line no-console
	let usersBody = "";

	result.forEach((user) => {
		usersBody += `<tr>
		<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
		<td>${user.id}</td>
		<td>${user.firstName}</td>
		<td>${user.lastName}</td>
		<td>${user.email}</td>
		</tr>`;
	});

	document.getElementById("users").innerHTML = usersBody;

	// Create onclick handler for all delete links
	const deleteLinks = global.document.getElementsByClassName("deleteUser");

	// Create an array from deletelinks and create on click event
	Array.from(deleteLinks, (link) => {
		link.onclick = function (event) {
			event.preventDefault();
			const element = event.target;
			deleteUser(element.attributes["data-id"].value);
			const row = element.parentNode.parentNode;
			row.parentNode.removeChild(row);
		};
	});
});
