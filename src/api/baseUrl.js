export default function getBaseUrl() {
	// If windows location hostname is localhost, then true
	const inDevelopment = window.location.hostname === "localhost";
	return inDevelopment ? "http://localhost:3001/" : "/";
}
