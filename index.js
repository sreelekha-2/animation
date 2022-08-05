// let counter = document.getElementById("count");
// let counter2=document.getElementById("count2");
// let counter3=document.getElementById("count3");

function reveal() {
    // reveal1();
    // reveal2();
    // reveal3();
    let revealElements = document.getElementsByClassName("reveal");
    for (i = 0; i < revealElements.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = revealElements[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            
            revealElements[i].classList.add("active")

        } else {
            revealElements[i].classList.remove("remove")
        }
    }



}

// function reveal1() {
//     let counter = document.getElementById("count");
//     var windowHeight = window.innerHeight;
//     var elementTop = counter.getBoundingClientRect().top;
//     var elementVisible = 100;
//     if (elementTop < windowHeight - elementVisible) {
//         if (counter !== null) {
//             let num = parseInt(counter.textContent);
//             let interval = setInterval(function () {
//                 if (num < 48) {
//                     num = num + 1;
//                     counter.textContent = `${num} +`
//                 } else {
//                     clearInterval(interval)
//                 }

//             }, 70)

//         }
//     }
// }
//     function reveal2() {
//         var windowHeight = window.innerHeight;
//         var elementTop = counter2.getBoundingClientRect().top;
//         var elementVisible = 100;
//         if (elementTop < windowHeight - elementVisible) {
            
//             if (counter2 !== null) {
//                 let num = parseInt(counter2.textContent);
//                 let interval = setInterval(function () {
//                     if (num < 50) {
//                         num = num + 1;
//                         counter2.textContent = `${num} %`
//                     } else {
//                         clearInterval(interval)
//                     }

//                 }, 50)

//             }
//         }

//     }

//     function reveal3() {
//         var windowHeight = window.innerHeight;
//         var elementTop = counter3.getBoundingClientRect().top;
//         var elementVisible = 100;
//         if (elementTop < windowHeight - elementVisible) {
            
//             if (counter3 !== null) {
                
//                 let interval = setInterval(function () {
                    
//                         counter3.textContent = "$1B"
                   
//                         clearInterval(interval)
//                 }, 50)

//             }
//         }

//     }
    window.addEventListener("scroll", reveal);


  

