# Complex Conditional Statements

## Explanation 

Sometimes conditions can be more complicated. The logical operators and, or and not can be added to make complex conditions.

Suppose we ask for a percentage, but it must be between 0 and 100. This could also be written as greater than or equal to 0, and less than or equal to 100.

* The number 53 meets this condition, because it is >= 0, and it is <= 100
* Although the number 110 is >= 0, it is not <= 100, so the condition is not true
* -273 is less than or equal to 100, but it is not >= 0, so the condition is not true



#### `and`

:   __Check if two conditions are both true__

	!!! example
	
		```python linenums="1"
	  		if age >= 17 and age <= 100:
	   			print(“You are between 17 and 100”)
		```

#### `or`

:   __Check if at least one (or both) of the conditions is true.__

	!!! example
	
		```python linenums="1"
			if weather == “rain” or weather == “cloudy”
				print(“It is not nice weather today”)
		```

#### `not`

:   __Check if a condition is not true.__

	!!! example
	
		```Python
			if not age < 17
				print(“You are not less than 17”)
				print(“So you must be at least 17 or over”)
		```
!!! warning "You __MUST__ to write the full condition out each time."

	!!! example "You can’t say:"
    
		```python
			if weather == “rain” or “cloudy”
		```

	!!! example "You must say:"

		```python
			if weather == “rain” or weather == “cloudy”
		```
