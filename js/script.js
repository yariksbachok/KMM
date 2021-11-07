const body = document.querySelector('html')
const c = document.querySelector('.fe_welcome_title')
const logo = document.querySelector('.header_logo')
const fe_button = document.querySelector('.fe_button')
const se_button = document.querySelector('.se_button')
document.addEventListener('wheel',function(event){event.preventDefault(); }, {passive: false});
const rellax = new Rellax('.rellax');
const back_buttons = document.querySelectorAll('.back_button')
const th_back_button = document.querySelector('.th_back_button')
const third_etap = document.querySelector('.third_etap')
logo.onclick = (e) => {
    body.scrollTo({
        top:0,
        behavior:'smooth'
    })
}

fe_button.onclick = (e) => {
    const se = document.querySelector('.second_etap')
    const h = se.offsetTop
    body.scrollTo({
        top:h,
        behavior:'smooth'
    })
}

se_button.onclick = (e) => {
    
    const h = third_etap.offsetTop
    body.scrollTo({
        top:h,
        behavior:'smooth'
    })
}

th_back_button.onclick = (e) => {
    const second_etap = document.querySelector('.second_etap')
    const h = second_etap.offsetTop
    body.scrollTo({
        top:h,
        behavior:'smooth'
    })
}

const th_button = document.querySelector('.th_button')


th_button.onclick = (e) => {
    const fourth_etap = document.querySelector('.fourth_etap')
    const h = fourth_etap.offsetTop
    body.scrollTo({
        top:h,
        behavior:'smooth'
    })
}

const file_input = document.querySelector('#file_input')
const submit_btn = document.querySelector('.fr_submit')

submit_btn.onclick = (e) => {
    e.preventDefault()
}
file_input.onchange = (e) => {
   
    const container = document.querySelector('.finput_container')
    var picReader = new FileReader();
    picReader.addEventListener("load", function(event) {
        console.log('!')
    var picFile = event.target;
    var div = document.createElement("div");
    div.classList.add('selected_bg')
    div.innerHTML = "<img class='selected_image' src='" + picFile.result + "'" +
        "alt='" + picFile.name + "'/>";
    container.appendChild(div)
    });
    picReader.readAsDataURL(e.currentTarget.files[0]);
    
    submit_btn.setAttribute('loaded', '1')
}

const fr_back_button = document.querySelector('.fr_back_button')

fr_back_button.onclick = (e) => {
    const h = third_etap.offsetTop
    body.scrollTo({
        top:h,
        behavior:'smooth'
    })
}
// for(btn of back_buttons ){
//     btn.addEventListener('mouseover', (e) => {
//         const svg = e.currentTarget.querySelector('svg')
//         const path = e.currentTarget.querySelector('svg path')
//         console.log('!')
//         console.log('!')
//         svg.setAttribute('viewBox', '0 0 44 16')
//         svg.style.width = '44px';
//         //e.currentTarget.style.left = e.currentTarget.style.left - 
//         console.log(e.currentTarget.getBoundingClientRect().x)
        
//         path.setAttribute('d', 'M0.292893 7.2929C-0.0976311 7.68342 -0.097631 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928935C7.68054 0.538411 7.04738 0.538411 6.65685 0.928935L0.292893 7.2929ZM44 7L1 7L1 9L44 9L44 7Z')
//         e.currentTarget.style.left = (parseInt(e.currentTarget.getBoundingClientRect().x) - 12) + 'px' 
//     })
//     btn.addEventListener('mouseout', (e) => {
//         const svg = e.currentTarget.querySelector('svg')
//         const path = e.currentTarget.querySelector('svg path')
//         console.log('!')
//         console.log('!')
//         svg.setAttribute('viewBox', '0 0 34 16')
//         svg.style.width = '30px';
//         path.setAttribute('d', 'M0.292892 7.2929C-0.0976296 7.68342 -0.0976295 8.31659 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928934C7.68054 0.53841 7.04738 0.53841 6.65685 0.928935L0.292892 7.2929ZM34 7L1 7L1 9L34 9L34 7Z')
//         e.currentTarget.style.left = (parseInt(e.currentTarget.getBoundingClientRect().x) + 12) + 'px' 
//     })
    
// }
const se_back_btn = document.querySelector('.se_back_button')

se_back_btn.onclick = (e) => {
    body.scrollTo({
        top:0,
        behavior:'smooth'
    })
}

