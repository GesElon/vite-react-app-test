import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

console.log(math)

function parseFormula(formula) {
const regex = /([A-Z][a-z]*)(\d*)/g;
const counts = {};
let match;
while ((match = regex.exec(formula)) !== null) {
const element = match[1];
const count = match[2] ? parseInt(match[2]) : 1;
counts[element] = (counts[element] || 0) + count;
}
return counts;
}


function parseSide(side) {
return side.split('+').map(s => s.trim());
}


function buildMatrix(lhs, rhs) {
const species = lhs.concat(rhs);
const elements = Array.from(new Set(species.flatMap(sp => Object.keys(parseFormula(sp))))).sort();
const matrix = elements.map(element => {
return species.map(sp => {
const count = parseFormula(sp)[element] || 0;
return lhs.includes(sp) ? count : -count;
});
});
return { matrix, species };
}


function gcd(a, b) {
return b === 0 ? a : gcd(b, a % b);
}


function lcm(a, b) {
return (a * b) / gcd(a, b);
}


function lcmArray(arr) {
return arr.reduce((acc, val) => lcm(acc, val), 1);
}


function balanceEquation(equation) {
const [lhs, rhs] = equation.split('=');
const lhsParts = parseSide(lhs);
const rhsParts = parseSide(rhs);
const { matrix, species } = buildMatrix(lhsParts, rhsParts);


// Using math.js for linear algebra
const mat = math.matrix(matrix);
const nullSpace = math.nullspace(mat);
if (nullSpace.size()[1] === 0) throw new Error('No solution found');


let coeffs = nullSpace._data.map(row => row[0]);
const denominators = coeffs.map(x => math.fraction(x).d);
const commonDenominator = lcmArray(denominators);
const ints = coeffs.map(x => Math.round(x * commonDenominator));


const lhsStr = lhsParts.map((sp, i) => `${ints[i]} ${sp}`).join(' + ');
const rhsStr = rhsParts.map((sp, i) => `${ints[i + lhsParts.length]} ${sp}`).join(' + ');
return `${lhsStr} = ${rhsStr}`;
}


// Example usage
console.log(balanceEquation("H2 + O2 = H2O"));

export default () => <p>Meow</p>;