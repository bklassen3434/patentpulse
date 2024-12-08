console.log('Is this working?');

let viz;
const vizContainer = document.getElementById('vizContainer');
const options = {
    hideTabs: true,
    height: 1000,
    width: 1200,
    onFirstInteraction: function() {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
        console.log("My dashboard is interactive");
    }
};

//Add Share Link to Tableau Public in here
let url = "https://public.tableau.com/views/Patent_Pulse/PatentStatistics?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";

//create a function to generate the viz element
function initViz() {
    console.log('Executing the initViz function!');
    if (viz) {
        viz.dispose(); // Remove existing viz
    }
    viz = new tableau.Viz(vizContainer, url, options);
}

// run the initViz function when the page loads
document.addEventListener("DOMContentLoaded", initViz);

// Add event listeners for dashboard switching buttons
document.getElementById('dashboard1').addEventListener('click', function() {
    console.log("Dashboard 1 clicked");
    url = "https://public.tableau.com/views/Patent_Pulse/PatentStatistics?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";
    initViz();
});

document.getElementById('dashboard2').addEventListener('click', function() {
    console.log("Dashboard 2 clicked");
    url = "https://public.tableau.com/views/Patent_Pulse/EconomicStatistics?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";
    initViz();
});

document.getElementById('dashboard3').addEventListener('click', function() {
    console.log("Dashboard 3 clicked");
    url = "https://public.tableau.com/views/Patent_Pulse/InnovationScores?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";
    initViz();
});