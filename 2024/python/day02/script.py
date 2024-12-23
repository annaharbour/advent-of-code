# input
with open("input.txt", "r") as file:
    reports = [line.strip().split() for line in file]

def dampener(report):
  for i in range(len(report)):
    temp = report[:]
    del temp[i]
    if validate(temp):
      return True
  return False

def validate(levels):
    levels = list(map(int, levels))
    # Check if levels are either strictly increasing or strictly decreasing
    increasing = True
    decreasing = True
    difference = True
    for i in range(1, len(levels)):
        if levels[i] <= levels[i - 1]:
            increasing = False
        if levels[i] >= levels[i - 1]:
            decreasing = False
    for i in range(1, len(levels)):
        diff = abs(levels[i] - levels[i - 1])
        if diff < 1 or diff > 3:
            difference = False
    
    return (increasing or decreasing) and difference

def part_1(reports):
    safe_reports = 0
    for report in reports:
        if validate(report):
            safe_reports += 1
    return safe_reports

def part_2(reports):
    safe_reports = 0
    for report in reports:
        if validate(report):
            safe_reports += 1
        elif dampener(report):
            safe_reports += 1
    return safe_reports

print(part_1(reports))
print(part_2(reports))
