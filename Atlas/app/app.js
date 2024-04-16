// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [-73.55, 45.55], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});


function loadTeam(teamName) {
    // Vider toutes les divs
    document.getElementById('Equipe1').innerHTML = '';
    document.getElementById('Equipe2').innerHTML = '';
    document.getElementById('Equipe3').innerHTML = '';
    document.getElementById('Equipe4').innerHTML = '';
    document.getElementById('Equipe5').innerHTML = '';
    document.getElementById('Equipe6').innerHTML = '';
    document.getElementById('Equipe7').innerHTML = '';
    // Charger le contenu de l'équipe sélectionnée
    fetch('./' + teamName + '/index.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(teamName).innerHTML = data;
            // Charger les fichiers .js depuis le répertoire spécifique
            const scripts = document.getElementById(teamName).querySelectorAll('script[src]');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                newScript.src = `./${teamName}/${script.getAttribute('src')}`;
                document.body.appendChild(newScript);
            });
           // Charger les fichiers .css depuis le répertoire spécifique
            const links = document.getElementById(teamName).querySelectorAll('link[rel="stylesheet"]');
            links.forEach(link => {
                const newLink = document.createElement('link');
                newLink.rel = 'stylesheet';
                newLink.type = 'text/css';  // Ajoutez ce type pour éviter l'erreur de type MIME
                newLink.href = `./${teamName}/${link.getAttribute('href')}`;
                document.head.appendChild(newLink);
            });
        })
        .catch(error => {
            console.error('There was a problem with fetching the team content:', error);
        });
}



const myLayers = ['grid', 'buffer', 'rdp', 'union', 'joined']

// Cette fonction est appelée lorsque la carte est chargée.
map.on('load', function () {
    // Charge une couche de points aléatoires.
    loadRandomPointsLayer()
    // Ajoute un contrôle de légende personnalisé.
    // Lab 12
    // map.addControl(new MaplibreLegendControl({ 
    //     rdp: "rdp", 
    //     grid: 'grid',
    //     union: 'union',
    //     buffer: 'buffer',
    //     joined: 'joined'
    // }, { onlyRendered: true }), "bottom-left");
});

// Cette fonction est appelée lorsque la carte est en attente.
map.on('idle', function () {
    // Récupère les couches de style de la carte.
    const layers = map.getStyle().layers;
    // Parcourt toutes les couches.
    layers.forEach((layer) => {
        // Si la couche est 'joined', met à jour le compteur dynamique.
        if (layer.id == 'joined') {
            dynamicCount()
        // Sinon, si la couche est 'rdp', met à jour le compteur de fonctionnalités.
        } else if (layer.id == 'rdp') {
            featureCount()
        }        
    });
    // alert('test')
});


// création du contrôle de navigation (BONUS I)

var nav = new maplibregl.NavigationControl({

    showCompass: true, // affichage de la boussole

    showZoom: true, // affichage des boutons de zoom

    visualizePitch: true // affichage de l'angle d'inclinaison

});

// Finalement on ajoute le contrôleur à la carte

map.addControl(nav, 'top-right'); // ajout du contrôle en haut à droite de la carte




// création du contrôle de géolocalisation (BONUS II)

var geolocateControl = new maplibregl.GeolocateControl({

    positionOptions: {

        enableHighAccuracy: true // activation de la géolocalisation précise

    },

    trackUserLocation: true // suivi automatique de la position de l'utilisateur

})

map.addControl(geolocateControl, 'bottom-right'); // ajout du contrôle en bas à droite de la carte




// création du contrôle d'échelle (BONUS III)

var scale = new maplibregl.ScaleControl({

    unit: 'metric' // utilisation de l'unité métrique

});

map.addControl(scale); // ajout du contrôle en bas à gauche de la carte




// MAP SOURCE MOFUCKAAAA
map.on('load', function () {

    // ajout de la source des garages

    map.addSource('indice_emv_hex_200m_result-source', {

        type: 'vector', // https://maplibre.org/maplibre-style-spec/sources/

        tiles: ["https://probable-orbit-5g5vw6rv965h7p7j-8801.app.github.dev/geo7630.indice_emv_hex_200m_result/{z}/{x}/{y}.pbf"] // URL des tuiles vectorielles attention à bien mettre là votre

    })

    // ajout de la couche des garages

    map.addLayer({

        'id': 'indice_emv_hex_200m_result', // identifiant de la couche

        'type': 'fill', // type de géométrie de la couche

        'source': 'indice_emv_hex_200m_result-source', // source des données de la couche

        'source-layer': 'geo7630.indice_emv_hex_200m_result', // source des données de la couche (id dans le JSON de pgtileserv), majoritairement nom du schéma.nomdelatable

    })

});