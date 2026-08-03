#include <stdio.h>
#include <ctype.h>
#include <string.h>

char keywords[][20] = {
    "int", "float", "char", "if", "else",
    "while", "for", "return", "void", "double"
};

int isKeyword(char str[])
{
    int n = sizeof(keywords) / sizeof(keywords[0]);

    for(int i = 0; i < n; i++)
    {
        if(strcmp(str, keywords[i]) == 0)
            return 1;
    }

    return 0;
}

int main()
{
    char input[1000];

    printf("Enter a C statement:\n");
    fgets(input, sizeof(input), stdin);

    int i = 0;

    while(input[i] != '\0')
    {
        if(isspace(input[i]))
        {
            i++;
            continue;
        }

        if(isalpha(input[i]) || input[i] == '_')
        {
            char token[50];
            int j = 0;

            while(isalnum(input[i]) || input[i] == '_')
            {
                token[j++] = input[i++];
            }

            token[j] = '\0';

            if(isKeyword(token))
                printf("%s --> Keyword\n", token);
            else
                printf("%s --> Identifier\n", token);
        }

        else if(isdigit(input[i]))
        {
            char num[50];
            int j = 0;

            while(isdigit(input[i]))
            {
                num[j++] = input[i++];
            }

            num[j] = '\0';

            printf("%s --> Constant\n", num);
        }

        else if(strchr("+-*/=%<>!", input[i]))
        {
            printf("%c --> Operator\n", input[i]);
            i++;
        }

        else if(strchr("(){}[],;#", input[i]))
        {
            printf("%c --> Special Symbol\n", input[i]);
            i++;
        }

        else
        {
            printf("%c --> Unknown\n", input[i]);
            i++;
        }
    }

    return 0;
}


//to run it
nano prog2.c
gcc prog2.c -o prog2
./prog2
