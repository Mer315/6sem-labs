// create file
nano extra2.l

// code
%{
#include <stdio.h>

int chars = 0;
int spaces = 0;
int tabs = 0;
int words = 0;
%}

%%

[ \t\n]+
{
    int i;

    for(i = 0; yytext[i] != '\0'; i++)
    {
        if(yytext[i] == ' ')
            spaces++;
        else if(yytext[i] == '\t')
            tabs++;
    }
}

[^ \t\n]+
{
    chars += yyleng;
    words++;
}

%%

int yywrap()
{
    return 1;
}

int main()
{
    printf("Enter text:\n");
    yylex();

    printf("\nCharacters = %d\n", chars);
    printf("Spaces = %d\n", spaces);
    printf("Tabs = %d\n", tabs);
    printf("Words = %d\n", words);

    return 0;
}

//compile
flex extra2.l
gcc lex.yy.c -o extra2 -lfl

// run
./extra2
