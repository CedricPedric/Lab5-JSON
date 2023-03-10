import data from './opdracht2_bijlage.json' assert { type: "json"};


const line = document.createElement("hr");
document.body.appendChild(line)

for (const x in data){
    let div = document.createElement("div");
        document.body.appendChild(div);
        div.id = `div${x}`
    for (var key in data[x]) {
        if (data[x].hasOwnProperty(key)) {
            const text = document.createElement("p");
            div.appendChild(document.createTextNode(`${key} : ${data[x][key]}`))
            div.appendChild(text);
        }
    }
    const line = document.createElement("hr");
    div.appendChild(line)
}

var input = document.createElement("input");
input.type = "number";
document.body.appendChild(input);

var btn = document.createElement("button");
btn.innerHTML = "Click Here To Filter The Age"
btn.addEventListener("click", function () {
        ageFilter(input.value)
    });
document.body.appendChild(btn);

function ageFilter(givenAge){
    for (const y in data){
        if (data[y]["leeftijd"] < givenAge){
            const box = document.getElementById(`div${y}`);
            box.remove();
        }
    }
}




