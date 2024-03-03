// Parallax effect for the header section
window.addEventListener('scroll', function () {
    var parallaxSection = document.getElementById('parallax-section');
    var parallaxText = parallaxSection.querySelector('.parallax-text');
    var scrollPosition = window.scrollY;

    // Adjust the opacity of the parallax text
    parallaxText.style.opacity = 1 - scrollPosition / (parallaxSection.offsetHeight * 0.5);
});

/// Function to scroll to a specific section smoothly
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.addEventListener('scroll', function () {
    var currentScroll = window.pageYOffset;
    var aboutSection = document.getElementById('about');
    var expertiseSection = document.getElementById('expertise');
    var projectSection = document.getElementById('project');
    var certificateSection = document.getElementById('certificate');
    var experienceSection = document.getElementById('experience');
    var contactSection = document.getElementById('contact');

    var navLinks = document.querySelectorAll('nav a');

    if (isElementInViewport(aboutSection)) {
        setActive(navLinks, 0);
    } else if (isElementInViewport(expertiseSection)) {
        setActive(navLinks, 1);
    } else if (isElementInViewport(projectSection)) {
        setActive(navLinks, 2);
    } else if (isElementInViewport(certificateSection)) {
        setActive(navLinks, 3);
    } else if (isElementInViewport(experienceSection)) {
        setActive(navLinks, 4);
    } else if (isElementInViewport(contactSection)) {
        setActive(navLinks, 5);
    }
});

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function setActive(navLinks, index) {
    navLinks.forEach(function (link, i) {
        if (i === index) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


// Smooth scroll for all IDs
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});

// Scroll the page to the next section when the scroll down button is clicked
var scrollDownBtn = document.getElementById('scroll-down-btn');
scrollDownBtn.addEventListener('click', function () {
    var nextSection = document.getElementById('about');
    nextSection.scrollIntoView({ behavior: 'smooth' });
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000, // 5 seconds delay
    }
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to animate text
function animateText(stepIndex, elementId) {
    const steps = [
        "Ensuring dataset quality and reliability with techniques like handling missing values and standardizing formats.",
        "Uncovering patterns and relationships using visualizations like histograms and scatter plots.",
        "Extracting meaningful insights and improving model performance through techniques like feature scaling and dimensionality reduction.",
        "Predicting outcomes using algorithms such as linear regression and decision trees.",
        "Assessing model performance with metrics like accuracy and enhancing predictive capabilities through techniques like cross-validation."
    ];

    const text = steps[stepIndex];
    let currentText = "";
    let currentIndex = 0;

    function animate() {
        if (currentIndex < text.length) {
            currentText += text[currentIndex];
            document.getElementById(elementId).textContent = currentText;
            currentIndex++;
            requestAnimationFrame(animate);
        } else {
            if (stepIndex < steps.length - 1) {
                setTimeout(function () {
                    animateText(stepIndex + 1, `step${stepIndex + 2}`);
                }, 30); // Adjust delay as needed
            }
        }
    }

    animate();
}


// Function to handle scroll event
function handleScroll() {
    const section = document.querySelector('.internship-details');
    if (isInViewport(section)) {
        animateText(0, 'step1');
        // Remove scroll event listener once animation starts
        window.removeEventListener('scroll', handleScroll);
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Function to handle sending a WhatsApp message
function sendWhatsAppMessage() {
    var phoneNumber = "+919741273500";
    var messageLink = "https://wa.me/" + phoneNumber;
    window.open(messageLink);
}

// Function to handle sending an email
function sendEmail() {
    var emailAddress = "boppanadeepak1637@gmail.com";
    var subject = "Subject of your email";
    var body = "Body of your email";
    var emailLink = "mailto:" + encodeURIComponent(emailAddress) + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = emailLink;
}

// Function to handle the click event on the button
document.querySelector('.container .btn').addEventListener('click', function () {
    // Change button text to indicate download is in progress
    var downloadButton = this.querySelector('.me');
    var loadingMessage = this.querySelector('.mo');
    downloadButton.style.display = 'none';
    loadingMessage.style.display = 'inline';

    // Create an anchor element
    var link = document.createElement('a');
    // Set the href attribute to the file URL
    link.href = '/Resume.pdf';
    // Set the download attribute to specify the default file name
    link.download = 'Deepak_Resume';
    // Append the anchor to the document body
    document.body.appendChild(link);
    // Programmatically trigger a click event on the anchor
    link.click();
    // Remove the anchor from the document body
    document.body.removeChild(link);

    // Restore button text after download is complete
    setTimeout(function () {
        downloadButton.style.display = 'inline';
        loadingMessage.style.display = 'none';
    }, 10000); // Adjust the timeout as needed
});





