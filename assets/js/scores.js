var scoreList = document.getElementById("scoreList");

var loadUser = function () {
    var savedScores = localStorage.getItem("user");
    // if there are no tasks, set tasks to an empty array and return out of the function
    if (!savedScores) {
      return false;
    }
    console.log("Saved tasks found!");
    // else, load up saved tasks
  
    // parse into array of objects
    console.log(savedScores, "hello");
    //savedScores = JSON.parse(savedScores);
    var pTag = document.createElement("p");
    pTag.textContent= savedScores;
    document.querySelector(".scorelist").appendChild(pTag);
    console.log(document.querySelector(".scorelist"));
  
  
  
    // loop through savedTasks array
    for (var i = 0; i < savedScores.length; i++) {
      scoreList.textContent = savedScores[i];
      // pass each task object into the `createTaskEl()` function
      //createTaskEl(loadUser[i]);
    }
  };

  loadUser();