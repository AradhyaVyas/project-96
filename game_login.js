
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    //Set "player1_name" using localStorage.setItem() function
	  //Set "player2_name" using localStotrage.setItem() function

  localStorage.setItem("Player1" , player_1);
  localStorage.setItem9("Player2" , player_2);
  
    window.location = "game_page.html";
}

