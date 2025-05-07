# Explanation

Imagine you have been asked to create a program that asks for 3 test scores, adds them together, and prints out the total.

It could probably start with something like this:

``` python linenums="1"

score1 = int(input("Please enter first score"))
score2 = int(input("Please enter second score"))
score3 = int(input("Please enter third score"))
```

What happens when we need a program that asks for 20 scores? Or 100? 

We could write out every variable, but it would be a very long program, and the chance for mistakes is high. 

Instead, we need an array.

An array is simaler to a variable. 

Only this variable, can store multiple values. 

This is called an array. Where a normal variable stores data in one memory location , an array reserves a whole set of memory locations, one after the other. 

In `Python` an array is known a list:

<figure markdown="span">
    ![List Example](../Images/List2.png){ width="400" }
</figure>

In the example array above, there are 9 elements. Each item makes up one element of the array. 

We start counting the elements from 0 (instead of 1). 

So element 0 in that array is 15, element 1 is 20, and element 7 is 19 and so on.

Like variables, arrays have data types (a string array, an integer array, a Boolean array, etc.)

When you see the term ==data structure==, this refers to a ==variable== or an ==array==.