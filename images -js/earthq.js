let btn=document.getElementById('fetch-data');

btn.addEventListener('click', EarthquakeData);

function EarthquakeData() {
    fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=5')
        .then(response => response.json())
        .then(data => {
            const earthquakes = data.features;
            const list = document.getElementById('earthquake-list');
            list.innerHTML = '';

            earthquakes.forEach(eq => {
                const li = document.createElement('li');
                li.textContent = `◉  Magnitude of ${eq.properties.mag} at ${eq.properties.place}`;
                list.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching earthquake data:', error);
        });
}
