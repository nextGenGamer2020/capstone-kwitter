
const firebaseConfig = {
      apiKey: "AIzaSyBf5CDq7HSM1FqwGRaQqDkKSd18cRh8ODE",
      authDomain: "kwitter-f52ba.firebaseapp.com",
      databaseURL: "https://kwitter-f52ba-default-rtdb.firebaseio.com",
      projectId: "kwitter-f52ba",
      storageBucket: "kwitter-f52ba.appspot.com",
      messagingSenderId: "1032836990882",
      appId: "1:1032836990882:web:c4512b78a77bfa246614fb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
      row = "<div class = 'room_name' id=" +Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}


function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
      console.log(name)

}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}
