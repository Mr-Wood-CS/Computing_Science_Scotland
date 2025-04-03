# Introducing Python
<style>
  #readTextButton {
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
  }

  #readTextButton:hover {
    background-color: #0056b3;
  }
</style>



## Using the Raspberry Pi Code Editor

The Raspberry Pi Code Editor is a tool designed to help you write and run Python code on your Raspberry Pi. It provides a simple and user-friendly interface where you can create new Python programs, edit existing ones, and see the results immediately. 

You can use it to practice writing Python, explore different programming concepts, and even work with hardware projects. The editor makes it easy for both beginners and experienced programmers to get started with coding on the Raspberry Pi.

## Outputs

Python allows us to output all kinds of things such as graphics and text. To simply output some text to the screen we can use the print() instruction. 

``` python
print(“Hello World!”)
```

## Inputs

The input() command allows us to enter some text into our program. We can combine input() with other commands: 

<button id="readTextButton">Read Text</button>

## Text-to-Speech Example

<select id="voiceSelect"></select>  
<button class="read-text" data-text="Hello! This is a text-to-speech example.">🔊 Read Aloud</button>  
<button id="pauseSpeech">⏸ Pause</button>  
<button id="resumeSpeech">▶ Resume</button>  
<button id="stopSpeech">⏹ Stop</button>  

<script>
  document.getElementById("readTextButton").addEventListener("click", function() {
    var text = "The input() command allows us to enter some text into our program. We can combine input() with other commands:"; // Replace with the text you want to be read
    var speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  });
</script>

``` python
print(input(“What is your name?”)
```

**This will make Python repeat back the name you type in.**

## Variables

Variables are a way of allowing the computer to remember a single item of data that has been input.

``` python
yourname = input(“Who are you?”)
```

Then enter your name. 

`This stores the  name you type in the variable i.e. “Joe Bloggs”`

``` python
print(yourname) 
```

**This will then print it out.**

!!! info "Area of a Triangle (Turing)"

    You can calculate the area of a triangle using the formula 
    
    `area = half base times height.`
    
    We need to enter Python commands to perform this calculation

    First we need to input the values for base and height and make them integer numbers.

    ``` python
    base = int(input(“What is the length of the base? ”))
    height =int(input(“Height?”))
    ```
    Breakdown 🚨

    ``` python
    base = int(input("Length of the base? "))
    ```

    `input("Length of the base? ")`: This part shows a question on the screen. The question asks the user, “What is the length of the base?” and waits for the user to type an answer.

    `int()`: This turns the answer into a number (because when you type an answer, it’s treated as text, not a number).

    `base =`: This stores the number you typed in a box called `base` so the computer can use it later. For example, if you type 5, the computer now knows that the length of the base is 5.

    ```python
    print(base / 2 * height)
    ```

    Congratulations , You have just carried out a calculation using the two variables (`base and height`)and printed the result on the screen!







 
