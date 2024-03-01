<div class ="container">
    <div class="right-col">
        <p><h1>Click Here To Listen</h1></p>
        <img src="../Images/blackplay.png" id="icon">


 </div>
 <audio id="mysong">
    <source src="../Images/southside.mp3" type="audio/mp3">
 </audio> 
 <script>
    var mysong = document.getElementById("mysong");
    var icon = document.getElementById("icon");
    icon.onclick=function(){
        if(mysong.paused){
            mysong.play();
            icon.src="../Images/pauseblack.png";
        }else{
            mysong.pause();
            icon.src="../Images/blackplay.png";
        
        }
        }
    
 </script>