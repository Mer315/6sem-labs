//create file
nano extra4.l

//code
%{
#include <stdio.h>

int abc = 0;
int xyz = 0;
int pqr = 0;
%}

%%

abc     { abc++; }
xyz     { xyz++; }
pqr     { pqr++; }

[ \t\n]+ ;

. ;

%%

int yywrap()
{
    return 1;
}

int main()
{
    printf("Enter text:\n");
    yylex();

    printf("\nPattern abc found %d %s\n",
           abc,
           (abc == 1) ? "time" : "times");

    printf("Pattern xyz found %d %s\n",
           xyz,
           (xyz == 1) ? "time" : "times");

    printf("Pattern pqr found %d %s\n",
           pqr,
           (pqr == 1) ? "time" : "times");

    return 0;
}

//compile and run
flex extra4.l
gcc lex.yy.c -o extra4 -lfl
./extra4
