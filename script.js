// // dets for details
// // window.addEventListener("mousemove", function(dets){
// //     // console.log(dets.clientX, dets.clientY); for mouse location
// //     circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
// // // }) this i in js 


var circle = document.querySelector("#circle");
var frame = document.querySelector(".frame");
// lerp eqn
const lerp = (x, y, a)=> x*(1-a)+y*a;

window.addEventListener("mousemove", function(dets){
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .2,
        ease: Expo
    })
})


frame.addEventListener("mousemove", function(dets){

    // to find dimensions
    var dims = frame.getBoundingClientRect();
    console.log(dims);//console mein dimensions

    var xstart = dims.x;
    var xend = dims.x + dims.width;
    // iski explanation neeche hain 

    // gsap.utils.mapRange(0, 1, 100, 200, 0); // means 0 and 1 ko map kardo 100 and 200 se aur 0 pe jo value hai woh dedo
   var zeroone= gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

    lerp(-50, 50, zeroone);// 0 aaya toh -50 one aaya toh +50

    gsap.to(circle, {
        scale: 8,
        // duration: .4
    }) 
    gsap.to(".frame span", {
        color: "#fff",
        duration: .4,
        y: "-5vw"
    })

    gsap.to(".frame span", {
        x:  lerp(-50, 50, zeroone),
        duration: .3
    })
})

frame.addEventListener("mouseleave", function(dets){
    gsap.to(circle, {
        scale: 1,
        
    })
    gsap.to(".frame span", {
        color: "#000",
        duration: .4,
        y: 0
    })
    
    gsap.to(".frame span", {
        x: 0,
        duration: .3
    })
})

// Lerp: Linear interpolation=> (initial value,   final value, aur zero se 1 ke beech ki value) 

                                    // 0                   1                               
// so to transform mouse movement into left we give value -50 50 0 ( 0 matlab left waali value yaani -50)
// so to transform mouse movement into right we give value -50 50 1 ( 1 matlab right waali value yaani 50)
                                                                    
// but below is not clamping it is map range
// Clamping : 100 - 200 inn values ko hum 0 yaa 1 ki form mein likh sakte hain
// so in this example 0 is 100 ,  1 is 200 and lets say .5 then it will be 150

// so we clamp 200-350  to 0-1
// os when mouse goes 200(starting of span) i.e left.     lerp turn 0 i.e left 
// and when mouse goes 350(ending of span) i.e right.     lerp turn 1 i.e right







