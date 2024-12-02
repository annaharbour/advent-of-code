const fs = require('fs');

function parseInput(path) {
    // Read file contents and split into lines
    const fileContents = fs.readFileSync(path, 'utf8');
    const result = fileContents.split('\n').map(line => line.trim());
    return result;
}
 
function main() {
    const inputPath = 'input.txt';
    const locations = parseInput(inputPath);
    const left = []
    const right = []

    for (let location of locations) {
        const [l, r] = location.split(/\s+/);
        left.push(Number(l));  
        right.push(Number(r)); 
    }

    // Sort left and right
    left.sort((a, b) => a - b); 
    right.sort((a, b) => a - b);  

    let distances = 0 
    for(let i = 0; i < left.length; i++){
        distances += Math.abs(left[i] - right[i]);
    }
    console.log(distances)
}

main();
