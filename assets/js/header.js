function createHead() {
    // Create head elements
    const metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'utf-8');

    const metaViewport = document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');

    const metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'The best-est pet lifestyle app!');

    const metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'Pet Lifestyle App');

    const title = document.createElement('title');
    title.textContent = 'Unleash PH';

    // Append elements to head
    document.head.appendChild(metaCharset);
    document.head.appendChild(metaViewport);
    document.head.appendChild(metaDescription);
    document.head.appendChild(metaKeywords);
    document.head.appendChild(title);

    // Create and append link elements for CSS files
    const stylesheets = [
        "assets/vendor/aos/aos.css",
        "assets/vendor/bootstrap/css/bootstrap.css",
        "assets/vendor/bootstrap/css/bootstrap.min.css",
        "assets/vendor/bootstrap-icons/bootstrap-icons.css",
        "assets/vendor/boxicons/css/boxicons.min.css",
        "assets/vendor/glightbox/css/glightbox.min.css",
        "assets/vendor/remixicon/remixicon.css",
        "assets/vendor/swiper/swiper-bundle.min.css",
        "assets/css/style.css"
    ];

    stylesheets.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
    });

    // Create and append link element for Google Fonts
    const googleFonts = document.createElement('link');
    googleFonts.rel = 'stylesheet';
    googleFonts.href = 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i';
    document.head.appendChild(googleFonts);
}

// Call the function to create head elements
createHead();
