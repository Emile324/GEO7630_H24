console.log("Le script code.js est chargé.");

document.getElementById('Equipe6').addEventListener('click', function() {
        map.addSource('pistes_cyclables_agreables-source', {
            type: 'vector',
            tiles: ['https://friendly-trout-jj5q9rp765q935g9j-8801.app.github.dev/FH791176.pistes_cyclables_agreables/{z}/{x}/{y}.pbf']
        });
        map.addLayer({
            'id': 'pistes_cyclables_agreables',
            'type': 'line',
            'source': 'pistes_cyclables_agreables-source',
            'source-layer': 'FH791176.pistes_cyclables_agreables'
        });
});
 

function(bizarre)ff