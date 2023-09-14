let error = document.getElementById('validate');
let label = document.getElementsByTagName("label");

document.getElementById("intro")
  .addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
      next1("intro", "name");
    }
  });

document.getElementById("name")
  .addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
      next("name", "regno");
    }
  });

  document.getElementById("regno")
  .addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
      next("regno", "email");
    }
  });

  document.getElementById("email")
  .addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        next('email','phone');
    }
  });

  document.getElementById("phone")
  .addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        next('phone','branch');
    }
  });

  document.getElementById("branch")
  .addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
      next('branch','rollno');
    }
  });
 
  document.getElementById("rollno")
  .addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
      next('rollno','q1');
    }
  });

  document.getElementById("q1")
  .addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
      next('q1','q2');
    }
  });

  document.getElementById("q3")
  .addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
      next('q3','q4');
    }
  });

  document.getElementById("q4").addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Set a delay of 1 second (1000 milliseconds) before redirecting
    setTimeout(function() {
        // Redirect to another website
        window.location.href = "https://www.google.com/";
        next('q3','q4');
    }, 1000);
});

function next1(from, to) {
  error.innerHTML = "";
  document.getElementById(from).classList.remove('is-visible');
  document.getElementById(to).classList.add('is-visible');
}

function next(from, to) {
    error.innerHTML = "";
    let value = document.getElementById(from).children[1].value;
    if(!value || value === "") {
        error.innerHTML = "Please enter a value";
    }
    else {
        error.innerHTML = "";
        document.getElementById(from).classList.remove('is-visible');
        document.getElementById(to).classList.add('is-visible');
    }
}

function previous(from , to) {
    error.innerHTML = "";
    console.log();
    document.getElementById(from).classList.remove('is-visible');
    document.getElementById(to).classList.add('is-visible');
}

//Partice.js
