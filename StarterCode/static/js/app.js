//from data.js
var tableData = data;
//console.log(data);

// YOUR CODE HERE!

var button = d3.select("#filter-btn");

// // Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#datetime");
var date;
button.on("click", input_func);

function input_func(){
  d3.event.preventDefault()
  // inputField = d3.select("#datetime");
  date = inputField.property("value");
  var newData = tableData.filter(dataHash => dataHash.datetime==date);
  console.log(newData)
  var table = d3.select(".table")
  var tableBody = table.select("tbody")
  newData.forEach(function({datetime,city,state,country,shape,durationMinutes,comments})
  {

    var tableRow = tableBody.append("tr")
    tableRow.append("td").text(datetime)
    tableRow.append("td").text(city)
    tableRow.append("td").text(state)
    tableRow.append("td").text(country)
    tableRow.append("td").text(shape)
    tableRow.append("td").text(durationMinutes)
    tableRow.append("td").text(comments)
  })
};

//d3.select("#filter-btn").on('click',input_func)

// function date_func(date){
//   return data.datetime=date;
// }
 
// var data_dict = data.filter(date_func);
// console.log(data_dict);
//selecting table





