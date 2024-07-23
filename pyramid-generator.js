const character = "#";
const count = 8;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
// for (let i = 1; i <= count; i++) {
//   if (inverted) {
//     rows.unshift(padRow(i, count));
//   } else {
//     rows.push(padRow(i, count));
//   }
// }

while (rows.length < count) {
    if (inverted) {
            rows.unshift(padRow(rows.length + 1, count));
          } else {
            rows.push(padRow(rows.length + 1, count));
          }
//   rows.push(padRow(rows.length + 1, count));
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);