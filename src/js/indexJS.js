
(function() {
    
    setTimeout(()=>{
        document.getElementById("clip-home").style.transform = "translate(0px, -20px)";
        document.getElementById("clip-cotxe").style.transform = "translate(0px, -5px)";    
        document.onmousemove = handleMouseMove;

    }, 4000)


    function handleMouseMove(event) {
        // var eventDoc, doc, body;

        event = event || window.event; // IE-ism        //########borrar i provar a IE

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        // if (event.pageX == null && event.clientX != null) {
        //     eventDoc = (event.target && event.target.ownerDocument) || document;
        //     doc = eventDoc.documentElement;
        //     body = eventDoc.body;

        //     event.pageX = event.clientX +
        //       (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        //       (doc && doc.clientLeft || body && body.clientLeft || 0);
        //     event.pageY = event.clientY +
        //       (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
        //       (doc && doc.clientTop  || body && body.clientTop  || 0 );
        // }

        //console.log(event.pageX)

        // Use event.pageX / event.pageY here
        // console.log(event.pageX);
        // console.log(window.innerHeight);
        // console.log(event.pageY / window.innerHeight * 100)
        const MAX_desv = 5;
        let desv_x = (event.pageX / window.innerWidth)*(MAX_desv*2)-MAX_desv;
        let desv_y = (event.pageY / window.innerHeight)*(MAX_desv*2)-MAX_desv;
        // console.log("x: "+desv_x)
        // console.log("y: "+desv_y)
        // document.getElementById("clip-home").style.setProperty("top", "calc(20% + "+desv_y+"px)");
        // document.getElementById("clip-home").style.setProperty("left", "calc(5% + "+desv_x+"px)");
//console.log(desv_x)
        document.getElementById("clip-home").style.transform = "translate("+desv_x+"px, "+desv_y+"px)";
        // document.getElementById("clip-home").style.webkitTransform = "translate()";
        
        document.getElementById("clip-cotxe").style.transform = "translate("+desv_x/2+"px, "+desv_y/2+"px)";

        // document.getElementById("clip-cotxe").style.setProperty("top", "calc(20% + "+desv_y/2+"px)");
        // document.getElementById("clip-cotxe").style.setProperty("left", "calc(10% + "+desv_x/2+"px)");
        

        // document.getElementById("clip-cotxe").style.top =
        // document.getElementById("clip-cotxe").style.left =
    }
})();