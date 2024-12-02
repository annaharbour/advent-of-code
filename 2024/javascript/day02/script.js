const fs = require('fs');

function parseInput(path) {
    // Read file contents and split into lines
    const fileContents = fs.readFileSync(path, 'utf8');
    const result = fileContents.split('\n').filter(line => line.trim() !== '').map(line => 
        line.trim().split(' ').map(Number) // Split by spaces and convert to numbers
    );
    return result;
}

function validate(levels){
    // The levels are either all increasing or all decreasing.
    const isIncreasing = levels.every((val, i) => i === 0 || val > levels[i - 1]);
    const isDecreasing = levels.every((val, i) => i === 0 || val < levels[i - 1]);
    // Any two adjacent levels differ by at least one and at most three.
    const fitsAdjDiff = levels.every((val, i) => {
        if (i === 0) return true;
        const diff = Math.abs(val-levels[i - 1])
        return 1 <= diff && diff <= 3
    })
    return (isIncreasing || isDecreasing) && fitsAdjDiff
}

function dampen(levels){
    for(let i = 0; i < levels.length; i++){
        const temp = [...levels]
        temp.splice(i, 1)
        if(validate(temp)){
            return true
        }
    }
    return false
}

function part1() {
    const inputPath = 'input.txt';
    const reports = parseInput(inputPath);
    // initialize counter for safe reports
    let safeReports = 0
    // validate levels and increment counter
    for(const levels of reports){
        if(validate(levels)){
            safeReports++
        }
    }
    console.log(safeReports)
}

function part2(){
    const inputPath = 'input.txt';
    const reports = parseInput(inputPath);
    let safeReports = 0
    for(const levels of reports){
        if(validate(levels)){
            safeReports++
        } else if (dampen(levels)){
            safeReports++
        }
    }
    console.log(safeReports)
    return safeReports
}

part1()
part2()