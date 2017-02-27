# insint - Instruction Interpolation
Is it possible to create a single mathematical polynomial function and use it to generate code? Let us suppose some function A(n) that we can loop through N amount of times where N is equal to the number of instructions we want to generate. Start with n = 1 and pass it into A. Suppose in this instance that A(1) = 21671. If we then store this value inside executable memory, the hex is seen as 54A7 and the binary representation is 0101010010100111. Notice that this is number is a 16-bit value. Can A(n) be modified so that for every value of n between 1 and N, we get an output that is a 16-bit AVR instruction?

# Purpose
The goal is to create a system of taking a program in instruction form and creating multiple polynomial functions to reproduce the program.

# Other Questions
+ If the system can be created logically, can a direct hardware implementation also be developed?
+ Can a hardware implementation use a chipset that generates an analog wave to hide this polynomial function?
+ Can another function other than a polynomial be used? Can a modified sine be used instead?
+ For large programs, equations may become equally as large. What methods exist for compression?

# Current Project Breakdown
+ Read values and partition into characters.
+ Store values in a single dimension array
+ Delete the file stream to conserve space
+ Generate some TeX to output a nice looking function

# Current Resources
+ https://en.wikipedia.org/wiki/Interpolation
+ https://en.wikipedia.org/wiki/Polynomial_interpolation
+ http://mathworld.wolfram.com/LagrangeInterpolatingPolynomial.html
