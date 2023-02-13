//Question 1:
var moviesArray = ["Zindagi na milegi Dobara", "Golmaal", "Shershah", "Fast and Furious", "Golmaal Returns"];
window.console.log(moviesArray[1]);
window.console.log("\n");


//Question 2:
var favoriteMovies = new Array(5);
favoriteMovies[0] = "Zindagi na milegi Dobara";
favoriteMovies[1] = "Golmaal";
favoriteMovies[2] = "Shershah";
favoriteMovies[3] = "Fast and Furious";
favoriteMovies[4] = "Golmaal Returns";
window.console.log(favoriteMovies[0]);
window.console.log("\n");


//Question 3: 
var favoriteMovies3 = new Array(5);
favoriteMovies3[0] = "Zindagi na milegi Dobara";
favoriteMovies3[1] = "Golmaal";
favoriteMovies3[2] = "Shershah";
favoriteMovies3[3] = "Fast and Furious";
favoriteMovies3[4] = "Golmaal Returns";
favoriteMovies3.splice(2, 0, "Life");
window.console.log(favoriteMovies3.length);
window.console.log("\n");


//Question 4:
var favoriteMovies4 = [];
favoriteMovies4[0] = "Zindagi na milegi Dobara";
favoriteMovies4[1] = "Golmaal";
favoriteMovies4[2] = "Shershah";
favoriteMovies4[3] = "Fast and Furious";
favoriteMovies4[4] = "Golmaal Returns";
delete favoriteMovies4[0];
window.console.log(favoriteMovies4);
window.console.log("\n");


//Question 5:
var favoriteMovies5 = [];
favoriteMovies5[0] = "Zindagi na milegi Dobara";
favoriteMovies5[1] = "Golmaal";
favoriteMovies5[2] = "Shershah";
favoriteMovies5[3] = "Fast and Furious";
favoriteMovies5[4] = "Golmaal Returns";
favoriteMovies5[5] = "Dhamaal";
favoriteMovies5[6] = "Baby's Day Out";
for (let index = 0; index < favoriteMovies5.length; index++) {
    window.console.log(favoriteMovies5[index]);
}
window.console.log("\n");


//Question 6:
var favoriteMovies5 = [];
favoriteMovies5[0] = "Zindagi na milegi Dobara";
favoriteMovies5[1] = "Golmaal";
favoriteMovies5[2] = "Shershah";
favoriteMovies5[3] = "Fast and Furious";
favoriteMovies5[4] = "Golmaal Returns";
favoriteMovies5[5] = "Dhamaal";
favoriteMovies5[6] = "Baby's Day Out";
for (var favMovie of favoriteMovies5) {
    window.console.log(favMovie);
}
window.console.log("\n");

//Question 7:
var favoriteMovies5 = [];
favoriteMovies5[0] = "Zindagi na milegi Dobara";
favoriteMovies5[1] = "Golmaal";
favoriteMovies5[2] = "Shershah";
favoriteMovies5[3] = "Fast and Furious";
favoriteMovies5[4] = "Golmaal Returns";
favoriteMovies5[5] = "Dhamaal";
favoriteMovies5[6] = "Baby's Day Out";
for (var favMovie of favoriteMovies5.sort()) {
    window.console.log(favMovie);
}


//Question 8:
var favoriteMovies5 = [];
favoriteMovies5[0] = "Zindagi na milegi Dobara";
favoriteMovies5[1] = "Golmaal";
favoriteMovies5[2] = "Shershah";
favoriteMovies5[3] = "Fast and Furious";
favoriteMovies5[4] = "Golmaal Returns";
favoriteMovies5[5] = "Dhamaal";
favoriteMovies5[6] = "Baby's Day Out";

var leastFavoriteMovies = [];
leastFavoriteMovies[0] = "Welcome back";
leastFavoriteMovies[1] = "Golmaal 3";
leastFavoriteMovies[2] = "Time pass";

window.console.log("Movies I like:\n\n");
for (var index in favoriteMovies5) {
    window.console.log(favoriteMovies5[index]);
    window.console.log("\n");
}
window.console.log("\n");

window.console.log("Movies I regret watching:\n\n");
for (var index in leastFavoriteMovies) {
    window.console.log(leastFavoriteMovies[index]);
    window.console.log("\n");
}
window.console.log("\n");


//Question 9:
var favoriteMovies5 = favoriteMovies5.concat(leastFavoriteMovies);
favoriteMovies5.sort().reverse();
for (var index in favoriteMovies5) {
    window.console.log(favoriteMovies5[index]);
    window.console.log("\n");
}
window.console.log("\n");


//Question 10:
var favoriteMovies5 = favoriteMovies5.concat(leastFavoriteMovies);
window.console.log("Last Element: ");
window.console.log(favoriteMovies5.pop());
window.console.log("\n");


//Question 11:
window.console.log("First Element: ");
window.console.log(favoriteMovies5.shift());
window.console.log("\n");


// Question 12:
var leastLikedMovieIndices = [];
favoriteMovies5.forEach((movie, index) => {
  if (leastFavoriteMovies.includes(movie)) {
    leastLikedMovieIndices.push(index); }
});

var favoriteMovies = ["Zindagi na milegi Dobara","Golmaal","Dhamaal"]
leastLikedMovieIndices.forEach((index) => {
    favoriteMovies5[index] = favoriteMovies.shift();
});
for (var index = 0; index < favoriteMovies5.length; index++) {
    "use strict";
    window.console.log(favoriteMovies5[index] );
}
window.console.log("\n");


// Question 13:
var movies = [["Zindagi na milegi Dobara", 1], ["Golmaal", 2], ["Dhamaal", 3], ["Shershah", 4], ["Golmaal Returns", 5]];
var names = movies.filter(function(movie) {
  return typeof movie[0] === "string";
});
window.console.log(names.map(movie => movie[0]));
window.console.log("\n");


// Question 14:
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
var showEmployee = function(emp) {
  window.console.log("Employees: \n"); 
  emp.forEach(function(employee) {
    window.console.log(employee);
  });
};
showEmployee(employees);
window.console.log("\n");


// Question 15:
var arr = [58, '', 'abcd', true, null, false, 0];
var filterValues = function(values){
    return values.filter(function(v) {
  return v !== null && v !== false && v !== ""  && v !== 0;
});
};
window.console.log(filterValues(arr));
window.console.log("\n");


// Question 16:
var randomNumberSelection = function(number) {
    return number[Math.floor(Math.random() * number.length)];
};
var numberArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
window.console.log(randomNumberSelection(numberArr));
window.console.log("\n");


// Question 17:
var largestNumberSelection = function(number){
    return Math.max(...number);
}
var numberArr = [11 , 113, 203 , 31 , 101 ,10 , 237 ];
window.console.log(largestNumberSelection(numberArr));