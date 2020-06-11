let photos = ["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img5.jpg","img/img6.jpg","img/img7.jpg"];
let position = 0;

function next(){
    show(photos[position]);

    if(position < photos.length-1){
        position++;
    }else{
        position = 0;
    }
}

function show(photo){
    // Como substituit uma imagem por outra em HTML
    document.querySelector(".updateImg").src = photo;
   
}

var control = setInterval(next,1000);