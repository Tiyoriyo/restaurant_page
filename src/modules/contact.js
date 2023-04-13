export default function render() {
  const content = document.createElement("div");
  content.classList.add("contactContent");

  content.innerHTML = `<h1 class="title">Contact Us</h1>
                        <form class='contactForm'>
                            <label for="fname">First Name</label>
                            <input type="text" id="fname">
                            <label for="lname">Last Name</label>
                            <input type="text" id="lname">
                            <label for="phone">Phone Number</label>
                            <input type="number" id="phone">
                            <label for="email">Email Address</label>
                            <input type="email" id="email">
                        </form>
                        <button class="submit">Submit</button>
    `;

  return content;
}
