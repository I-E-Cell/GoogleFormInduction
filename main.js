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

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;