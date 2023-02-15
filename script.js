let counter= 1;
let slide= document.querySelectorAll('.slide');
let slides= Array.from(slide);

slides.forEach((slide, index)=>{
    slide.style.transform =`translateX(-${counter*100}%)`;
    slide.style.left= `${index*100}%`;
});

 
let perv_button= document.getElementById('prev_button');
let next_button= document.getElementById('next_button');


next_button.addEventListener('click',()=>{
    if (counter >= slides.length-1){
        return;
    }
    counter += 1;
    slide_image();
});

perv_button.addEventListener('click', ()=>{
    if (counter <= 0){
        return;
    }
    counter -= 1;
    slide_image();
});


slides[counter].addEventListener('transitionend', ()=>{
    if (slides[counter].id ==='first_image'){
        console.log('good');
        counter=1;
        slide_image_nonTransition();
    }
    if (slides[counter].id ==='last_image'){
        console.log('good');
        counter=slides.length-2;
        slide_image_nonTransition();
    }
});

let slide_image=()=>{
    slides.forEach((slide)=>{
        slide.style.transition = '0.5s';
        slide.style.transform =`translateX(-${counter*100}%)`;
    })
}

let slide_image_nonTransition=()=>{
    slides.forEach((slide)=>{
        slide.style.transition = 'none';
        slide.style.transform =`translateX(-${counter*100}%)`;
    })
}


//slides on time

setInterval(() => {
    if (counter >= slides.length-1){
        return;
    }
    counter += 1;
    slide_image();
}, 2000);