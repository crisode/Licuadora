let $estado = "apagado";

const $licuadora = document.getElementById("blender"),
$soundOn = document.getElementById("blender-sound"),
$soundButoon =document.getElementById("blender-button-sound")


function control() {
    if ($estado =="apagado"){
        $estado = "encendido";
        $licuadora.classList.add("active")
        On()
        console.log("prendiste");
    }else{
        $estado = "apagado"
        On()
        $licuadora.classList.remove("active")

        console.log("apagaste");
    } 
}


function On() {
   if ($soundOn.paused) { 
       $soundButoon.play()
       $soundOn.play();
   }else{
       $soundButoon.play();
       $soundOn.pause();
       $soundOn.currentTime = 0;
   }
}