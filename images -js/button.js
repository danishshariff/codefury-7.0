let b1=document.querySelector(".para1-button1");
let b2=document.querySelector(".para1-button2");
let b3=document.querySelector(".para1-button3");
let para1=document.querySelector(".para1 p");
let para2=document.querySelector(".para02 p");
let image=document.querySelector(".image1");

b1.addEventListener("click",()=>{
    para1.innerHTML="*Tectonic Plate Movements:Shifts along fault lines due to the movement of Earth's tectonic plates.<br>*Volcanic Activity:Eruptions or magma movement causing seismic activity.<br>*Human Activities: Mining, reservoir-induced seismicity, and large-scale construction altering stress on faults.<br>*Aftershocks:Secondary tremors following a major earthquake due to stress redistribution.<br>";
    para2.innerHTML='*Preparedness and Education: Develop emergency plans and educate the public on safety measures.<br>*Zoning Regulations: Restrict development in high-risk areas for both earthquakes and wildfires.<br>*Early Warning Systems: Install systems for early detection of earthquakes and wildfires.<br>*Community Involvement and Response: Engage communities in preparedness and establish rapid response teams.<br>';
    image.style.backgroundImage="url('/images\ -js/earthquake.jpeg')";
});

b2.addEventListener("click",()=>{
    para1.innerHTML='*Monsoon Rainfall: Heavy monsoon rains can cause rivers to overflow and flood areas.<br>*River Overflow: Major rivers like the Ganges and Brahmaputra overflow during the monsoon season.<br>*Cyclones: Coastal cyclones bring heavy rains and storm surges, causing flooding.<br>*Dam Failures: Dam failures or excessive releases can lead to severe downstream flooding.<br>*Urbanization: Rapid urbanization and poor drainage systems in cities increase flood risk. <br>';
    para2.innerHTML='*Flood Barriers and Embankments: Construct barriers and embankments to prevent river overflow from inundating communities.<br>*Improved Drainage Systems: Enhance urban drainage infrastructure to efficiently manage heavy rainfall and prevent flooding.<br>*Early Warning Systems: Implement and maintain flood forecasting and warning systems to alert communities in advance.<br>*Land Use Planning: Avoid construction in flood-prone areas and enforce zoning regulations to minimize flood risk.<br>*Community Preparedness: Educate communities on flood safety measures and conduct regular evacuation drills.';
    image.style.backgroundImage="url('/images\ -js/flood.jpeg')";
});

b3.addEventListener("click",()=>{
    para2.innerHTML='*Water Conservation: Promote water-saving practices and technologies to reduce consumption and manage resources efficiently.<br>*Efficient Irrigation: Implement modern, efficient irrigation systems to optimize water use in agriculture.<br>*Drought-Resistant Crops: Encourage the use of drought-resistant crop varieties to reduce agricultural vulnerability.<br>*Rainwater Harvesting: Invest in rainwater harvesting systems to capture and store water for use during dry periods.<br>*Public Education: Raise awareness about drought impacts and conservation practices to foster community-wide water management. <br>';
    para1.innerHTML='*Low Rainfall: Prolonged periods of insufficient rainfall reduce water availability.<br>*High Temperatures: Elevated temperatures increase evaporation rates and exacerbate water shortages.<br>*Climate Change: Shifts in climate patterns can lead to prolonged dry spells and reduced precipitation.<br>*Deforestation: Loss of vegetation decreases moisture retention and disrupts local weather patterns.<br>*Overexploitation: Excessive use of water resources for agriculture and industry depletes available supplies.<br>';
    image.style.backgroundImage="url('/images\ -js/drought.jpeg')";
});