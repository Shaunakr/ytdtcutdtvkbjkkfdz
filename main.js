var canvas=new fabric.Canvas("myCanvas")
var player_x=10;
var player_y=10;
var blockimg_width=30;
var blockimg_height=30;
var player_object=""

function player_update()
{
   fabric.Image.fromURL("player.png", function(Img) {    
 
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

function block_image(getblock_image)
{
   fabric.Image.fromURL(getblock_image, function(Img) {    
 
   block_object = Img;
 
   block_object.scaleToWidth(blockimg_width);
   block_object.scaleToHeight(blockimg_height);
 
   block_object.set({
   top:player_y,
   left:player_x
   });
 
   canvas.add(block_object);    
 
   });
}
window.addEventListener("keydown",key_down)
function key_down(e)
{
 Ascii=e.keyCode
 if (Ascii=="38") {
    up()
 } 

 if (Ascii=="40") {
   down()
}

if (Ascii=="37") {
   left()
}

if (Ascii=="39") {
   right()
}

if (Ascii=="67") {
   block_image("cloud.jpg")
}

if (Ascii=="68") {
   block_image("dark_green.png")
}

if (Ascii=="71") {
   block_image("ground.png")
}

if (Ascii=="76") {
   block_image("light_green.png")
}

if (Ascii=="82") {
   block_image("roof.jpg")
}

if (Ascii=="84") {
   block_image("trunk.jpg")
}

if (Ascii=="85") {
   block_image("unique.png")
}

if (Ascii=="87") {
   block_image("wall.jpg")
}

if (Ascii=="89") {
   block_image("yellow_wall.png")
}

if (e.shiftKey==true && Ascii=="80") {
   blockimg_width=blockimg_width+10
   blockimg_height=blockimg_height+10
   document.getElementById("current_Width").innerHTML=blockimg_width
   document.getElementById("current_Height").innerHTML=blockimg_height
}

if (e.shiftKey==true && Ascii=="77") {
   blockimg_width=blockimg_width-10;
   blockimg_height=blockimg_height-10;
   document.getElementById("current_Width").innerHTML=blockimg_width;
   document.getElementById("current_Height").innerHTML=blockimg_height;
}

}

function up()
{
 if (player_y>0) {
      player_y=player_y-blockimg_height
   canvas.remove(player_object)
   player_update()
   }
}
function down()
{
   if (player_y<500) {  
   player_y=player_y+blockimg_height
   canvas.remove(player_object)
   player_update()
   }
}
function left()
{
   if (player_x>0) {
   player_x=player_x-blockimg_width
   canvas.remove(player_object)
   player_update()
   }
}
function right()
{
   if (player_x<850) {
   player_x=player_x+blockimg_width
   canvas.remove(player_object)
   player_update()
   }
}