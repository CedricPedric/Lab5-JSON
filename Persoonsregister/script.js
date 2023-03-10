import data from './opdracht1_bijlage.json' assert { type: "json"};
console.log(data["voornaam"]);

for (var key in data) {
    if (data.hasOwnProperty(key)) {
        const text = document.createElement("h2");
        text.appendChild(document.createTextNode(`${key} : ${data[key]}`))
        document.body.appendChild(text);
    }
}
    