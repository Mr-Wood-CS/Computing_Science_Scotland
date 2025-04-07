# Introducing Python

<div class="grid cards" markdown>

- :fontawesome-brands-raspberry-pi: [__RPI Code Editor__](https://my.raspberrypi.org/student-login?loginChallenge=3ec3b691205040d696c6d96e8ca6379a"){:target="_blank"}

</div>

## Using the Raspberry Pi Code Editor

The Raspberry Pi Code Editor is a tool designed to help you write and run Python code on your Raspberry Pi. It provides a simple and user-friendly interface where you can create new Python programs, edit existing ones, and see the results immediately. 

You can use it to practice writing Python, explore different programming concepts, and even work with hardware projects. The editor makes it easy for both beginners and experienced programmers to get started with coding on the Raspberry Pi.

## Outputs

Python allows us to output all kinds of things such as graphics and text. To simply output some text to the screen we can use the print() instruction. 

``` python
print(“Hello World!”)
```

The input() command allows us to enter some text into our program. We can combine input() with other commands: 

``` { .python .annontate }
print(input(“What is your name?”) #(1)
```

1.  :book:
**This will make Python repeat back the name you type in.**

## Variables

Variables are a way of allowing the computer to remember a single item of data that has been input.

``` { .python .annontate }
yourName = input(“Who are you?”) #(1)
print(yourname) #(2)
```

1.  :book:
**The computer will ask you to enter your name i.e. `Joe Bloggs`. This will then be stored in the variable `"yourName"`**
2.  :book:
**This will then display (print) your variable onto the screen.**

!!! question "Project 1: Introducing Python"



    ??? info "Turing - Area of a Triangle"

        You can calculate the area of a triangle using the formula 
        
        `area = half base times height.`
        
        We need to enter Python commands to perform this calculation

        Step 1 - First we need to input the values for base and height and make them integer numbers.

        Add the code below to your project

        ``` { .python .annontate }
        base = int(input(“What is the length of the base? ”))  #(1)
        height =int(input(“Height?”))
        ```

        1.  :man_raising_hand:
        This part shows a question on the screen. The question asks the user, “What is the length of the base?” and waits for the user to type an answer. The answer is converted into a number using the 'int()' keyword and stored in the `base` variable so that the computer can use it again later.

        ```{ .python .annontate }
        print(base* height)/ 2 #(1)
        ```

        1.  :man_raising_hand:
        This part shows a question on the screen. The question asks the user, “What is the length of the base?” and waits for the user to type an answer. The answer is converted into a number using the 'int()' keyword and stored in the `base` variable so that the computer can use it again later.

        Congratulations , You have just carried out a calculation using the two variables (`base and height`)and printed the result on the screen!

    ??? info "Hopper  - Temperature Convertor"

          ==General Problem==

          Convert the temperature from `degrees celcius` to `degrees farenhiet`

          To complete this algorithm we will need a single variable called `“C”` and we are going to carry out calculations and change the value it is storing one step at a time.

          To convert from Centigrade to Farenheit:

          1. Multiply C by 9,
          2. Divide the answer by 5
          3. Add 32 to the answer

          ==Instructions==

          Step 1 - 🌡️ Get the Temperature:

          ```{ .python .annontate }
          C = int(input(“What is the temperature in C? ”)) #(1)
          ```

          1.  
          Ask the user to enter the temperature.
          The answer is converted into a number using the `int()` keyword and stored in the `C` variable so that the computer can use it again later.

          Step 2 - 🧮 Create the Calculation

          ```{ .python .annontate }
          C = C * 9  #(1)
          C = C / 5  #(2)
          F = C + 35 #(3)
          ```

          1. This takes the value in C, multiplies it by 9 and stores the answer back in C again. `Now C contains this new answer.`
          2. This takes the previous answer stored in `C`, divideds it by 5 and saves it back into `C`.
          3. Add 32 to the last answer and store it back into C. The number that is
          now stored in the variable C is actually the temperature converted into ==degrees
          Fahrenheit!==

          Step 3 - 🖥️ Display the Answer
          ``` python
          print (C)
          ```
          
            







 
