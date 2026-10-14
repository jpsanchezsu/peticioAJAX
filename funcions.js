
document.getElementById("nouUsuari").addEventListener("click", function(){

    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let usuari = data.results[0]

        document.getElementById("foto").src = usuari.picture.large
        document.getElementById("nom").innerHTML = usuari.name.first + " " + usuari.name.last
        document.getElementById("email").innerHTML = usuari.email
        document.getElementById("pais").innerHTML = usuari.location.country
    });

})

