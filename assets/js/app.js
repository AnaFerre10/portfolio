
"use strict";
// Sweet Alert CDN through JS
let script = document.createElement("script");
script.type = 'text/javascript';
script.src="https://unpkg.com/sweetalert/dist/sweetalert.min.js";
document.body.appendChild(script);

// Header

let header = $(`
<nav class="navbar navbar-expand-lg fixed-top dark-theme" id="navbar">
<a class="navbar-brand" href="index.html">Ana Ferre </a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item nav-item-hover"><a class="nav-link" href="index.html">Home</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="currículo.html">Currículo</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="projetos.html">Projetos</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="sobre mim.html">Certificados</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="HardSkils.html">HardSkils</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="https://hashnode.com/" target="_blank">Entre em contato</a></li>
   <li class="nav-item">
   <input type="checkbox" id="dark_toggler" class="dark_toggler" aria-label="Toggle Light Mode" onclick="toggle_light_mode()" checked>
   </li>
   <div class="bike">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="-80 0 650 400" preserveAspectRatio="xMinYMin meet">
     <rect/>

       <g id="left-wheel">
         <path id="Vector_48" d="M135.686 358.047L132.574 309.139L132.509 309.034L129.372 310.132L114.938 352.504L91.9815 336.13L128.548 309.458L128.583 309.353L128.792 309.278L131.149 307.556L92.8104 285.928L83.4193 296.315L84.9084 306.052L128.995 306.861V307.86L84.0844 307.051L82.3868 295.995L95.2426 281.783L114.477 259.211L114.819 260.145L118.889 255.65L134.008 258.377V257.773L135.001 257.803V258.557L157.516 262.612L136.525 304.864L133.462 307.096V307.346V307.625L182.006 290.607L176.244 336.155L135.046 309.753L133.596 308.934L157.888 348.325L135.686 358.047ZM133.701 310.936L136.604 356.569L156.483 347.89L133.701 310.936ZM93.7039 336.12L114.447 350.916L128.017 311.096L93.7039 336.12ZM134.564 308.325L135.602 308.909L175.484 334.477L180.845 292.095L134.564 308.325ZM131.04 304.729L132.286 306.752L132.504 306.592L133.993 259.386L119.232 256.729L115.181 261.223L131.04 304.729ZM93.6046 285.223L130.752 306.197L130.107 305.134L114.432 262.052L95.9722 282.462L93.6046 285.223ZM135.001 259.561L133.512 305.863L135.755 304.225L156.062 263.366L135.001 259.561Z" fill="#535461" />
         <path id="Vector_49" d="M132.956 313.743C136.468 313.743 139.314 310.879 139.314 307.346C139.314 303.813 136.468 300.949 132.956 300.949C129.444 300.949 126.598 303.813 126.598 307.346C126.598 310.879 129.444 313.743 132.956 313.743Z" fill="#1E1F21" />
         <path id="Vector_50" d="M190.132 294.607C188.141 285.708 184.111 277.401 178.363 270.347C176.229 267.726 173.876 265.293 171.33 263.076C161.538 254.571 149.217 249.578 136.3 248.88C123.383 248.181 110.601 251.818 99.9599 259.218C89.3191 266.619 81.4219 277.365 77.5077 289.769C73.5935 302.173 73.8838 315.534 78.3331 327.754C82.7824 339.975 91.1389 350.363 102.091 357.288C113.043 364.214 125.971 367.285 138.845 366.02C151.72 364.754 163.812 359.224 173.225 350.296C182.637 341.369 188.837 329.55 190.851 316.694C191.32 313.667 191.556 310.609 191.556 307.546C191.56 303.193 191.082 298.853 190.132 294.607ZM132.956 351.71C123.906 351.701 115.079 348.887 107.675 343.653C100.27 338.418 94.648 331.016 91.5724 322.453C88.4968 313.89 88.1171 304.582 90.4849 295.795C92.8527 287.007 97.8531 279.167 104.806 273.339C111.759 267.512 120.328 263.98 129.346 263.224C138.365 262.468 147.396 264.526 155.211 269.116C163.027 273.706 169.247 280.606 173.027 288.879C176.807 297.151 177.963 306.394 176.338 315.351C174.476 325.56 169.116 334.789 161.19 341.432C153.263 348.075 143.273 351.713 132.956 351.71Z" fill="#1E1F21" />
       </g>
       <g id="right-wheel">
         <path id="Vector_51" d="M347.23 358.247L344.122 309.358L344.058 309.253L340.921 310.352L326.482 352.704L303.525 336.325L340.102 309.653L340.137 309.548L340.345 309.473L342.703 307.75L304.364 286.122L294.968 296.509L296.457 306.247L340.534 307.036V308.035L295.623 307.226L293.935 296.185L306.786 281.978L326.005 259.421L326.348 260.355L330.418 255.86L345.577 258.592V257.988L346.569 258.017V258.772L369.084 262.826L348.073 305.099L345.011 307.331V307.581V307.86L393.56 290.841L387.797 336.389L346.599 309.987L345.15 309.169L369.442 348.564L347.23 358.247ZM345.244 311.136L348.148 356.769L368.027 348.09L345.244 311.136ZM305.252 336.325L325.995 351.121L339.566 311.301L305.252 336.325ZM346.113 308.529L347.15 309.114L387.033 334.682L392.393 292.3L346.113 308.529ZM342.589 304.934L343.835 306.956L344.053 306.796L345.542 259.591L330.78 256.924L326.73 261.418L342.589 304.934ZM305.168 285.433L342.316 306.407L341.67 305.343L325.995 262.262L307.531 282.677L305.168 285.433ZM346.55 259.77L345.061 306.057L347.304 304.419L367.61 263.561L346.55 259.77Z" fill="#535461" />
         <path id="Vector_52" d="M344.505 313.943C348.016 313.943 350.863 311.079 350.863 307.546C350.863 304.013 348.016 301.149 344.505 301.149C340.993 301.149 338.146 304.013 338.146 307.546C338.146 311.079 340.993 313.943 344.505 313.943Z" fill="#1E1F21" />
         <path id="Vector_53" d="M344.703 248.994C339.435 248.988 334.191 249.7 329.113 251.111C326.494 251.838 323.929 252.751 321.439 253.843C308.171 259.629 297.508 270.161 291.512 283.4C285.516 296.639 284.614 311.645 288.979 325.515C293.345 339.385 302.668 351.133 315.146 358.486C327.624 365.84 342.369 368.276 356.529 365.324C370.689 362.372 383.257 354.242 391.803 342.505C400.349 330.769 404.265 316.261 402.793 301.788C401.321 287.315 394.566 273.905 383.835 264.153C373.104 254.401 359.159 249 344.698 248.994H344.703ZM344.505 351.91C334.438 351.906 324.676 348.438 316.839 342.081C309.002 335.724 303.562 326.862 301.423 316.965C299.284 307.069 300.574 296.734 305.079 287.677C309.584 278.62 317.033 271.386 326.189 267.176C328.518 266.103 330.936 265.24 333.416 264.594C339.478 263.011 345.805 262.745 351.977 263.814C358.148 264.883 364.023 267.262 369.21 270.792C374.397 274.323 378.777 278.925 382.058 284.291C385.34 289.657 387.448 295.665 388.242 301.915C389.036 308.165 388.498 314.513 386.664 320.537C384.829 326.561 381.741 332.123 377.603 336.853C373.466 341.583 368.375 345.372 362.669 347.968C356.962 350.564 350.772 351.908 344.51 351.91H344.505Z" fill="#1E1F21" />
       </g>
       <path id="hat" d="M233.931 52.6043C234.988 55.9401 240.066 56.045 242.671 58.5019C244.026 59.7803 244.657 61.6679 246.146 62.8065C248.216 64.3945 251.204 64.045 253.839 63.6654C259.146 62.9064 264.844 62.4519 269.629 64.7541C271.326 65.568 272.85 66.7066 274.622 67.3708C276.394 68.035 278.593 68.1149 280.032 66.9363C281.184 65.9925 281.606 64.4395 282.648 63.4008C283.457 62.5818 284.584 62.1224 285.507 61.4033C287.532 59.8652 288.406 57.3583 288.982 54.9613C290.173 50.0275 290.516 44.7091 288.485 40.03C286.455 35.3508 281.571 31.5406 276.24 31.7853C274.607 31.8602 273.014 32.2846 271.386 32.4644C267.142 32.8989 262.948 31.4657 258.689 31.221C257.454 31.0697 256.2 31.2417 255.051 31.7204C254.184 32.2052 253.436 32.8792 252.862 33.6929C250.912 36.2624 249.577 39.2494 248.96 42.422C248.464 44.814 248.439 46.9813 245.525 47.3508C242.215 47.7903 231.692 45.5481 233.931 52.6043Z" fill="#472727" />
     </g>
     <defs>
       <linearGradient id="paint0_linear" x1="432.641" y1="56.6686" x2="44.1018" y2="338.225" gradientUnits="userSpaceOnUse">
         <stop offset="0.0001" stop-color="#490DF3" />
         <stop offset="1" stop-color="#3B49C6" stop-opacity="0.05" />
       </linearGradient>
     </defs>
   </svg>
 </div>
  </ul>
</div>
</nav>`);

// Footer
let footer = $(`
<footer class="footer sticky-bottom" style="background-color:#2b2a2a;">
  <div class="p-4">
    <div class="container-fluid quote-container">
      <div class="quotes" style="text-align:center;">

<div class="row align-items-center">

  <!-- FOTO -->
  <div class="col-lg-4 col-md-12 text-center text-lg-start mb-3">
    <img src="assets/images/Ana.jpeg"
         alt="Ana Ferre"
         class="rounded-circleAna">
  </div>

  <!-- SOBRE MIM -->
  <div class="col-lg-8 col-md-12 about-container text-lg-start text-center">
    <div class="about-footer">
      <div class="about-header">
        <h6 class="display">Sobre Mim</h6>
      </div>

      <div class="about-content-footer">
        <p><strong>Ana Clara de Oliveira Ferre</strong> - Desenvolvedora de Sistemas</p>
        <p>
Olá! Sou Ana, tenho 17 anos e sou estudante de Desenvolvimento de Sistemas, com foco em Python, JavaScript,<br> bancos de dados e tecnologias web. Busco uma oportunidade de primeiro ingresso no mercado de trabalho, onde eu possa aplicar meus conhecimentos, aprender na prática e evoluir profissionalmente.
        </p>



</div>

</footer>
`);

//"Scroll to top" button
let upArrow = $(`
  <button id="btnScrollToTop" onclick="scrollToTop()"><i class="fas fa-2x fa-angle-up"></i></button>
  <link rel="stylesheet" type="text/css" href="./css/style.css" />
  })
`);

$(document).ready(function () {
  // updating the color of the swiper bullets (initial update of color)
  updateColorOfSwiperBullets(localStorage.getItem("lightMode"));

  //function for the "Scroll To Top" button to detect the footer
  $(window).scroll(function () {
    //The button will be hidden until we scroll more than the window's height
    if ($(window).scrollTop() < $(window).height()) {
      $("#btnScrollToTop").css("visibility", "hidden");
    } else {
      $("#btnScrollToTop").css("visibility", "visible");
      //The button will change it's color when it hits the footer
      if (
        $(window).scrollTop() + $(window).height() >
        $(document).height() - 838
      ) {
        // 838 should be changed if footer's height is changed so that the button changes it's color exactly when it hits the footer (preferably 14 less than the computer height of the footer)
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      } else {
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      }
    }
  });
});

//function to scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// Window Loads
$(function () {
  let bodyElement = $(`body`);
  bodyElement.prepend(header);
  bodyElement.append(footer);
  bodyElement.append(upArrow);
  $("#btnScrollToTop").css("visibility", "hidden");

  //toggler hamburger functions
  const menuBtn = document.querySelector(".navbar-toggler");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });
});

// function for toggling hamburger is-active class

$(function () {
  $("#js-hamburger").on("click", function () {
    $(this).toggleClass("is-active");
  });
});

// Navbar current page highlight

let loader = document.querySelector(".loader-container");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}
$(function () {
  $("a.nav-link").each(function () {
    if ($(this).prop("href") == window.location.href) {
      $(this).addClass("current-link");
    }
  });
});

//function to remove underline on hover

$(document).ready(function () {
  $("a.nav-link").hover(
    function () {
      $(this).removeClass("current-link");
    },
    function () {
      if ($(this).prop("href") == window.location.href) {
        $(this).addClass("current-link");
      }
    }
  );
});

//consistent light mode for page change
if (localStorage.getItem("lightMode") == "light") {
  var app = document.getElementsByTagName("HTML")[0];
  app.setAttribute("light-mode", "light");

  //to add dark theme to nav bar after its been loaded
  window.addEventListener("load", function () {
    var nav = document.getElementById("navbar");
    nav.classList.remove("dark-theme");
    document.getElementById("dark_toggler").checked = false;
  });

  var sc = document.getElementsByClassName("socialicon");
  for (var i = 0; i < sc.length; i++) {
    sc[i].classList.remove("dsc");
  }
} else {
  localStorage.setItem("lightMode", "dark");
}

function toggle_light_mode() {
  console.log(localStorage.getItem("lightMode"));
  var app = document.getElementsByTagName("HTML")[0];
  var nav = document.getElementById("navbar");
  if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
    nav.classList.remove("dark-theme");
    var sc = document.getElementsByClassName("socialicon");
    for (var i = 0; i < sc.length; i++) {
      sc[i].classList.remove("dsc");
    }
  } else {
    nav.classList.add("dark-theme");
    localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
    var sc = document.getElementsByClassName("socialicon");
    for (var i = 0; i < sc.length; i++) {
      sc[i].classList.add("dsc");
    }
  }

  // updating the swiper bullets
  updateColorOfSwiperBullets(localStorage.getItem("lightMode"));
}

// function to update swiper bullets
function updateColorOfSwiperBullets(lightMode) {
  document.querySelectorAll(".swiper-pagination-bullet").forEach((bullet) => {
    if (lightMode == "light") {
      bullet.style.backgroundColor = "blue";
    } else {
      bullet.style.backgroundColor = "white";
    }
  });
}

window.addEventListener("storage", function () {
  if (localStorage.lightMode == "dark") {
    app.setAttribute("light-mode", "dark");
  } else {
    app.setAttribute("light-mode", "light");
  }
});

// Function to remove scroll bar during preload
$(window).on("load", function () {
  setTimeout(function () {
    $(".no-scroll-preload").css("overflow", "visible");
  }, 1000);
  $(".loader-container").fadeOut(2500);
});

//send button animation


$(function submitAnimation() {
  const name = document.querySelector("#name")
  const emailAdress = document.querySelector("#email")
  const text = document.querySelector("#textArea")
  const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  $("#lnch").on("click", function () {

    // Check if the name field is empty or contains a number
    if (name.value == "" || (/\d/.test(name.value))) {
      swal("Error !","Please enter a valid name !","error");
      return;
    }
    // Check if the email field is empty or email is not valid ex: test@@email.com
    else if (emailAdress.value == "" || !(emailPattern.test(emailAdress.value))) {
      swal("Error !","Please enter a valid email !","error");
      return;
    }
    // Check if the message field is empty
    else if (text.value == "") {
      swal("Error !","Please enter a valid message !","error");
      return;
    }
    else {

      setTimeout(function () {
        $("#lnch").addClass("launching").text("Sending");
        $("#lnch_btn").addClass("launching");
      }, 0);
      setTimeout(function () {
        $("#lnch").addClass("launched").text("SENT");
        $("#lnch_btn").addClass("launched");
      }, 1500);
      // Wait for 2.2 seconds so that the send button animation can be fully played before submitting the form
      setTimeout(() => {
        document.querySelector('form').submit();
      }, 2200);
    }
  });
});
