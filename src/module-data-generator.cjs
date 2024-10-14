const fs = require('fs');

const count = Number(process.argv[2]); // liczba obiektów
let cars = [];  // tablica z markami samochodów 

fs.readFile('./src/cars.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    // Podział danych z pliku tekstowego na poszczególne linie
    cars = data.split("\n").map(s => s.trim()).filter(n => n.length !== 0);

    let content = "export const data = [";
    for(let i = 0; i < count; i++){
        let car = cars[~~(Math.random() * cars.length)];
        content += `{
            id: ${i + 1},
            name: "${car}",
            regNumber: "XYZ${Math.floor(1000 + Math.random() * 9000)}",
            year: ${Math.floor(Math.random() * 20 + 2000)},
            color: "${['red', 'blue', 'green', 'black'][Math.floor(Math.random() * 4)]}"
        },`; 
    }
    content += "];";

    // Zapisz dane do pliku module-data.js
    fs.writeFile('./src/module-data.js', content, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("module-data.js wygenerowany");
    });
});