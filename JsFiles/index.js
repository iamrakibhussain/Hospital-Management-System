const heroImg = document.getElementById("hero-img")
const heroHeading = document.getElementById("hero-heading")
const heroPara = document.getElementById("hero-des")

fetch("header.html")
    .then(res => res.text())
    .then(data => {
        document.body.insertAdjacentHTML("afterbegin", data);
        const menuBar = document.getElementById("menubar");
        const menuClose = document.getElementById("menu-close");
        const mobileMenu = document.getElementById("mobile-menu");

        menuBar.addEventListener('click', () => {
            mobileMenu.style.left = '0';
        });

        menuClose.addEventListener('click', () => {
            mobileMenu.style.left = '-50%';
        });
    });


const heroData = [
    {
        img: "Images/Hero/hero image 1.jpg",
        heading: "Advanced Cardiac Care!",
        para: "Expert heart care with cutting-edge diagnostics and life-saving treatments."
    },
    {
        img: "Images/Hero/hero image 2.jpg",
        heading: "Neurology & Neurosurgery!",
        para: "Specialized care for brain and nervous system disorders with modern surgical techniques."
    },
    {
        img: "Images/Hero/hero image 3.jpg",
        heading: "Oncology Services!",
        para: "Comprehensive cancer treatment with advanced therapies and personalized care."
    },
    {
        img: "Images/Hero/hero image 4.jpg",
        heading: "Advanced ICU & Critical Care!",
        para: "24/7 intensive care for critically ill patients with state-of-the-art monitoring."
    },
    {
        img: "Images/Hero/hero image 5.jpg",
        heading: "Organ Transplantation Services!",
        para: "Successful organ transplants with expert surgical teams and post-operative support."
    },
    {
        img: "Images/Hero/hero image 6.jpg",
        heading: "Minimally Invasive & Robotic Surgery!",
        para: "Precision surgeries with faster recovery and minimal complications using modern technology"
    }

]

let currentIndex = 0;
heroImg.src = heroData[currentIndex].img;
heroHeading.textContent = heroData[currentIndex].heading;
heroPara.textContent = heroData[currentIndex].para;
heroImg.classList.add('active');

function changeHeroImage() {
    heroImg.classList.remove('active')
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % heroData.length;
        heroImg.src = heroData[currentIndex].img;
        heroHeading.textContent = heroData[currentIndex].heading;
        heroPara.textContent = heroData[currentIndex].para;

        heroImg.classList.add('active');
    }, 1000)
}
setInterval(changeHeroImage, 7000);

const skillSpecialist = document.getElementById("skill-specialist");
const paitentRoom = document.getElementById("paitent-room")
const Awards = document.getElementById("awards")
const satiesfiedPatient = document.getElementById("satiespied-patient")

let started = false
function startCounters() {
    let specialist = 0;
    let room = 0
    let awardgain = 0
    let satiesfied = 0

    const specialistcounter = setInterval(() => {
        specialist++;
        skillSpecialist.textContent = `${specialist}+ Skilled Specialists`;

        if (specialist === 50) {
            clearInterval(specialistcounter);
        }
    }, 50);

    const roomcounter = setInterval(() => {
        room++;
        paitentRoom.textContent = `${room}+ Patient Rooms`;

        if (room === 300) {
            clearInterval(roomcounter);
        }
    }, 10);

    const awardcounter = setInterval(() => {
        awardgain++;
        Awards.textContent = `${awardgain}+ Awards & Recognitions`
        if (awardgain === 500) {
            clearInterval(awardcounter)
        }
    }, 10)

    const satiesfiedcounter = setInterval(() => {
        satiesfied += 50;
        satiesfiedPatient.textContent = `${satiesfied}+ Satisfied Patients`
        if (satiesfied === 5000) {
            clearInterval(satiesfiedcounter)
        }
    }, 20)
}

const achieveSection = document.getElementById("achieve");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
            startCounters();
            started = true;
        }
    });
}, {
    threshold: 0.5
});

observer.observe(achieveSection);


const doctorCards = document.getElementsByClassName("doctor-card");
const socialProfiles = document.getElementsByClassName("social-profile");

Array.from(doctorCards).forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
        socialProfiles[index].style.left = "0";
    });
    card.addEventListener("mouseleave", () => {
        socialProfiles[index].style.left = "-200px";
    });
});

const appointsubBtn = document.getElementById("appoint-sub-btn");
const submitConfirmmessage = document.getElementById("formMessage");

appointsubBtn.addEventListener('click', (event) => {
    event.preventDefault()
    submitConfirmmessage.textContent = `✅ Your appointment request has been successfully submitted!
Our team will contact you shortly.`;

});

const copyrightEl = document.getElementById("copyright");

const year = new Date().getFullYear();

copyrightEl.textContent = `© ${year} LifeTrack. All Rights Reserved.`;
