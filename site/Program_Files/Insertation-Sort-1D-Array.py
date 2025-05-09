numbers = [23,78,32,1,36,97,53]

for i in range(1,len(numbers)):

    temp = numbers[i] 

    j = i - 1 

    while j >= 0 and numbers[j] > temp:

        numbers[j + 1] = numbers[j]

        j -= 1

        numbers[j + 1] = temp



