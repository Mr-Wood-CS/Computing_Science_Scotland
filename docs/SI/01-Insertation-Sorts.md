# Insertation Sorts

!!! info "What you need to Know"

	Describe, exemplify, and implement insertation sorts
	
	Read and explain code that uses constructs appropriate to this level.

## Explanantion

An insertion sort traverses an array from the second element to the last. 

Each element is compared to the elements before in turn, working backwards down the list.  Values are swapped until the element being compared is placed in order

Consider the following  array

<figure markdown="span">
  ![img 1](../Images/Insertation-Sort-1.png){ width="800" }
</figure>

### Insertion Sort - Iteration 1

Start with element 1 of the list to be sorted.  __This value is temporarily stored__.

<figure markdown="span">
  ![img 2](../Images/Insertation-Sort-2.png){ width="800" }
</figure>

If the temp value is smaller than the value before it (element 0), then the value before it, is copied to the right (element 1).

<figure markdown="span">
  ![img 3](../Images/Insertation-Sort-3.png){ width="800" }
</figure>


Each value, to the left of the element (__where the temp value was originally stored__) is compared until :

	* The value being compared is smaller that the stored temp value or 
 
 	* the start of the list has been reached

When either of the above is true, the temp value is copied back into the list at the previous position.

<figure markdown="span">
  ![img 4](../Images/Insertation-Sort-4.png){ width="800" }
</figure>

### Insertion Sort - Iteration 2

The next value (__99__) is copied into the temp.

When the next value (__99__) is examined, the value before it (__45__) is smaller, __so no further action is required__

### Insertion Sort - Iteration 3

The next value (7) is copied into the temp.

When the temp value (7) is compared with element 2 (99) , it is smaller so 99 is copied into element 3

When the temp value (7) is compared with element 0 (23), it is smaller so 23 is copied into element 1

!!! example
	```Python
 
		def insertion_sort(arr):
		# Go through each item in the list, starting from the second one
		for i in range(1, len(arr)):
			# Store the current number in a temporary variable
			current_number = arr[i]
			# Set j to be one position before i
			j = i - 1
		
			# Move numbers in the sorted part of the list to the right
			# until we find the right place for the current number
			while j >= 0 and arr[j] > current_number:
			arr[j + 1] = arr[j]
			j -= 1
		
			# Place the current number in its correct position
			arr[j + 1] = current_number
   
		return arr
		
		# Example list
		numbers = [7, 2, 5, 3, 4]
		print("Before sorting:", numbers)
		print("After sorting:", insertion_sort(numbers))

	```
