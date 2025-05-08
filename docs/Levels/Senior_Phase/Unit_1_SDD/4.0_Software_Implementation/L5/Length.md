# Length (Pre-Defined Functions)

The length function, shortened to len() returns the length - the number of characters - in a string.

__For example, len(“hello”) is 5, and len(“abc”) is 3:__

This example calculates the length of a word, stores it in a variable called “how_long”, and displays it on the screen.

!!! example

	```python linenums="1"
	
		# Stores and displays how many characters are in the word “hello”
		how_long = len("hello")
  
		print(how_long)

	```

You could also use len() to ask the user to enter a password, and tell them whether their password is long enough:
    
!!! example

	```python linenums="1"
	
		# Ask the user to enter their password
		passwd = input("Please enter your password")
		
		# The password must be at least 6 characters long
		if len(passwd) > 6:
		    print("Your password is long enough")
		else:
		    print("Your password is NOT long enough")

	```    

__This problem could be refined further by using a loop and asking the user to keep entering their password until it is valid.__