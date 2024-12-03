const fs = require("fs");

const regex = /mul\((\d+),\s*(\d+)\)/g;
const regex2 = /(do\(\)|don't\(\)|mul\((\d+),\s*(\d+)\))/g;

function mul(x, y) {
	return x * y;
}

function parseInput(path) {
	const fileContents = fs.readFileSync(path, "utf8");
	const matches = [...fileContents.matchAll(regex)];
	return matches.map((match) => ({
		x: Number(match[1]), 
		y: Number(match[2]), 
	}));
}

function parseInput2(path) {
	const fileContents = fs.readFileSync(path, "utf8");
	const matches = [...fileContents.matchAll(regex2)];
	return matches
		.map((match) => {
			if (match[0] === "do()") {
				return { type: "do" };
			} else if (match[0] === "don't()") {
				return { type: "don't" };
			} else if (match[0].startsWith("mul")) {
				return {
					type: "mul",
					x: Number(match[2]), 
					y: Number(match[3]),
				};
			}
		})
		.filter(Boolean); 
}
function part1() {
	const inputPath = "input.txt";
	const unCorrupted = parseInput(inputPath);

	if (unCorrupted.length > 0) {
		const total = unCorrupted
			.map(({ x, y }) => mul(x, y))
			.reduce((sum, val) => sum + val, 0);
		console.log("Part 1 Answer:", total);
	} else {
		console.log("No valid inputs found.");
	}
}

function part2() {
	const inputPath = "input.txt";
	const instructions = parseInput2(inputPath);

	let isEnabled = true;
	let sum = 0;

	console.log("Instructions:", instructions);

	instructions.forEach((instruction) => {
		console.log("Processing instruction:", instruction);

		if (instruction.type === "do") {
			isEnabled = true; 
			console.log("Multiplication enabled");
		} else if (instruction.type === "don't") {
			isEnabled = false;
			console.log("Multiplication disabled");
		} else if (instruction.type === "mul" && isEnabled) {
			const result = mul(instruction.x, instruction.y);
			console.log(`Adding mul(${instruction.x}, ${instruction.y}) = ${result}`);
			sum += result;
		}
	});

	console.log("Part 2 Answer:", sum);
}

part1();
part2();
