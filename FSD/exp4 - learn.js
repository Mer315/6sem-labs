const http = require("http")

const server = http.createServer((req, res) => {

  res.writeHead(200, { "Content-Type": "text/html" })

  if (req.url === "/") {
    res.write(`
      <h1>Food Delivery App</h1>
      <p>Restaurant: Food Palace</p>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Pasta</li>
      </ul>
      <a href="/order">Order Now</a>
    `)
  }

  else if (req.url === "/order") {
    res.write(`
      <h2>Order Placed Successfully!</h2>
      <p>Your food from Food Palace will be delivered soon.</p>
      <a href="/">Go Back</a>
    `)
  }

  else {
    res.write("<h2>Page Not Found</h2>")
  }

  res.end()
})

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})
