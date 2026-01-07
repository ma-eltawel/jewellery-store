let modal = document.querySelector('.modal'), header = document.querySelector('header .main'), menuBut =
    document.querySelector('#menu'), menu = document.querySelector('header .main nav')

window.onscroll = () =>{
    if(!modalOpen()){
        if(window.scrollY > 120)
            header.classList.add('active');
        else{
            header.classList.remove('active');
            menu.classList.remove('active');
        }
    }
}

function showModal(){
    modal.style.display = 'block';
    header.classList.remove('active');
}

setTimeout(() => {
    showModal();
}, 6000);

function modalOpen() {
    return modal.style.display === 'none';
}

document.querySelector('.modal .container span').onclick = () =>{
    modal.style.display = 'none';
}

menuBut.onclick = () =>{
    menu.classList.toggle('active');
    menuBut.classList.toggle('fa-times');
    menuBut.classList.toggle('fa-bars');
}