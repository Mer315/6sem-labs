// create file
nano exprog3.l

//code
%{
#include <stdio.h>
#include <stdlib.h>
%}

%%

[-]?[0-9]+
{
    int n = atoi(yytext);

    if(n > 0)
        printf("Positive Integer\n");
    else if(n < 0)
        printf("Negative Integer\n");
    else
        printf("Zero\n");
}

[ \t\n]+ ;

.
{
    printf("Invalid Input\n");
}

%%

int yywrap()
{
    return 1;
}

int main()
{
    printf("Enter an integer:\n");
    yylex();
    return 0;
}

//compile
flex exprog3.l
gcc lex.yy.c -o exprog3 -lfl

//run
./exprog3
