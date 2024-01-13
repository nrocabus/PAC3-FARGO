function canviaTrailer(num) {
    let url1 = "https://www.youtube.com/embed/xZCiyw1ZfB0?autoplay=1&mute=1&&showinfo=0";
    let title1 = "Fargo Season 1 Official Trailer 1 (2014) HD - FX TV Series";
    let url2 = "https://www.youtube.com/embed/F_Y-JkTXY7k?autoplay=1&mute=1&&showinfo=0";
    let title2 = "Fargo: Season 2 - Trailer &quot;Friendly People&quot;";
    let url3 = "https://www.youtube.com/embed/bR2i8-z_fvc?autoplay=1&mute=1&&showinfo=0";
    let title3 = "Fargo | Installment 3: Official Trailer | FX";
    let url4 = "https://www.youtube.com/embed/RLEwtys6yZw?autoplay=1&mute=1&&showinfo=0";
    let title4 = "FARGO Installment 4 Official Trailer (HD) Chris Rock";
    let url5 = "https://www.youtube.com/embed/8ZdK87tfv6k?autoplay=1&mute=1&&showinfo=0";
    let title5 = "Fargo Season 5 Trailer";

    document.getElementById("temp1").classList.remove('selecc');
    document.getElementById("temp2").classList.remove('selecc');
    document.getElementById("temp3").classList.remove('selecc');
    document.getElementById("temp4").classList.remove('selecc');
    document.getElementById("temp5").classList.remove('selecc');

    document.getElementById("temp" + num).classList.add('selecc');

    switch (num) {
        
        case 1: {
            console.log("REMOVE!")
            document.getElementById("div-trailer").removeAttribute("srcdoc");
            document.getElementById("div-trailer").src = url1;
            document.getElementById("div-trailer").title = title1;
            break;
        }
        case 2: {
            document.getElementById("div-trailer").removeAttribute("srcdoc");
            document.getElementById("div-trailer").src = url2;
            document.getElementById("div-trailer").title = title2;
            break;
        }
        case 3: {
            document.getElementById("div-trailer").removeAttribute("srcdoc");
            document.getElementById("div-trailer").src = url3;
            document.getElementById("div-trailer").title = title3;
            break;
        }
        case 4: {
            document.getElementById("div-trailer").removeAttribute("srcdoc");
            document.getElementById("div-trailer").src = url4;
            document.getElementById("div-trailer").title = title4;
            break;
        }
        case 5: {
            document.getElementById("div-trailer").removeAttribute("srcdoc");
            document.getElementById("div-trailer").src = url5;
            document.getElementById("div-trailer").title = title5;
            break;
        }


    }

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

