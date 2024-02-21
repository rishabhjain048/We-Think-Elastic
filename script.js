function loco(){
    
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}


loco();


let tl = gsap.timeline();

gsap.from(".img-animated", {
    height:"100vh",
    delay:7.5,
    duration:2,
    scrub:true,
})

tl.to(".img1", {
    opacity:1,
})
tl.from(".img1", {
    opacity:0,
    duration:0.01
})
tl.to(".img2", {
    opacity:1
})
tl.from(".img2", {
    opacity:0,
    duration:0.01
})
tl.to(".img3", {
    opacity:1
})
tl.from(".img3", {
    opacity:0,
    duration:0.01
})
tl.to(".img4", {
    opacity:1
})
tl.from(".img4", {
    opacity:0,
    duration:0.01
})

tl.to(".img5", {
    opacity:1
})
tl.from(".img5", {
    opacity:0,
    duration:0.01
})

tl.to(".img6", {
    opacity:1
})
tl.from(".img6", {
    opacity:0,
    duration:0.01
})

tl.to(".img7", {
    opacity:1
})
tl.from(".img7", {
    opacity:0,
    duration:0.01
})

tl.to(".img8", {
    opacity:1
})
tl.from(".img8", {
    opacity:0,
    duration:0.01
})

tl.to(".img9", {
    opacity:1
})
tl.from(".img9", {
    opacity:0,
    duration:0.01
})

tl.to(".img10", {
    opacity:1
})
tl.from(".img10", {
    opacity:0,
    duration:0.01
})

tl.to(".img11", {
    opacity:1
})
tl.from(".img11", {
    opacity:0,
    duration:0.01
})
tl.to(".img12", {
    opacity:1
})
tl.from(".img12", {
    opacity:0,
    duration:0.01
})
tl.to(".img13", {
    opacity:1
})
tl.from(".img13", {
    opacity:0,
    duration:0.01
})
tl.to(".img14", {
    opacity:1
})
tl.from(".img14", {
    opacity:0,
    duration:0.01
})



let tl2 = tl = gsap.timeline();

tl2.from(".hello h1", {
    transform: "translateY(80%)",
    stagger: 0.1,
    duration: 2,
    delay:8
})


gsap.to(".page2 video", {
    width:"100%",
    duration:4,
    scrollTrigger:{
        trigger:".page2 video",
        scroller:".main",
        // markers:true,
        start:"top 100%",
        end:"top 0",
        scrub:2
    }
})

gsap.from(".page3-content h1,p", {
  transform: "translateY(80%)",
    stagger: 1,
    duration: 2,
    opacity:0,
    scrollTrigger:{
      trigger:".page3-content h1,p",
      scroller:".main",
      // markers:true,
      start:"-150% 50%",
      end:"-150% 20%",
      scrub:2
  }

})

let experti = gsap.timeline({
    scrollTrigger:{
        trigger:".page6",
        scroller: ".main",
        // markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:4,
        pin:true

    }
})


experti.to(".page6 h1,.img1-page6,img2-page6,.img3-page6", {
    x:"-350vh",
    
})

gsap.from(".page8-content h1", {
  transform: "translateY(80%)",
    stagger: 1,
    duration: 1,
    opacity:0,
    scrollTrigger:{
      trigger:".page8-content h1",
      scroller:".main",
      // markers:true,
      start:"-150% 50%",
      end:"-150% 40%",
      scrub:2
  }

})

//  document.addEventListener("mousemove", function(dets){
//      gsap.to(".cursur", {
//         top: dets.y,
//         left: dets.x,
//     })
//  })
















// document.addEventListener("mousemove", function(dets){
//     gsap.to(".cursur", {
//         top: dets.y,
//         left: dets.x,
//     })
// })


// function displayImagesWithDelay(imageArray, delay) {
//     let index = 0;

//     function displayNextImage() {
//         if (index < imageArray.length) {
//             const imgElement = document.querySelector('.' + imageArray[index]);
//             imgElement.style.position = 'fixed';
//             imgElement.style.top = '50%';
//             imgElement.style.left = '50%';
//             imgElement.style.transform = 'translate(-50%, -50%) scale(0)';
//             imgElement.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

//             // Force reflow to apply initial styles before transitioning
//             void imgElement.offsetWidth;

//             // Trigger the pop-up effect
//             imgElement.style.opacity = '1';
//             imgElement.style.transform = 'translate(-50%, -50%) scale(1)';

//             // Make the image disappear after the specified delay
//             setTimeout(() => {
//                 imgElement.style.opacity = '0';
//                 // imgElement.style.transform = 'translate(-50%, -50%) scale(0)';
//                 setTimeout(() => {
//                     imgElement.style.display = 'none'; // Hide the image after disappearing
//                     index++;
//                     displayNextImage(); // Display the next image
//                 }, 100); // Wait for the transition to complete before hiding the image
//             }, delay);
//         }
//     }

//     // Start displaying images
//     displayNextImage();
// }

// // Example usage:
// const imageClassArray = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12", "img13", "img14"];
// displayImagesWithDelay(imageClassArray, 500); // Display each image with a delay of 1000 milliseconds (1 second)
















// tl.from(".img-animated .img2", {
//     opacity:1,
//     duration:0.1,
//     stagger: 1
// })

// tl.to(".img-animated .img2", {
//     opacity:0,
//     duration:0.1,
//     stagger: 1
// })

// ,".img5",".img6",".img7",".img8",".img9",".img10",".img11",".img12",".img13",".img14",  // Add more image paths as needed

// const imageArray = [".img1",".img2",".img3",".img4"
// ];

// const imageElement = document.querySelector('.img-animated');
// let currentIndex = 0;

// console.log(imageArray);

// image.addEventListener("" , function(){
//     heart.style.opacity = 0.8;
//     heart.style.transform = "scale(1)";
//     heart.style.fontSize = "100px"
//     setTimeout(() => {
//         heart.style.opacity = 0;
//         heart.style.transform = "scale(0)";

//     }, 500)

// })