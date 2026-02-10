const http = require("http")
const url = require("url")

let cart = []

const style = `
  body {
    font-family: Arial, sans-serif;
    background: #f2f2f2;
    text-align: center;
  }
  .container {
    width: 450px;
    margin: 50px auto;
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  h1 { color: #ff5722; }
  .item {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  a.btn {
    padding: 6px 14px;
    background: #ff5722;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  a.green {
    background: #4caf50;
  }
  a.link {
    display: inline-block;
    margin-top: 15px;
    color: #333;
  }
`

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true)
  res.writeHead(200, { "Content-Type": "text/html" })

  // Add to cart
  if (q.pathname === "/add") {
    cart.push(q.query.item)
    res.write(`
      <html><head><style>${style}</style></head>
      <body>
        <div class="container">
          <h2>${q.query.item} added to cart </h2>
          <a class="btn" href="/">Back to Menu</a><br><br>
          <a class="btn green" href="/cart">View Cart</a>
        </div>
      </body></html>
    `)
    return res.end()
  }

  // Cart page
  if (q.pathname === "/cart") {
    res.write(`
      <html><head><style>${style}</style></head>
      <body>
        <div class="container">
          <h1>Your Cart</h1>
    `)

    if (cart.length === 0) {
      res.write("<p>Cart is empty</p>")
    } else {
      cart.forEach(i => {
        res.write(`<div class="item"><span>${i}</span></div>`)
      })
      res.write(`
        <a class="btn green" href="/order">Place Order</a>
      `)
    }

    res.write(`
          <br><a class="link" href="/">Back to Menu</a>
        </div>
      </body></html>
    `)
    return res.end()
  }

  // Order placed
  if (q.pathname === "/order") {
    cart = []
    res.write(`
      <html><head><style>${style}</style></head>
      <body>
        <div class="container">
          <h1> Order Placed!</h1>
          <p>Your food will be delivered soon.</p>
          <a class="btn" href="/">Order Again</a>
        </div>
      </body></html>
    `)
    return res.end()
  }

  // Home page
  res.write(`
    <html>
    <head>
      <title>Food Delivery</title>
      <style>${style}</style>
    </head>
    <body>
      <div class="container">
        <h1>Food Palace</h1>
        <p>Select your food</p>

        <div class="item">
          <span> Pizza</span>
          <a class="btn" href="/add?item=Pizza">Add</a>
        </div>

        <div class="item">
          <span> Burger</span>
          <a class="btn" href="/add?item=Burger">Add</a>
        </div>

        <div class="item">
          <span> Pasta</span>
          <a class="btn" href="/add?item=Pasta">Add</a>
        </div>

        <br>
        <a class="link" href="/cart">View Cart</a>
      </div>
    </body>
    </html>
  `)

  res.end()
})

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000")
})
