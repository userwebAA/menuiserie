$(document).ready(function() {
    $('.select2').select2();
});


animated =() => {
    var terrasseElement = document.getElementById("terrasse");
    terrasseElement.classList.remove("fade-in"); // Supprimez la classe qui déclenche l'animation
    terrasseElement.classList.add("fade-in-repeat"); // Ajoutez une classe qui déclenche l'animation en boucle
    setTimeout(function() {
        terrasseElement.classList.remove("fade-in-repeat"); // Supprimez la classe pour que l'animation puisse être déclenchée à nouveau
    }, 1600);
}

terrasseBois = () => {
    $(".section2-img").attr("src", "/assets/img/Mountains_Scenery_Sky_444370_3840x2400-3807640612.jpg");
    $(".section2-p").text("terrasse de bois");
    $(".section2-a").attr("href", "https://google.com");
    
    setTimeout(() => {
        document.getElementById("terrasse").classList.remove("animate__animated", "animate__fadeInRight");
        document.getElementById("terrasse").classList.add("animate__animated", "animate__fadeInRight"); 
    }, 2000);
    // animated();
}

terrasse2 = () => {
    $(".section2-img").attr("src", "/assets/img/menuiseries-1-845x370-3920937784.jpg");
    $(".section2-p").text("terrasse de bois");
    $(".section2-a").attr("href", "https://google.com");

    setTimeout(() => {
        document.getElementById("terrasse").classList.remove("animate__animated", "animate__fadeInRight");
        document.getElementById("terrasse").classList.add("animate__animated", "animate__fadeInRight"); 
    }, 2000);

    // animated();
}

terrasse3 = () => {
    document.getElementById("terrasse").style.opacity = 0;
    $(".section2-img").attr("src", "/assets/img/menuiseries-en-bois-4266863604.jpg");
    $(".section2-p").text("terrasse de bois");
    $(".section2-a").attr("href", "https://google.com");
    animated();
    document.getElementById("terrasse").style.opacity = 1;
}
terrasse4 = () => {
    document.getElementById("terrasse").style.opacity = 0;
    $(".section2-img").attr("src", "/assets/img/csm_fabrication-menuiserie-bois_fb89e6434a-1731147703.jpg");
    $(".section2-p").text("terrasse de bois");
    $(".section2-a").attr("href", "https://google.com");
    animated();
    document.getElementById("terrasse").style.opacity = 1;
}

terrasse5 = () => {
    document.getElementById("terrasse").style.opacity = 0;
    $(".section2-img").attr("src", "/assets/img/visuel-3080222621.jpg");
    $(".section2-p").text("terrasse de bois");
    $(".section2-a").attr("href", "https://google.com");
    animated();
    document.getElementById("terrasse").style.opacity = 1;
}
