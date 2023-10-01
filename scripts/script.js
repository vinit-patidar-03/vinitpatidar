//Routing between skills and Academics
const skills = document.querySelector('.skillroute');
const academics = document.querySelector('.academicsroute');
const route = document.querySelectorAll('.route');
let routeText = 'Skills';
route.forEach((element, index) => {
    element.addEventListener('click', () => {
        if (element.innerText === routeText) {
            academics.style.display = 'none';
            skills.style.display = 'block';
            element.classList.add('activeRoute');
            route[index + 1].classList.remove('activeRoute');
        }
        else {
            academics.style.display = 'block';
            skills.style.display = 'none';
            element.classList.add('activeRoute');
            route[index - 1].classList.remove('activeRoute');
        }
    })
})

//Project Preview
const projectDetails = [{ image: "images/youtubeclone.jpg", alt: "Youtube Clone", name: "Youtube Clone", skills: ["ReactJs", "Tailwind CSS", "YT-API"] },
{ image: "images/SocialMedia.jpg", alt: "SocialMedia", name: "SocioMedia Web App", skills: ["MERN Stack", "Cloudinary", "Tailwind CSS"] },
{ image: "images/BhagvadGita.jpg", alt: "Bhagvad Gita", name: "Bhagavad Gita", skills: ["ReactJs", "Tailwind CSS", "API"] },
{ image: "images/TextHunter.jpg", alt: "TextHunter", name: "TextHunter", skills: ["ReactJs", "Bootstrap"] },
{ image: "images/Spotify.jpg", alt: "Spotify", name: "Spotify Clone", skills: ["HTML", "CSS", "JavaScript"] },
{ image: "images/Weather.jpg", alt: "Weather", name: "Weather Web App", skills: ["HTML", "CSS", "JavaScript", "API's"] }
]
const preview = document.querySelector('.preview');
const projects = document.querySelectorAll('.project-1');

const previewProject = (value = 0) => {
    preview.innerHTML = '';
    let previewImg = document.createElement('div');
    let img = document.createElement('img');
    img.src = projectDetails[value].image;
    img.alt = projectDetails[value].alt;
    previewImg.classList.add('previewImg');
    previewImg.appendChild(img);

    let previewDescription = document.createElement('div');
    let h3 = document.createElement('h3');
    let skillsAppied = document.createElement('div');
    previewDescription.classList.add('previewDescription');
    previewDescription.appendChild(h3);
    skillsAppied.classList.add('skillsApplied');
    projectDetails[value].skills.forEach((element) => {
        let workSkill = document.createElement('span');
        console.log(element);
        workSkill.innerText = element;
        workSkill.classList.add('workSkill');
        skillsAppied.appendChild(workSkill);
    })
    h3.innerText = projectDetails[value].name;
    previewDescription.appendChild(skillsAppied);
    preview.appendChild(previewImg);
    preview.appendChild(previewDescription);
}

previewProject();
projects.forEach((element, index) => {
    element.addEventListener('click', () => {
        previewProject(index)
    })
})