function desplega() {
    
    document.getElementById("nav-media").classList.toggle("mostra");
}

function desplegaIndex() {
    document.getElementById("nav-media-index").classList.toggle("mostra-i");
}



(function() {
    
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc, body;

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
        const MAX_desv = 10;
        let desv_x = (event.pageX / window.innerWidth)*(MAX_desv*2)-MAX_desv;
        let desv_y = (event.pageY / window.innerHeight)*(MAX_desv*2)-MAX_desv;
        console.log("x: "+desv_x)
        console.log("y: "+desv_y)
        document.getElementById("clip-home").style.setProperty("top", "calc(20% + "+desv_y+"px)");
        document.getElementById("clip-home").style.setProperty("left", "calc(5% + "+desv_x+"px)");

        document.getElementById("clip-cotxe").style.setProperty("top", "calc(20% + "+desv_y/2+"px)");
        document.getElementById("clip-cotxe").style.setProperty("left", "calc(10% + "+desv_x/2+"px)");

        

        // document.getElementById("clip-cotxe").style.top =
        // document.getElementById("clip-cotxe").style.left =

    }
})();



function canviaTrailer(num) {
    let url1 = "https://www.youtube.com/embed/xZCiyw1ZfB0?autoplay=1&mute=1&&showinfo=0";
    let title1 = "Fargo Season 1 Official Trailer 1 (2014) HD - FX TV Series";
    let url2 = "https://www.youtube.com/embed/F_Y-JkTXY7k?autoplay=1&mute=1&&showinfo=0";
    let title2 = "Fargo: Season 2 - Trailer &quot;Friendly People&quot;";
    let url3 = "https://www.youtube.com/embed/bR2i8-z_fvc?autoplay=1&mute=1&&showinfo=0";
    let title3 = "Fargo | Installment 3: Official Trailer | FX";
    let url4 = "https://www.youtube.com/embed/RLEwtys6yZw?autoplay=1&mute=1&&showinfo=0";
    let title4 = "FARGO Installment 4 Official Trailer (HD) Chris Rock";
    let url5 = "https://www.youtube.com/embed/6SCn6UDXw_I?autoplay=1&mute=1&&showinfo=0";
    let title5 = "Fargo | Installment 5 Official Trailer | Juno Temple, Jon Hamm, Jennifer Jason Leigh | FX";

    document.getElementById("temp1").classList.remove('selecc');
    document.getElementById("temp2").classList.remove('selecc');
    document.getElementById("temp3").classList.remove('selecc');
    document.getElementById("temp4").classList.remove('selecc');
    document.getElementById("temp5").classList.remove('selecc');

    document.getElementById("temp" + num).classList.add('selecc');

    switch (num) {
        
        case 1: {
            document.getElementById("div-trailer").src = url1;
            document.getElementById("div-trailer").title = title1;
            break;
        }
        case 2: {
            document.getElementById("div-trailer").src = url2;
            document.getElementById("div-trailer").title = title2;
            break;
        }
        case 3: {
            document.getElementById("div-trailer").src = url3;
            document.getElementById("div-trailer").title = title3;
            break;
        }
        case 4: {
            document.getElementById("div-trailer").src = url4;
            document.getElementById("div-trailer").title = title4;
            break;
        }
        case 5: {
            document.getElementById("div-trailer").src = url5;
            document.getElementById("div-trailer").title = title5;
            break;
        }


    }

}


if(document.getElementById("hamb-menu") !== null){
    document.getElementById("hamb-menu").addEventListener("click", desplega);
}


if(document.getElementById("hamb-index") !== null){
    document.getElementById("hamb-index").addEventListener("click", desplegaIndex)
}


if(document.getElementById("temp1") !== null){
    document.getElementById("temp1").addEventListener("click", function() {  canviaTrailer(1); })
}


if(document.getElementById("temp2") !== null){
    document.getElementById("temp2").addEventListener("click", function() {  canviaTrailer(2); })
}


if(document.getElementById("temp3") !== null){
    document.getElementById("temp3").addEventListener("click", function() {  canviaTrailer(3); })
}


if(document.getElementById("temp4") !== null){
    document.getElementById("temp4").addEventListener("click", function() {  canviaTrailer(4); })
}


if(document.getElementById("temp5") !== null){
    document.getElementById("temp5").addEventListener("click", function() {  canviaTrailer(5); })
}

