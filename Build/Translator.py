def text_to_binary():
    def string_to_binary(text):
        return ' '.join(format(ord(char), '08b') for char in text)

    print("Welcome to the Text to Binary Converter!")
    user_input = input("Enter the text you want to convert to binary: ")
    binary_output = string_to_binary(user_input)
    print(f"Binary representation: {binary_output}")

if __name__ == "__main__":
    text_to_binary()
