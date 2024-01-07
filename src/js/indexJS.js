
(function() {
    
    setTimeout(()=>{
        document.getElementById("clip-home").style.transform = "translate(0px, -20px)";
        document.getElementById("clip-cotxe").style.transform = "translate(0px, -5px)";    
        document.onmousemove = handleMouseMove;

    }, 4000)


    function handleMouseMove(event) {

        const MAX_desv = 5;
        let desv_x = (event.pageX / window.innerWidth)*(MAX_desv*2)-MAX_desv;
        let desv_y = (event.pageY / window.innerHeight)*(MAX_desv*2)-MAX_desv;
        
        document.getElementById("clip-home").style.transform = "translate("+desv_x+"px, "+desv_y+"px)";
        
        document.getElementById("clip-cotxe").style.transform = "translate("+desv_x/2+"px, "+desv_y/2+"px)";
    }
})();