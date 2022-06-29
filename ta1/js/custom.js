// javascript Animate onscroll Start
    $(document).ready(function () {
    if (screen.width > 1024) {
    AOS.init({
    easing: 'ease-in-out-sine',
    once: true,
    });
    }
    });
(new IntersectionObserver(function(e,o){
    if (e[0].intersectionRatio > 0){
        document.documentElement.removeAttribute('class');
    } else {
        document.documentElement.setAttribute('class','stuck');
    };
})).observe(document.querySelector('.trigger'));


function mulai(){
    alert("Ini berisi penjelasan Fakultas Komputer")
}

function project(){
    alert("Ini adalah halaman Project");
}
function pendaftar(){
    alert ("Ini adalah halaman Pendaftaran");
}
function kontak(){
    alert("Ini adalah halaman Kontak");
}

function ti(){
    alert("Ini adalah halaman penjelasan Teknologi Informasi");
}

function si(){
    alert("Ini adalah halaman penjelasan Sistem Informasi");
}
function tk(){
    alert("Ini adalah halama penjelasan Teknik Komputer")
}