# input
with open("input.txt", "r") as file:
    reports = [line.strip().split() for line in file]

def validate(report):
    report = list(map(int, report))
    # Check if levels are either strictly increasing or strictly decreasing
    increasing = True
    decreasing = True
    difference = True
    for i in range(1, len(report)):
        if report[i] <= report[i - 1]:
            increasing = False
        if report[i] >= report[i - 1]:
            decreasing = False
    for i in range(1, len(report)):
        diff = abs(report[i] - report[i - 1])
        if diff < 1 or diff > 3:
            difference = False
    
    return (increasing or decreasing) and difference

def part_1(reports):
    safe_reports = 0
    for report in reports:
        if validate(report):
            safe_reports += 1
    return safe_reports

print(part_1(reports))
