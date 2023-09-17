const  Menu = document.getElementById("Menu");
const  Navigation = document.getElementById("navigation-list");
const  Mark = document.getElementById("X-mark");
const  Submit = document.getElementById("Submit");
const  Success = document.getElementById("Successful");
const  You = document.getElementById("You");
const  Email = document.getElementById("Email");
const  Feedback = document.getElementById("Feedback");
const  SubAbout = document.querySelectorAll(".SubAbout");
const  button = document.querySelectorAll(".Unsupport");
const  Hire = document.getElementById("Hire");
const  Input = document.getElementsByTagName("input")[0];
const  Exit = document.querySelectorAll(".Description  i");
const  Dead = document.querySelectorAll(".Description");
const  WebDesign = document.getElementById("WebDesign");
const  Photoshop = document.getElementById("DescriptionDesign");
const  Programmer = document.getElementById("Programmer");
const  Illustrator = document.getElementById("DescriptionProgrammer");
const  WebDeveloper = document.getElementById("WebDeveloper");
const  Figma = document.getElementById("DescriptionWebDeveloper");
const  Shworks1 = document.querySelector("#layer-1 div > i");
const  Shworks2 = document.querySelector("#layer-2 div > i");
const  Shworks3 = document.querySelector("#layer-3 div > i");
const  SubWork1 = document.getElementById("proof-1");
const  SubWork2 = document.getElementById("proof-2");
const  SubWork3 = document.getElementById("proof-3");
const  leave = document.querySelectorAll(".leave");
const  Loader = document.querySelector(".loader");
const  Contain = document.querySelector('.Contain');
const  Violet = document.getElementById('Violet')




window.addEventListener('load', () => {

if(Violet) {
  
  Contain.style.display='block'
  document.body.removeChild(Loader);

}

})


Shworks1.addEventListener("click", () => {
  SubWork1.style.scale="1";
  SubWork1.style.left="0";

  SubWork1.style.outline="none";
  SubWork1.style.border="none";

  SubWork2.style.scale="0";
  SubWork3.style.scale="0";


})

Shworks2.addEventListener("click", () => {
   SubWork2.style.scale="1";

   SubWork2.style.outline="none";
   SubWork2.style.border="none";
  
   SubWork1.style.scale="0";
   SubWork1.style.left="-30%";
   SubWork3.style.scale="0";
   SubWork3.style.left="30%";

})
Shworks3.addEventListener("click", () => {

  SubWork3.style.scale="1";
  SubWork3.style.left="0";

  SubWork3.style.outline="none";
  SubWork3.style.border="none";
 
  SubWork1.style.scale="0";
  SubWork1.style.left="-30%";
  SubWork2.style.scale="0";

} )
leave.forEach(leaves => {
leaves.addEventListener("click", () => {
   SubWork1.style.scale="0";
   SubWork1.style.left="-30%";
   
   SubWork2.style.scale="0";
   SubWork2.style.rotate="0deg";

   SubWork3.style.scale="0";
   SubWork3.style.left="30%";
})
})
Exit.forEach(Gone =>  {
Gone.addEventListener("click", () => {
Dead.forEach(Nine => {
Nine.style.scale="0";
})
})
})

WebDesign.addEventListener("click", () => {
Photoshop.style.scale="1";
Illustrator.style.scale="0";
Figma.style.scale="0";
})

Programmer.addEventListener("click", () => {
Photoshop.style.scale="0";
Illustrator.style.scale="1";
Figma.style.scale="0";
})

WebDeveloper.addEventListener("click", () => {
Photoshop.style.scale="0";
Illustrator.style.scale="0";
Figma.style.scale="1";
})

let LastScroll = 0;

const Desktop = document.getElementById("list-desktop");
const Ghost = document.querySelector(".Nick");

window.addEventListener("scroll",() => {

const CurrentScroll = window.pageYOffset;
if(CurrentScroll <= 20) {
  Desktop.style.background="transparent";
}
if(LastScroll < CurrentScroll) {

Menu.style.scale="0";
Desktop.style.opacity="0";
Desktop.style.background="rgb(10,0,15)";
Ghost.style.opacity="0";

}
if (LastScroll > CurrentScroll) {

Menu.style.scale="1";
Desktop.style.opacity="1";
Ghost.style.opacity="1";

}

LastScroll = window.pageYOffset;
})
Hire.addEventListener("click", () => {

  alert("Thank you for giving me a chance");
  Input.focus();
})


button.forEach(log => {
  log.addEventListener("click", () => {
  alert("This button is under on further improvements");
  })
})
Menu.addEventListener("click", () => {
Navigation.style.right="0";
})

Mark.addEventListener("click", () => {
Navigation.style.right="-10em";
})  

Submit.addEventListener("click", () => {
if (!You.value) {
Success.innerHTML="Please Enter Your Name";
setTimeout(() => {
    Success.innerHTML="";
},3000)
}
else if(!Email.value) {
    Success.innerHTML="Please Enter Your Email";
    setTimeout(() => {
        Success.innerHTML="";
},3000)
}
else if(!Feedback.value) {
    Success.innerHTML="Please Send Some Message";
    setTimeout(() => {
        Success.innerHTML="";
},3000)
}
else {
Success.innerHTML="You Successfully send  message";
setTimeout(() => {
Success.innerHTML="";
},3000)
}
})

const AboutMini = document.querySelectorAll(".SubAbout");
const Interest = document.querySelectorAll(".Interest");
const Math = document.querySelectorAll(".Language");
const Service = document.querySelectorAll(".Card");
const Work = document.querySelectorAll(".My-Sub-Work");
const Testimonies = document.querySelectorAll(".Testimonies");
const Technology = document.querySelectorAll(".Technology-Card");


const SixObserver = new IntersectionObserver(Testimonials => {
  Testimonials.forEach(Statement => {
    Statement.target.classList.toggle("Pop",Statement.isIntersecting)
  if(Statement.isIntersecting)SixObserver.unobserve(Statement.target);
})
}, {
  threshold: 0
})

Testimonies.forEach(Bring => {
  SixObserver.observe(Bring);
})

const TechObserver = new IntersectionObserver(New => {
 New.forEach(Tech => {
   Tech.target.classList.toggle("Phone",Tech.isIntersecting)
if(Tech.isIntersecting)TechObserver.unobserve(Tech.target)
 })
})

Technology.forEach(Computer => {
  TechObserver.observe(Computer);
})

const observer = new IntersectionObserver(Mini => { 
 Mini.forEach(Sub => {
    Sub.target.classList.toggle("In",Sub.isIntersecting);
if(Sub.isIntersecting)observer.unobserve(Sub.target)
 })
},{
  threshold:0.5
});

AboutMini.forEach(Line => {
observer.observe(Line);
})


const SecondObserver = new IntersectionObserver(Int => {
 Int.forEach(hobby => {
   hobby.target.classList.toggle("reveal", hobby.isIntersecting)
  if(hobby.isIntersecting)SecondObserver.unobserve(hobby.target);
})
},{
  threshold:1
})

Interest.forEach(Mine => {
SecondObserver.observe(Mine);
})


const ThirdObserver = new IntersectionObserver(dif => {
dif.forEach(language => {
  language.target.classList.toggle("Speak", language.isIntersecting)
if(language.isIntersecting)ThirdObserver.unobserve(language.target);
})
},{
  threshold:1
})

Math.forEach(english => {
ThirdObserver.observe(english);
})

const FourthObserver = new IntersectionObserver(Mid => {
  Mid.forEach(Mind => {
    Mind.target.classList.toggle("Effect", Mind.isIntersecting);
  if(Mind.isIntersecting)FourthObserver.unobserve(Mind.target);
})
},{

})

Service.forEach(Can => {
  FourthObserver.observe(Can);
})

const FifthObserver = new IntersectionObserver(portfolio => {
  portfolio.forEach(Mywork => {
    Mywork.target.classList.toggle("Edit",Mywork.isIntersecting)
  if(Mywork.isIntersecting)FifthObserver.unobserve(Mywork.target);
})
}, {
  threshold: 0
})

Work.forEach(Do => {
  FifthObserver.observe(Do);
})
