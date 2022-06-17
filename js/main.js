const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {loop:true,delay:75});


typewriter
    .typeString('La ciudad de la escoba')
    .pauseFor(200)
    .start();