var canvas = new fabric.Canvas ("mycanvas")
var playerx = 200
var playery = 200
var shwidth = 30
var shheight = 30
var playerobject = ""
var shobject = ''

function player_update () {
    // from URL contains 2 arguments-1.Pic url 2. Function (Img) is used to upload that image in canvas
    // (Img)- is the object for the image set by default
    // the object (Img) is assigned to playerobject variable.
    fabric.Image.fromURL ("player.png", function (Img) {
    playerobject=Img
    playerobject.scaleToWidth (150)
    playerobject.scaleToHeight (150)
    playerobject.set ({
        top:playery,
        left:playerx
    })
    canvas.add (playerobject)
    } 
    )
}

window.addEventListener("keydown", kd)


function kd (e) {
    keypress=e.keyCode
    console.log (keypress)
    if (  keypress== "80") {
        shwidth+=10
        shheight+=10
        document.getElementById ("cw").innerHTML=shwidth
        document.getElementById ("ch").innerHTML=shheight
    }
    if ( keypress== "77") {
        shwidth-=10
        shheight-=10
        document.getElementById ("cw").innerHTML=shwidth
        document.getElementById ("ch").innerHTML=shheight
    }

    
    if ( keypress== "70") {
        superhero ("face.png")
        console.log ("f")
    }  

    if ( keypress== "66") {
        superhero ("ironman_body.png")
        console.log ("b")
    }  

    if ( keypress== "76") {
        superhero ("thor_left_hand.png")
        console.log ("l")
    }  

    if ( keypress== "82") {
        superhero ("captain_america_right_hand.png")
        console.log ("r")
    }  

    if ( keypress== "75") {
        superhero ("hulk_knees.png")
        console.log ("k")
    }  
    
}

function superhero (shname) {
    fabric.Image.fromURL  (shname, function (Img) {
        shobject=Img
        shobject.scaleToWidth (shwidth)
        shobject.scaleToHeight (shheight)
        shobject.set ({
            top:playery,
            left:playerx
        })
        canvas.add (shobject)
    
    })
    }