//create
nano extra5.l

//code
%{
#include <stdio.h>
#include <string.h>

char words[100][50];
int len[100];
int count = 0;
%}

%%

[a-zA-Z]+
{
    int l = strlen(yytext);

    if(l > 5 && l < 10)
    {
        strcpy(words[count], yytext);
        len[count] = l;
        count++;
    }
}

[ \t\n]+ ;

. ;

%%

int yywrap()
{
    return 1;
}

int main()
{
    int i;

    printf("Enter the string:\n");
    yylex();

    printf("\nNo. of words with length > 5 and < 10 = %d\n\n", count);

    printf("Words with length > 5 and < 10:\n");
    printf("---------------------------------\n");

    for(i = 0; i < count; i++)
    {
        printf("%d. %s (length = %d)\n",
               i + 1,
               words[i],
               len[i]);
    }

    return 0;
}

//compile
flex extra5.l
gcc lex.yy.c -o extra5 -lfl

//run
./extra5
