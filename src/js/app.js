
var menu_header = false;

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("open-menu-header").onclick = openMenuHeader;
        document.getElementById("close-menu-header").onclick = closeMenuHeader;
        
    });



function openMenuHeader(){
    console.log(34242)
    var blackie = document.createElement("div");
        blackie.id = "blackie"
        blackie.style.position = "fixed";
        blackie.style.width = "100%";
        blackie.style.height = "100%";
        blackie.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        blackie.style.zIndex = 10;
        blackie.onclick = closeMenuHeader;
        document.body.appendChild(blackie)

   document.getElementById("menu-lateral-mb").style.display = "block";
   document.getElementById("menu-lateral-mb").style.width = "80%";
   

    menu_header = true;
}

function closeMenuHeader(){
    document.getElementById("blackie").remove();
    document.getElementById("menu-lateral-mb").style.width = "0%";
    //document.getElementById("menu-lateral-mb").style.display = "none";
}

function intro(){
    console.log("init")
    let array_textos = ["<span class='t_intro' style='opacity:0'>THIS IS A</span> <span class='t_intro t_intro_t'>TRUE</span> <span class='t_intro'>STORY.</span>","<span class='t_intro'>At the request of the survivors, the names has been changed.</span>", "<span class='t_intro'>Out of respect of the dead, the rest has been told exactly as it ocurred.</span>", "<span class='fargo-typo-cover'>FARGO</span>"]
    let el = document.getElementsByClassName("text-intro");
    let fase = 0;

    setTimeout(canviaText, 2000)
    
    function canviaText(){
        
        el[0].innerHTML = array_textos[fase];
        console.log(el[0].innerHTML)
        let el_t = document.querySelectorAll(".t_intro");
        
        el_t.forEach(e => e.style.opacity = 0.9);
        fase++;
        if(fase<array_textos.length){setTimeout(function(){el_t.forEach(e => e.style.opacity = 0); setTimeout(canviaText, 3000)}, 3000)
        }
    }
}

intro();
