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
        delay: 5000, // 5 seconds delay
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
        "Data Cleaning and Preprocessing: Ensuring dataset quality and reliability with techniques like handling missing values and standardizing formats.",
        "Exploratory Data Analysis (EDA): Uncovering patterns and relationships using visualizations like histograms and scatter plots.",
        "Feature Engineering: Extracting meaningful insights and improving model performance through techniques like feature scaling and dimensionality reduction.",
        "Model Building: Predicting outcomes using algorithms such as linear regression and decision trees.",
        "Model Evaluation and Fine-tuning: Assessing model performance with metrics like accuracy and enhancing predictive capabilities through techniques like cross-validation."
    ];

    const duration = 30; // Duration in milliseconds
    const text = steps[stepIndex];
    let currentText = "";
    let currentIndex = 0;
    const interval = setInterval(function () {
        currentText += text[currentIndex];
        document.getElementById(elementId).textContent = currentText;
        currentIndex++;
        if (currentIndex === text.length) {
            clearInterval(interval);
            if (stepIndex < steps.length - 1) {
                setTimeout(function () {
                    animateText(stepIndex + 1, `step${stepIndex + 2}`);
                }, duration);
            }
        }
    }, duration);
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
    var phoneNumber = "+919741273500"; // Replace with your phone number
    var messageLink = "https://wa.me/" + phoneNumber;
    window.open(messageLink);
}

// Function to handle sending an email
function sendEmail() {
    var emailAddress = "boppanadeepak1637@gmail.com"; // Replace with your email address
    var subject = "Subject of your email";
    var body = "Body of your email";
    var emailLink = "mailto:" + encodeURIComponent(emailAddress) + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = emailLink;
}

// Load PDF resume and display the first page
const pdfjsLib = window['pdfjs-dist/build/pdf'];
const pdfUrl = 'Deepak\'s Resume.pdf';

pdfjsLib.getDocument(pdfUrl).promise.then(function (pdf) {
    pdf.getPage(1).then(function (page) {
        const pdfViewer = document.getElementById('pdfViewer');
        const viewport = page.getViewport({ scale: 1 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        pdfViewer.appendChild(canvas);

        // Render the PDF page on the canvas
        page.render({ canvasContext: context, viewport: viewport });
    });
});
