import data from './opdracht2_bijlage.json' assert { type: "json"};
console.log(data[1]["voornaam"]);

const line = document.createElement("hr");
document.body.appendChild(line)

for (const x in data){
    for (var key in data[x]) {
        if (data[x].hasOwnProperty(key)) {
            const text = document.createElement("h2");
            text.appendChild(document.createTextNode(`${key} : ${data[x][key]}`))
            document.body.appendChild(text);
        
        }
    }
    const line = document.createElement("hr");
    document.body.appendChild(line)
}

