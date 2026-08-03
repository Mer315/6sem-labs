%{
#include <stdio.h>
%}

ID      [a-zA-Z][a-zA-Z0-9]*
OP      [+\-*/=%]
SPEC    [.,;:(){}[\]]

%%

{ID}        { printf("%s\t: Identifier\n", yytext); }

{OP}        { printf("%s\t: Operator\n", yytext); }

{SPEC}      { printf("%s\t: Special Symbol\n", yytext); }

[ \t\n]+    ;

.           { printf("%s\t: Unknown\n", yytext); }

%%

int yywrap()
{
    return 1;
}

int main()
{
    yylex();
    return 0;
}

// to run
sudo apt install flex bison

nano prog3.l

flex prog3.l

gcc lex.yy.c -o prog3 -lfl

./prog3
