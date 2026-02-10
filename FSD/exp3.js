const fs = require("fs");

// 1. Write to a file
fs.writeFile("demo.txt", "Hello, this is Node.js File Handling.", (err) => {
    if (err) throw err;
    console.log("File written successfully.");

    // 2. Read the file
    fs.readFile("demo.txt", "utf8", (err, data) => {
        if (err) throw err;
        console.log("File content:", data);

        // 3. Append data
        fs.appendFile("demo.txt", "\nThis is appended text.", (err) => {
            if (err) throw err;
            console.log("Data appended successfully.");

            // 4. Rename file
            fs.rename("demo.txt", "newDemo.txt", (err) => {
                if (err) throw err;
                console.log("File renamed successfully.");

                // 5. Delete file
                fs.unlink("newDemo.txt", (err) => {
                    if (err) throw err;
                    console.log("File deleted successfully.");
                });
            });
        });
    });
});
