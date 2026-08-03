# Common Commands for All Flex Programs

## Install Flex (Only Once)

If Flex is not installed, run:

```bash
sudo apt update
sudo apt install flex bison
```

---

## Workflow for Every `.l` Program

### Step 1: Create the Lex File

```bash
nano filename.l
```

Paste the program, then save and exit:

- **Ctrl + O** → Save
- **Enter** → Confirm filename
- **Ctrl + X** → Exit

---

### Step 2: Compile the Program

```bash
flex filename.l
gcc lex.yy.c -o outputname -lfl
```

Replace:
- `filename.l` with your Lex file name.
- `outputname` with the executable name you want.

Example:

```bash
flex prog3.l
gcc lex.yy.c -o prog3 -lfl
```

---

### Step 3: Run the Program

```bash
./outputname
```

Example:

```bash
./prog3
```

---

## Summary

This exact sequence will work for all your `.l` (Flex) programs in the Compiler Design Lab.

```bash
nano filename.l

flex filename.l

gcc lex.yy.c -o outputname -lfl

./outputname
```
