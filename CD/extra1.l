// create file
nano extra1.l

//code 
%{
#include <stdio.h>

int a = 0, e = 0, i = 0, o = 0, u = 0, total = 0;
%}

%%

[aA]   { a++; total++; }
[eE]   { e++; total++; }
[iI]   { i++; total++; }
[oO]   { o++; total++; }
[uU]   { u++; total++; }

\n
{
    printf("\nNumber of vowels = %d\n\n", total);
    printf("Vowel counts:\n");
    printf("a : %d\n", a);
    printf("e : %d\n", e);
    printf("i : %d\n", i);
    printf("o : %d\n", o);
    printf("u : %d\n", u);
}

. ;

%%

int yywrap()
{
    return 1;
}

int main()
{
    printf("Enter a string:\n");
    yylex();
    return 0;
}


//compile
flex extra1.l
gcc lex.yy.c -o extra1 -lfl

// run
./extra1
