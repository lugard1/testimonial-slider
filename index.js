const testimonials = [
  {
    name: "Jennifer Thompson",
    photoUrl: `https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D`,
    text: `I am beyond impressed with Apple's innovative 
      mobile, laptops, and tablets. Their sleek 
      design and cutting-edge technology truly set 
      them apart from the competition. As a loyal
      customer, I can confidently say that Apple 
      exceeds all expectations in quality and
      performance`
  },
  {
    name: "Emily Anderson",
    photoUrl: `https://images.unsplash.com/photo-1685903772095-f07172808761?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    text: `I am extremely satisfied with the mobile, laptops,
     and tablets from Apple. Their products are sleek, efficient,
      and reliable. I can't imagine my life without them. 
      Thank you, Apple, for enhancing my tech experience!`  
  },
  {
    name: "Alexandra Johnson",
    photoUrl: `https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    text: `Apple offers an amazing range of mobile devices like smartphones
     and tablets, as well as reliable laptops. Their products are top-notch
      in quality and design, making them a popular choice among tech-savvy
       consumers.`  
  }
];

const imgEl = document.querySelector('img');
const textEl = document.querySelector('.text')
const usernameEl = document.querySelector('.username')

let idx = 0;

updateTestimonial();

function updateTestimonial () {
  const {name, photoUrl, text} = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if(idx === testimonials.length){
    idx = 0;
  }
  setTimeout(()=> {
    updateTestimonial();
  }, 15000)
}