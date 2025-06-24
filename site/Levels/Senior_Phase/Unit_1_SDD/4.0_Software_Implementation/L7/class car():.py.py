class car():  # Define the class (a blueprint for car objects)

    def __init__(self, make, model, year):  # Define the constructor and set up properties (attributes)
        self._make = make
        self._model = model
        self._year = year

    def getDetails(self):  # Define a method (a function that belongs to the class)
        return self._make, self._model, self._year  # Return the attributes so they can be accessed outside the object
    
    @property
    def make(self):
        return self._make
    
    @make.setter
    def make(self, new_make):
        if new_make != "":
            self._make = new_make
    

#mycar = car("Toyota", "Yaris", 2018)  # Create an object of the car class and pass in the arguments

#print(mycar.getDetails())  # Call the method and print the returned details

mycar = car("Toyota", "Yaris", 2018)   # Creating the object

print(mycar.make)                      # Uses the getter method (property)

mycar.make = "Honda"                   # Uses the setter method (property)

print(mycar.getDetails())              # Calls a normal method