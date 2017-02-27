# The Problem
## Original Questions
My initial question was to determine some function or computer function to give the numeric value of a certain index of pi after the decimal point. The idea to create this function stems from the already existing functions that can generatee pi using infinite sums.

"Can you create a pi indexing function, p, such that p(i) = the numeric value of of pi, who's position was that many digits away from the ones place (i for this index)? The function should be able to calculate this value for any index. For example, pi = 3.1415926... so p(0) = 3, p(3) = 1, p(5) = 9, p(3424732432) = ???"

## History
I was delighted to see that the problem was attempted and solved fairly recently. I have yet to implement the Bailey-Borwein-Plouffe (BBP) formula, as it was originally created to work in base 16 and can output the N-th digit of pi without the sue of previous digits. Even more shocking than the fact this formula actually exists and works, is some of the drama I discovered behind it. The journey to find the BBP formula began with Simon Plouffe in 1974. In 1992-1993 he created a program that was able to find pi in hexadecimal. In a (story written by Plouffe)[http://math-fail.com/2010/07/the-bailey-borwein-plouffe-formula.html] he describes his mistake in accepting collaboration with Peter Borwein and David H. Bailey when they didn't contribute to the discovery. The move to include the two was an odd one, effectively a failed attempt to gain a proffesorship job at Simon Fraser University. The 2003 letter ends with the lines "Why do I write this? To tell the truth and also the arrogance of those
people makes me sick. ... Will I gain something from this? I don’t care, I have nothing to loose." A rather morbid but real truth to some of aspects of collaboration.

## Resources
The paper published for the BBP formula can be found (here)[http://numbers.computation.free.fr/Constants/Algorithms/nthdecimaldigit.pdf].

Another paper, published (solely by Plouffe in 1996)[http://www.lacim.uqam.ca/~plouffe/Simon/articlepi.html], discusses another computer formula to generate pi, though not the n-th digit of.
