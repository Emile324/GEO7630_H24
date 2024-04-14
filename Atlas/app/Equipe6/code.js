console.log("Le script code.js est chargé.");

document.getElementById('loadDataButton').addEventListener('click', function() {
    addDataToMap();
});

function addDataToMap() {
    // Ajoute la source
    map.addSource('pistes_cyclables_agreables-source', {
        type: 'vector',
        tiles: ['https://friendly-trout-jj5q9rp765q935g9j-8801.app.github.dev/FH791176.pistes_cyclables_agreables/{z}/{x}/{y}.pbf'],
        minzoom: 0,
        maxzoom: 22
    });

    
    // Ajoute la couche
        map.addLayer({
            'id': 'pistes_cyclables_agreables',
            'type': 'line', // Assurez-vous que le type est approprié pour vos données.
            'source': 'pistes_cyclables_agreables-source',
            'source-layer': 'FH791176.pistes_cyclables_agreables'
        });
}

