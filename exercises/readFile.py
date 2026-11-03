# Debug Visualizer: New View

myFile = open('C:\\Users\\AfzalTAS\\Desktop\\node js\\exercises\\asd.txt',"r")

# data = myFile.read()
data = myFile.readline()
line1 = myFile.readline()
line2 = myFile.readline()


if "Khan" in line1:
    print("this is afzal Khan line  "+line1)


while True:
    line = myFile.readline()
    if not line:
        break
    print(line)



print(line1+ " "+ line2)


#Closing the book: When you're done reading, it's essential to close the file using file.close() to make sure you're not wasting resources.



# f you want to read characters from a specific position in the file, you can use the seek() method. This method moves the file pointer (like a cursor) to a particular position. The position is specified in bytes, so you'll need to know the byte offset of the characters you want to read.

1
myFile.seek(10)  # Move to the 11th byte (0-based index)
print(myFile.read(5)) ## Read the next 5 characters


myFile.close()
