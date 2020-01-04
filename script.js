// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let coPilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
         if((pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "")){
            alert("All fields are required!");  
         }   
         if((isNaN(fuelLevel.value)) || (isNaN(cargoMass.value))){
            alert("Please enter a valid number input");         
         }
         
         if((!isNaN(pilotName.value)) || (!isNaN(coPilotName.value))){
            alert("Please enter valid name in text");
         }

         if((fuelLevel.value < 10000) && (cargoMass.value > 10000)){
            alert("Shuttle not ready for launch.");
         
         const div = document.getElementById("launchStatusCheck");
            div.innerHTML = `
            <h2 id="launchStatus" style="color:red;">Shuttle Not Ready for Launch</h2>
            <div id="faultyItems" style="visibility: visible">
                <ol id="launchList">
                    <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch.</li>
                    <li id="copilotStatus">Co-Pilot ${coPilotName.value} is ready for launch.</li>
                    <li id="fuelStatus">Fuel is too low for launch.</li>
                    <li id="cargoStatus">Cargo mass is too heavy for launch.</li>
                </ol>
                `
         }

         if((fuelLevel.value > 10000) && (cargoMass.value > 10000)){
            alert("Shuttle not ready for launch.");

         const div = document.getElementById("launchStatusCheck");
            div.innerHTML = `
            <h2 id="launchStatus" style="color:red;">Shuttle Not Ready for Launch</h2>
            <div id="faultyItems" style="visibility: visible">
                <ol id="launchList">
                   <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch.</li>
                  <li id="copilotStatus">Co-Pilot ${coPilotName.value} is ready for launch.</li>
                  <li id="fuelStatus">Fuel is sufficient for launch.</li>
                  <li id="cargoStatus">Cargo mass is too heavy for launch.</li>
               </ol>
               `

            
         }

         if((fuelLevel.value < 10000) && (cargoMass.value < 10000)){
            alert("Shuttle not ready for launch.");

         const div = document.getElementById("launchStatusCheck");
            div.innerHTML = `
            <h2 id="launchStatus" style="color:red;">Shuttle Not Ready for Launch</h2>
            <div id="faultyItems" style="visibility: visible">
                <ol id="launchList">
                   <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch.</li>
                  <li id="copilotStatus">Co-Pilot ${coPilotName.value} is ready for launch.</li>
                  <li id="fuelStatus">Fuel level too low for launch.</li>
                  <li id="cargoStatus">Cargo mass is sufficient for launch.</li>
               </ol>
               `            
         }

         if((fuelLevel.value > 10000) && (cargoMass.value < 10000)){
            alert("Shuttle is ready for launch.");

         const div = document.getElementById("launchStatusCheck");
            div.innerHTML = `
            <h2 id="launchStatus" style="color:green;">Shuttle is Ready for Launch</h2>
            <div id="faultyItems" style="visibility: visible">
                <ol id="launchList">
                   <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch.</li>
                  <li id="copilotStatus">Co-Pilot ${coPilotName.value} is ready for launch.</li>
                  <li id="fuelStatus">Fuel is sufficient for launch.</li>
                  <li id="cargoStatus">Cargo mass is sufficient for launch.</li>
               </ol>
               `            
         }
      })
});

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
      let journeyArray = response.json().length;
      alert("To prepare for your destination, please enter information.");
      console.log(journeyArray);
      const div = document.getElementById("missionTarget");
         div.innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[1].name}</li>
                  <li>Diameter: ${json[1].diameter}</li>
                  <li>Star: ${json[1].star}</li>
                  <li>Distance from Earth: ${json[1].distance}</li>
                  <li>Number of Moons: ${json[1].moons}</li>
               </ol>
               <img src="${json[1].image}">
               `
   });
});
});