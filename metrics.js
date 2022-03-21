var increment = {min:1,max:10};
var updateSpeed = {min:1000,max:5000};

var fontChance = {min:1,max:10};
var fontSize = {min:15,max:45};

var colorChance = {min:1,max:10};

var incrementSpeedModifier= 1;
var newNumber= {min: 3000,max: 4000};

var rotateCloseToFull = {min: 350,max: 380};

var pressMsgSpeed = 0.05;

var progression = {
    5: function(){
        incrementSpeedModifier= 0.75,
        newNumber= {min: 20000,max: 30000}
        console.log(5);
        if(showMessage)
        {
            tryPressNumber();
        }
    },
    10: function(){
        incrementSpeedModifier= 0.5,
        newNumber= {min: 20000,max: 30000}
        console.log(10);
    },
    15: function(){
        incrementSpeedModifier= 0.25,
        newNumber= {min: 30000,max: 60000}
        clickFunctions.remove.weight=1;
        clickFunctions.nothing.weight=1;
        console.log(15);
    }
};

var clickFunctions = {
    rotateQuarter: { weight: 1, fn: function(e, element){
        rotateBy(e.target, 45);
        console.log(element)
    }},
    rotateConstant: { weight: 1, fn: function(e, element){
        setInterval(function(){
            rotateBy(e.target, 1);
        }, 1);
    }},
    spin: { weight: 1, fn: function(e, element){
        var i = 0;
        var interval = setInterval(function(){
            i++
            rotateBy(e.target, 1);
            if(i == 360)
                clearInterval(interval);
        }, 1);
    }},
    spinAlmost: { weight: 1, fn: function(e, element){
        var i = 0;
        var interval = setInterval(function(){
            i++
            rotateBy(e.target, 1);
            if(i == element.rotateBy)
                clearInterval(interval);
        }, 1);
    }},
    biggerFont: { weight: 1, fn: function(e, element){
        var oldSize = window.getComputedStyle(e.target, null).getPropertyValue('font-size').split("px")[0]
        
        e.target.style.fontSize = (parseInt(oldSize) + 1) + "px";
    }},
    smallerFont: { weight: 1, fn: function(e, element){
        var oldSize = window.getComputedStyle(e.target, null).getPropertyValue('font-size').split("px")[0]
        
        e.target.style.fontSize = (parseInt(oldSize) - 1) + "px";
    }},
    moveRight: { weight: 1, fn: function(e, element){
        var oldLeft = e.target.style.left.split("px")[0];
        e.target.style.left = (parseInt(oldLeft) + 10) + "px";
    }},
    moveLeft: { weight: 1, fn: function(e, element){
        var oldLeft = e.target.style.left.split("px")[0];
        e.target.style.left = (parseInt(oldLeft) - 10) + "px";
    }},
    remove: { weight: 0, fn: function(e, element){
        e.target.remove()
    }},
    nothing: { weight: 0, fn: function(e, element){
    }},
};

var colors = [
    "pink",
    "blue",
    "grey",
    "red",
    "hotpink",
    "darkgrey",
];
