// Configuration object
const defaultConfig = {
    ngo_name: "Swadhisthan",
    hero_tagline: "To create a noble society with empowered and responsible youth",
    hero_subtitle: "Inspiring and empowering youth for positive social change through education, exposure, and opportunities for meaningful action",
    cta_button_text: "Get Involved",
    about_heading: "About Swadhisthan",
    mission_heading: "Our Mission",
    vision_heading: "Our Vision",
    programs_heading: "Our Programs",
    contact_heading: "Get In Touch"
};

// Loading overlay
$(window).on('load', function() {
    setTimeout(function() {
        $('#loadingOverlay').addClass('hidden');
    }, 500);
});

// Navbar scroll effect
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});

// Scroll animations
function checkScroll() {
    $('[data-scroll]').each(function() {
        const element = $(this);
        const elementTop = element.offset().top;
        const elementBottom = elementTop + element.outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();
        
        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            element.addClass('visible');
        }
    });
}

$(window).on('scroll', checkScroll);
checkScroll();

// Counter animation
function animateCounter(element) {
    const target = parseInt(element.data('count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(function() {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.text(Math.floor(current) + '+');
    }, 16);
}

let countersAnimated = false;
$(window).on('scroll', function() {
    if (!countersAnimated) {
        const statsSection = $('.impact-stats');
        const statsSectionTop = statsSection.offset().top;
        const viewportBottom = $(window).scrollTop() + $(window).height();
        
        if (viewportBottom > statsSectionTop) {
            $('.stat-number').each(function() {
                animateCounter($(this));
            });
            countersAnimated = true;
        }
    }
});

// Smooth scroll
$('a[href^="#"]').on('click', function(e) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 70
        }, 1000);
    }
});

// Scroll to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('#scrollTop').addClass('visible');
    } else {
        $('#scrollTop').removeClass('visible');
    }
});

$('#scrollTop').click(function() {
    $('html, body').animate({scrollTop: 0}, 800);
});

// Contact form submission
$('#contactForm').on('submit', function(e) {
    e.preventDefault();
    
    const name = $('#name').val();
    const email = $('#email').val();
    const subject = $('#subject').val();
    const message = $('#message').val();
    
    // Create success message
    const successMessage = $('<div class="alert alert-success mt-3" role="alert">')
        .text('Thank you for your message! We will get back to you soon.')
        .hide()
        .fadeIn();
    
    $(this).after(successMessage);
    
    // Reset form
    this.reset();
    
    // Remove message after 5 seconds
    setTimeout(function() {
        successMessage.fadeOut(function() {
            $(this).remove();
        });
    }, 5000);
});

// Mobile menu close on link click
$('.navbar-nav a').on('click', function() {
    if ($(window).width() < 992) {
        $('.navbar-collapse').collapse('hide');
    }
});

// Function to update UI based on config
async function onConfigChange(config) {
    const ngoName = config.ngo_name || defaultConfig.ngo_name;
    const heroTagline = config.hero_tagline || defaultConfig.hero_tagline;
    const heroSubtitle = config.hero_subtitle || defaultConfig.hero_subtitle;
    const ctaButtonText = config.cta_button_text || defaultConfig.cta_button_text;
    const aboutHeading = config.about_heading || defaultConfig.about_heading;
    const missionHeading = config.mission_heading || defaultConfig.mission_heading;
    const visionHeading = config.vision_heading || defaultConfig.vision_heading;
    const programsHeading = config.programs_heading || defaultConfig.programs_heading;
    const contactHeading = config.contact_heading || defaultConfig.contact_heading;
    
    document.getElementById('ngoName').textContent = ngoName;
    document.getElementById('heroTagline').textContent = heroTagline;
    document.getElementById('heroSubtitle').textContent = heroSubtitle;
    document.getElementById('ctaButton').textContent = ctaButtonText;
    document.getElementById('aboutHeading').textContent = aboutHeading;
    document.getElementById('missionHeading').textContent = missionHeading;
    document.getElementById('visionHeading').textContent = visionHeading;
    document.getElementById('programsHeading').textContent = programsHeading;
    document.getElementById('contactHeading').textContent = contactHeading;
}

// Initialize Element SDK
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig: defaultConfig,
        onConfigChange: onConfigChange,
        mapToCapabilities: function(config) {
            return {
                recolorables: [],
                borderables: [],
                fontEditable: undefined,
                fontSizeable: undefined
            };
        },
        mapToEditPanelValues: function(config) {
            return new Map([
                ["ngo_name", config.ngo_name || defaultConfig.ngo_name],
                ["hero_tagline", config.hero_tagline || defaultConfig.hero_tagline],
                ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
                ["cta_button_text", config.cta_button_text || defaultConfig.cta_button_text],
                ["about_heading", config.about_heading || defaultConfig.about_heading],
                ["mission_heading", config.mission_heading || defaultConfig.mission_heading],
                ["vision_heading", config.vision_heading || defaultConfig.vision_heading],
                ["programs_heading", config.programs_heading || defaultConfig.programs_heading],
                ["contact_heading", config.contact_heading || defaultConfig.contact_heading]
            ]);
        }
    });
}

// Embedded iframe script (moved from inline)
// (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9a6d71e3a66a74f4',t:'MTc2NDUzODIxNS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
