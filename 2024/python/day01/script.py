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

# sort lists
left.sort()
right.sort()

# variable to hold the distances between left and right values
distance = 0

# loop through length of lists
for i in range(len(left)):
    # absolute value of difference to handle when right is larger
    distance += abs(left[i] - right[i])

print(distance)