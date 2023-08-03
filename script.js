
var crs = document.querySelector("#cursor")
var crsblur = document.querySelector("#curblur")

document.addEventListener("mousemove",function(dets){
    crs.style.left = dets.x+"px"
    crs.style.top = dets.y+"px"
    crsblur.style.left = dets.x-250 +"px"
    crsblur.style.top = dets.y-250+"px"
})


var h4 = document.querySelectorAll("#nav h4")

h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
       crs.style.scale = 3.5
       crs.style.border = ".5px solid #fff"
       crs.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crs.style.scale = 1
        crs.style.border = "none"
        crs.style.backgroundColor = "#95c11e"
     })
})





var h1 = document.querySelector("#page4 h1")
var ele = document.querySelectorAll(".elem")
ele.forEach(function(elements){
    elements.addEventListener("mouseenter",function(){
       h1.style.webkitTextStroke = "2px rgb(171, 255, 37)"
    })
    elements.addEventListener("mouseleave",function(){
       h1.style.webkitTextStroke = "2px #fff"
    })
})






gsap.to("#nav", {
    backgroundColor: "#000",
    duration: .6,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -20%",
      end: "top -11%",
      scrub: 1,
    },
});
  
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
});



gsap.from("#about-us,#about1",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:.4,
    scrollTrigger:{
        scroller:"body",
        trigger:"#about-us",
        // markers:true,
        start:"top 80%",
        end:"top 58%"
    }
})




gsap.from("#colon1",{
    y:-60,
    x:-60,
    opacity:0,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:50,
    x:50,
    opacity:0,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 55%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 55%",
        scrub:3
    }
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      backgroundColor:"#fff",
      color:"#fff"
    },
  });
  

