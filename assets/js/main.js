AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});




// Define the form element
const form = document.getElementById("contact-form");

// Define the submit button
const submitButton = document.getElementById("submit-btn");

// Define the notification element
const notification = document.getElementById("notification");

// Add an event listener to the form submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Get the current date
  const currentDate = new Date().toLocaleDateString();

  // Send the form data as an email using SMTPJS
  Email.send({
    SecureToken: "790726d4-f1d4-4b94-bf55-02e9513f9315",
    To: "contact.ayansarkar@gmail.com",
    From: "contact.ayansarkar@gmail.com",
    Subject: "New message from " + formData.get("name"),
    Body: "<html><body>" +
      "<h2>New message from " + formData.get("name") + "</h2>" +
      "<p><strong>Name: </strong>" + formData.get("name") + "</p>" +
      "<p><strong>Email: </strong>" + formData.get("email") + "</p>" +
      "<p><strong>Message: </strong>" + formData.get("message") + "</p>" +
      "<p><strong>Date: </strong>" + currentDate + "</p>" +
      "</body></html>"
  }).then(function (response) {
    if (response === "OK") {
      // Display the success message
      notification.textContent = 'Message Sent Successfully.🔥';

      // Show the notification element
      notification.style.display = 'block';

      // Hide the notification after 3 seconds
      setTimeout(() => {
        notification.style.display = 'none';
      }, 3000);

      // Reset the form if the "data-reset" attribute is set to "true"
      if (form.dataset.reset === 'true') {
        form.reset();
      }
    } 
  });
});







        
  function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

        if(hou >= 12){
          pe = "PM";
        }
        if(hou == 0){
          hou = 12;
        }
        if(hou > 12){
          hou = hou - 12;
        }

        Number.prototype.pad = function(digits){
          for(var n = this.toString(); n.length < digits; n = 0 + n);
          return n;
        }

        var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
        var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }

  function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
  }

  $('.error').fadeIn(400).delay(3000).fadeOut(400); //fade out after 3 seconds


  const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");
readMoreBtn.addEventListener("click", (e) => {
    text.classList.toggle("show-more");
    if (readMoreBtn.innerText === "Read More") {
        readMoreBtn.innerText = "Read Less";
    } else {
        readMoreBtn.innerText = "Read More";
    }
});


