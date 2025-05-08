# Round (Pre-Defined Functions)
Using a round function, we can round a real number either:

* To the nearest whole number
  
* To a certain number of decimal places.
  
To round to the nearest whole number (integer):

!!! example "This code would display the number 3."

	```python linenums="1"
	
		num1 = round(3.14159265)
  
		print(num1)

	```   

To round to 2 decimal places:

!!! example "This code would print 3.14."

	```python linenums="1"
	
		num2 = round(3.14159265, 2)
		
		print(num2)

	```   
 
We could round to any number of decimal places by adding it as a parameter in brackets:

!!! example "This code would round to 5 decimal places (3.14159)."

	```python linenums="1"
	
		num3 = round(3.14159265, 5)
		
		print(num3)

	```   