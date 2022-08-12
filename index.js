const translateButton = document.getElementById("translate-button");
const textarea = document.getElementById("textarea");
const translatedTextArea = document.getElementById("translated-text-area");

translateButton.addEventListener("click", translate);

function translate() {
	const message = textarea.value;
	fetch(`https://api.funtranslations.com/translate/yoda.json?text=${message}`)
		.then((res) => res.json())
		.catch((err) => console.log(err))
		.then((res) => {
			translatedTextArea.style.display = "block";
			translatedTextArea.innerText = res.contents.translated;
		});
}
