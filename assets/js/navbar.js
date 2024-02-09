function insertHeader() {
    var container = document.createElement("div");
    container.innerHTML = `
      <div class="container d-flex align-items-center">
        <img src="assets/img/unleash_logo.png" class="img-fluid logo header me-auto">
        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link scrollto" href="index.html#about">ABOUT</a></li>
            <li><a class="nav-link scrollto" href="index.html#why-us">JOIN US</a></li>
            <li><a class="nav-link scrollto" href="index.html#contact">CONTACT</a></li>
            <li><a class="nav-link scrollto" href="index.html#faq">FAQ</a></li>
            <li><a class="nav-link scrollto" href="policy.html">POLICY</a></li>
            <li><a class="getstarted scrollto" href="#">OPEN THE APP</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    `;
    var header = document.getElementById("header");
    header.appendChild(container);
  }

  document.addEventListener("DOMContentLoaded", function() {
    insertHeader();
  });
  