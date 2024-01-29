const reviews = [
    {
        id : 1,
        name: "Susan smith",
        job: "web developer",
        img : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        text: "I am Susan Smith, a web developer with 2years+ experience. I have worked in many languages like c, c++, python, java, javascript, HTML and CSS."
    },
    {
        id : 2,
        name: "Martha Stewart",
        job: "ux designer",
        img : "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D",
        text: "I am Martha Stewart, a ux designer. I have worked as an intern in 2 companies that are very known in designer field that is tata and impetus."
    },
    {
        id : 3,
        name: "Jonathon Kyle",
        job: "Web Developer",
        img : "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww",
        text: "I am Jonathon Kyle, a web developer with 5years+ experience. I have worked in many languages like c, c++, python, java, javascript, HTML and CSS and multiple companies that work in software development field."
    },
    {
        id : 4,
        name: "Maris Johnson",
        job: "Web Developer",
        img : "https://media.istockphoto.com/id/1462575323/photo/portrait-of-young-woman-in-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=rROaUTsC1ccooPZU5aceKh4vL_5HaromB2FHYLQoD14=",
        text: "I am Jonathon Kyle, a web developer with 8years+ experience. I have worked in many languages like c, c++, python, java, javascript, HTML and CSS and multiple companies that work in software development field."
    }
]

let img = document.querySelector('.image-container')
let author = document.getElementById('author')
let job = document.getElementById('job')
let info = document.getElementById('info')

let prevArrow = document.querySelector('.arrow-left')
let nextArrow = document.querySelector('.arrow-right')
let randomBtn = document.querySelector('.btn')

// initializing first reviewboard
let currentId =0;
function personReview(currentId){
    const item = reviews[currentId];
    img.src=item.img;
    author.textContent = item.name[0].toUpperCase() + item.name.slice(1);
    job.textContent = item.job.toUpperCase();
    info.textContent = item.text;
}

window.addEventListener('DOMContentLoaded', function(){
    personReview(currentId);
})



prevArrow.addEventListener('click', ()=>{
    currentId--;
    if(currentId == 0) currentId = 3;
    personReview(currentId);

})
nextArrow.addEventListener('click', ()=>{
    currentId++;
    if(currentId == 3) currentId = 0;
    personReview(currentId);

})

randomBtn.addEventListener('click', ()=>{
    currentId = Math.floor(Math.random()*4);
    personReview(currentId);
})