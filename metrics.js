var increment = {min:1,max:10};
var updateSpeed = {min:1,max:5};

var fontChance = {min:1,max:10};
var fontSize = {min:15,max:45};

var colorChance = {min:1,max:10};

var incrementSpeedModifier= 1;
var newNumber= {min: 3,max: 4};

var rotateCloseToFull = {min: 350,max: 380};

var pressMsgSpeed = 0.05;

var progression = {
    5: function(){
        incrementSpeedModifier= 0.75,
        newNumber= {min: 20,max: 30}
        if(showClickMessage)
        {
            tryPressNumber();
        }
    },
    10: function(){
        incrementSpeedModifier= 0.5,
        newNumber= {min: 20,max: 30}
    },
    15: function(){
        incrementSpeedModifier= 0.25,
        newNumber= {min: 30,max: 60}
        clickFunctions.remove.weight=1;
        clickFunctions.nothing.weight=1;
    }
};

var clickFunctions = {
    rotateQuarter: {name: "rotateQuarter", weight: 1, fn: function(e, item){
        rotateBy(e.target, 45);
    }},
    rotateConstant: {name: "rotateConstant", weight: 1, fn: function(e, item){
        setInterval(function(){
            rotateBy(e.target, 1);
        }, 1);
    }},
    spin: {name: "spin", weight: 1, fn: function(e, item){
        var i = 0;
        var interval = setInterval(function(){
            i++
            rotateBy(e.target, 1);
            if(i == 360)
                clearInterval(interval);
        }, 1);
    }},
    spinAlmost: {name: "spinAlmost", weight: 1, fn: function(e, item){
        var i = 0;
        var interval = setInterval(function(){
            i++
            rotateBy(e.target, 1);
            if(i == item.rotateBy)
                clearInterval(interval);
        }, 1);
    }},
    biggerFont: {name: "biggerFont", weight: 1, fn: function(e, item){
        var oldSize = window.getComputedStyle(e.target, null).getPropertyValue('font-size').split("px")[0]
        
        e.target.style.fontSize = (parseInt(oldSize) + 1) + "px";
    }},
    smallerFont: {name: "smallerFont", weight: 1, fn: function(e, item){
        var oldSize = window.getComputedStyle(e.target, null).getPropertyValue('font-size').split("px")[0]
        
        e.target.style.fontSize = (parseInt(oldSize) - 1) + "px";
    }},
    moveRight: {name: "moveRight", weight: 1, fn: function(e, item){
        var oldLeft = e.target.style.left.split("px")[0];
        e.target.style.left = (parseInt(oldLeft) + 10) + "px";
    }},
    moveLeft: {name: "moveLeft", weight: 1, fn: function(e, item){
        var oldLeft = e.target.style.left.split("px")[0];
        e.target.style.left = (parseInt(oldLeft) - 10) + "px";
    }},
    remove: {name: "remove", weight: 0, fn: function(e, item){
        e.target.remove()
    }},
    nothing: {name: "nothing", weight: 0, fn: function(e, item){
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
