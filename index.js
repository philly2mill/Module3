const express = require("express");
const app = express();
const PORT = 3000;

// Homepage route
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to My Express App!</h1>
    <nav>
      <a href="/">Home</a> |
      <a href="/about">About</a> |
      <a href="/contact">Contact</a>
    </nav>
  `);
});

// About route
app.get("/about", (req, res) => {
  res.send(`
    <h1>About This App</h1>
    <p>This is a simple Express application for learning purposes.</p>
    <a href="/">Back to Home</a>
  `);
});

// Contact route (form + GET handling)
app.get("/contact", (req, res) => {
  const { name, email, message } = req.query;

  // If form is submitted
  if (name && message) {
    res.send(`
      <h1>Contact Confirmation</h1>
      <p>Thank you, <strong>${name}</strong>!</p>
      <p>We have received your message: <em>${message}</em></p>
      <a href="/">Back to Home</a>
    `);
  } else {
    // Show form
    res.send(`
      <h1>Contact Us</h1>
      <form method="GET" action="/contact">
        <label>Name:</label><br/>
        <input type="text" name="name" required /><br/><br/>

        <label>Email:</label><br/>
        <input type="email" name="email" required /><br/><br/>

        <label>Other form of contact / Message:</label><br/>
        <textarea name="message" required></textarea><br/><br/>

        <button type="submit">Submit</button>
      </form>
      <br/>
      <a href="/">Back to Home</a>
    `);
  }
});
// Service route
app.get("/service", (req, res) => {
  res.send(`
    <h1>Services</h1>
    <p>We offer a variety of services to meet your needs:</p>
    <ul>
      <li>Homepage</li>
      <li>About Page</li>
      <li>Contact Form</li>
      <li>Services Page</li>
    </ul>
    <a href="/">Back to Home</a>
  `);
});
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
