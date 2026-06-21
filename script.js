// Mobile Menu Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
// Cursor Glow Effect
const cursorGlow =
document.querySelector('.cursor-glow');

document.addEventListener(
'mousemove',
(e) => {

    if(cursorGlow){
        cursorGlow.style.left =
        e.clientX + 'px';

        cursorGlow.style.top =
        e.clientY + 'px';
    }

});



// Counter Animation
const counters =
document.querySelectorAll('.counter');

function runCounter(){

    counters.forEach(counter => {

        const target =
        +counter.getAttribute(
            'data-target'
        );

        const updateCounter =
        () => {

            const current =
            +counter.innerText;

            const increment =
            target / 50;

            if(current < target){

                counter.innerText =
                Math.ceil(
                    current +
                    increment
                );

                setTimeout(
                    updateCounter,
                    40
                );

            } else {

                counter.innerText =
                target + "+";
            }
        };

        updateCounter();
    });
}

const counterObserver =
new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            runCounter();
        }

    });

});

const statsSection =
document.querySelector('.stats');

if(statsSection){
    counterObserver.observe(
        statsSection
    );
}


// Skill Progress Rings
const progressCircles =
document.querySelectorAll(
'.progress'
);

const percentages =
[85, 90, 80, 70];

function animateSkills(){

    progressCircles.forEach(
    (circle, index) => {

        const radius =
        circle.r.baseVal.value;

        const circumference =
        2 * Math.PI * radius;

        circle.style.strokeDasharray =
        circumference;

        const offset =
        circumference -
        (
            percentages[index]
            / 100
        ) * circumference;

        circle.style.strokeDashoffset =
        offset;
    });
}

const skillObserver =
new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            animateSkills();
        }

    });

});

const skillsSection =
document.querySelector('.skills');

if(skillsSection){
    skillObserver.observe(
        skillsSection
    );
}



// Calculator
function appendValue(value){

    document.getElementById(
        'calc-display'
    ).value += value;
}

function clearDisplay(){

    document.getElementById(
        'calc-display'
    ).value = '';
}

function calculate(){

    try{

        document.getElementById(
            'calc-display'
        ).value = eval(
            document.getElementById(
                'calc-display'
            ).value
        );

    } catch {

        alert(
            "Invalid Calculation"
        );
    }
}



// Weather Auto Cycle
const weatherData = [

    {
        temp: "32°C",
        condition: "Sunny ☀️"
    },

    {
        temp: "28°C",
        condition: "Rainy 🌧️"
    },

    {
        temp: "30°C",
        condition: "Cloudy ☁️"
    },

    {
        temp: "34°C",
        condition: "Hot 🔥"
    }

];

let weatherIndex = 0;

function updateWeather(){

    weatherIndex++;

    if(
        weatherIndex >=
        weatherData.length
    ){
        weatherIndex = 0;
    }

    const temp =
    document.getElementById(
        'weather-temp'
    );

    const condition =
    document.getElementById(
        'weather-condition'
    );

    if(temp && condition){

        temp.innerText =
        weatherData[
            weatherIndex
        ].temp;

        condition.innerText =
        weatherData[
            weatherIndex
        ].condition;
    }
}

setInterval(
    updateWeather,
    3000
);



// Active Navbar Scroll
let sections =
document.querySelectorAll(
'section'
);

let navLinks =
document.querySelectorAll(
'header nav a'
);

window.onscroll = () => {

    sections.forEach(sec => {

        let top =
        window.scrollY;

        let offset =
        sec.offsetTop - 150;

        let height =
        sec.offsetHeight;

        let id =
        sec.getAttribute(
            'id'
        );

        if(
            top >= offset &&
            top <
            offset + height
        ){

            navLinks.forEach(
            link => {

                link.classList.remove(
                    'active'
                );
            });

            const activeLink =
            document.querySelector(
            'header nav a[href*="' +
            id +
            '"]'
            );

            if(activeLink){
                activeLink
                .classList.add(
                    'active'
                );
            }
        }
    });

    // Sticky Header
    let header =
    document.querySelector(
        'header'
    );

    if(header){

        header.classList.toggle(
            'sticky',
            window.scrollY > 100
        );
    }

    // Close mobile menu
    menuIcon.classList.remove(
        'bx-x'
    );

    navbar.classList.remove(
        'active'
    );
};



// Scroll Reveal
ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal(
'.home-content, .heading',
{
    origin: 'top'
});

ScrollReveal().reveal(
'.home-img, .edu-container, .ski-box, .con form',
{
    origin: 'bottom'
});

ScrollReveal().reveal(
'.home-content h1, .about-img',
{
    origin: 'left'
});

ScrollReveal().reveal(
'.home-content h3, .about-content',
{
    origin: 'right'
});



// Typed.js Animation
const typed =
new Typed(
'.multiple-text',
{
    strings: [
        'Python Full Stack Learner',
        'Web Developer',
        'Frontend Learner'
    ],

    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
