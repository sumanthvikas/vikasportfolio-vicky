function navigateTo(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

function addProject() {
    const projectName = document.getElementById('projectName').value;
    const projectDetails = document.getElementById('projectDetails').value;

    // Create a new project element
    const projectElement = document.createElement('div');
    projectElement.innerHTML = `<strong>${projectName}</strong>: ${projectDetails}`;

    // Append the project to the Projects View section
    document.getElementById('projectsView').appendChild(projectElement);
}


function navigateToabout() {
    document.getElementById("vikas").textContent = "HI Everyone My name is Sumanth Vikas.."
    document.getElementById("vikas").style.color = "white"
    document.getElementById("vikas").style.fontSize = "30px"

}
