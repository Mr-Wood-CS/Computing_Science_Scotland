high_scores = [ ["Meena", "58"],["Joe", "50"],["Patrick", "27"],["Marta", "25"],["Andrew", "23"]]

for i in range(1, len(high_scores)):
    key = high_scores[i]
    j = i - 1


while j >= 0 and int(high_scores[j][1]) < int(key[1]):
    high_scores[j + 1] = high_scores[j]
    j -= 1
    high_scores[j + 1] = key

print(f"After pass {i}:")
 
print("Sorted High Scores:")
print(high_scores)
