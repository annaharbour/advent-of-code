# input
with open("input.txt", "r") as file:
    locations = [line.strip() for line in file]

# initialize left and right lists
left = []
right = []

# split location distance values on left and right
for location in locations:
    l, r = location.split()
    # left side goes into left list
    left.append(int(l))
    # right side goes into right list
    right.append(int(r))

# Calculate a total similarity score by adding up each number in the left list after multiplying it by the number of times that number appears in the right list

# create a frequency map for the right list
right_map = {}

for num in right:
    if num in right_map:
        right_map[num] += 1
    else:
        right_map[num] = 1

score = 0
# loop through left list
for num in left:
    if num in right_map:
        # multiply number by frequency in right list
        score += num * right_map[num]

print(score)