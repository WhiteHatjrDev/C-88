var canvas = new fabric.Canvas("myCanvas")
block_width = 30;
block_height = 30;
player_x = 10;
player_y = 10;
var player_object="";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img) {
        block_object = Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(block_object)
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    var keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        block_width = block_width + 10;
        block_height = block_height + 10;
        console.log("P and shift pressed together")
        document.getElementById("current_width").innerHTML = block_width
        document.getElementById("current_height").innerHTML = block_height

    }

    if(e.shiftKey == true && keyPressed == '77'){
        block_width = block_width - 10;
        block_height = block_height - 10;
        console.log("M and shift pressed together")
        document.getElementById("current_width").innerHTML = block_width
        document.getElementById("current_height").innerHTML = block_height
    }

    if(keyPressed == "38"){
        up();
        console.log("up")
    }
    if(keyPressed == "40"){
        down();
        console.log("down")
    }
    if(keyPressed == "37"){
        left();
        console.log("left")
    }
    if(keyPressed == "39"){
        right();
        console.log("right")
    }
    if(keyPressed == "87"){
        new_image("wall.jpg");
        console.log("w")
    }
    if(keyPressed == "71"){
        new_image("ground.png");
        console.log("g")
    }
    if(keyPressed == "76"){
        new_image("light_green.png");
        console.log("l")
    }
    if(keyPressed == "84"){
        new_image("trunk.jpg");
        console.log("t")
    }
    if(keyPressed == "82"){
        new_image("roof.jpg");
        console.log("r")
    }
    if(keyPressed == "89"){
        new_image("yellow_wall.png");
        console.log("y_w")
    }
    if(keyPressed == "68"){
        new_image("dark_green.png");
        console.log("d_g")
    }
    if(keyPressed == "85"){
        new_image("unique.png");
        console.log("u")
    }
    if(keyPressed == "67"){
        new_image("cloud.jpg");
        console.log("c")
    }
}
function up(){
    if(player_y > 0){
        player_y -= 10;
        canvas.remove(player_object);
        playerUpdate();
        console.log("Player is moving up");
    }
}
function down(){
    if(player_y < 500){
        player_y += 10;
        canvas.remove(player_object);
        playerUpdate();
        console.log("Player is moving down");
    }
}
function left(){
    if(player_x > 0){
        player_x -= 10;
        canvas.remove(player_object);
        playerUpdate();
        console.log("Player is moving left");
    }
}
function right(){
    if(player_x < 700){
        player_x += 10;
        canvas.remove(player_object);
        playerUpdate();
        console.log("Player is moving right");
    }

}
