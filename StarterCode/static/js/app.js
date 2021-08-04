// from data.js
var tableData = data;

// YOUR CODE HERE!
// variale reference for table, button, and columns
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// Connect to HTML input file
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}
addData(tableData);

// Filter by Date attribute
button.on("click", () => {
    d3.event.preventDefault();
    var inputDate = inputFieldDate.property("value").trim(); 
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    tbody.html("");
    let response = {
        filterDate
    }

    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

    // Comment if no date available
    
        else {
            tbody.append("tr").append("td").text("No Sightings Observed");
        }
})