// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

def find_first_vowel_index(input_string):
    vowels = "aeiouAEIOU"
    for index, char in enumerate(input_string):
        if char in vowels:
            return index
    return -1  # Return -1 if no vowel is found in the input string

# Example usage:
input_string = input("Enter a string: ")
result = find_first_vowel_index(input_string)
if result != -1:
    print(f"The index of the first vowel in the string is: {result}")
else:
    print("No vowel found in the input string.")

// Critique the code output. 
// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 

// First of all, this is in python, not JavaScript. I'm not really that surprised that the code is in Python as that is a common coding language.
// As far as I can tell, the AI understood the prompt and is attempting to return the index of the first vowel in the string.
// I like how despite it being a different coding language, I can still infer a lot of the basic concepts of the code. I like how the code defines what characters are accepted as vowels. Both the lowercase and the uppercase values are included. I also like how it defines a value for strings that do not meet its conditions, and then uses that value to shorten the code. These are strategies I may want to take note of for the future.
// As I don't know the language, I do not like that it is in Python. Since I'm only familiar with JavaScript, I would probably need to specify that I would like the code to be in JavaScript.
// As I am unfamiliar with Python, I do not know if this code will work. However, there is an f on line 20 that is outside of the string in the output, and I believe this may be a mistake.
// I probably would have taken a different approach if I had never seen this code before. I would probably have defined each vowel separately and checked for them individually with ||. The code would have been longer and messier, and using the strategies offered by this code would probably make it shorter and easier to read.