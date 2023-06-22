// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()
console.log("connected");
const image1=document.getElementById("poster-image");
const title1=document.getElementById("poster-title");
const quote1=document.getElementById("poster-quote");
const button1=document.getElementById("randomize");
// Array of predefined poster objects
const image2=document.getElementById("image-url-user");
const title2=document.getElementById("poster-form-author");
const quote2=document.getElementById("poster-form-quote");
const button2=document.getElementById("submit");
const anya=document.getElementById("tryMe");
const box=document.getElementsByClassName("kutia");
const peek=document.getElementById("peek");
const button3=document.getElementById("create");
const posters = [
    {
      image: 'https://media0.giphy.com/media/UyJwO6grNgMKmeBHeA/giphy.gif',
      title: 'Pia Wurtzbach',
      quote: "Coming from a pageant title that celebrates diversity, I've come to appreciate all kinds of beauty.",
    },
    {
      image: 'https://media.tenor.com/z2tg-2P2AswAAAAM/funny-smile.gif',
      title: 'Layne Staley',
      quote: 'My bad habits arent my title. My strengths and my talent are my title.',
    },
    {
      image: 'https://j.gifs.com/xG78AP@large.gif?download=true',
      title: 'George McGovern',
      quote: 'The longer the title, the less important the job.',
    },
    {
      image: 'https://media4.giphy.com/media/wW95fEq09hOI8/200w.gif?cid=6c09b9523xxztrtl90f4k7sjy5ti5afis6bz3wcz953fchrm&ep=v1_gifs_search&rid=200w.gif&ct=g',
      title: 'Pia Wurtzbach',
      quote: 'The future is a big place.',
    },
    {
      image: 'https://media.tenor.com/NQfq1liFH-8AAAAM/byuntear-sad.gif',
      title: 'Pia Wurtzbach',
      quote: 'Just one small positive thought in the morning can change your whole day.',
    },
    {
      image: 'https://www.icegif.com/wp-content/uploads/2023/04/icegif-1250.gif',
      title: 'Rengoku Kyojuro',
      quote: 'Set your heart ablaze.',
    },
    {
      image: 'https://i.pinimg.com/originals/4c/5f/4b/4c5f4b335e8ecc39789d0f85771a9c52.gif',
      title: 'Uzui Tengen',
      quote: 'Why have 1 when you can have 3???',
    },
    {
      image: 'https://media.tenor.com/XpVT0tuvRXEAAAAd/eren-yeager-eren-yeager-season4.gif',
      title: 'Eren Yeager',
      quote: 'What are you doing?',
    },
    {
      image: 'https://media.tenor.com/zbYQjJhOIHwAAAAd/patrick-bateman-visual-studio-code.gif',
      title: 'Discord Playing: Visual Studio Code',
      quote: '07:23:49 hours',
    },
    {
      image: 'https://media.tenor.com/_7Rbd6SfalEAAAAd/gamer-dog.gif',
      title: 'Dog',
      quote: "Teammates when I play ranked.",
    },
    {
      image: 'https://media.tenor.com/gNX1SA91OUAAAAAC/pateick-patrick.gif',
      title: 'Alan D. Wolfelt',
      quote: "Food is symbolic of love when words are inadequate.",
    },
  ];
  
 // console.log(box[0].style.display);
  button1.addEventListener("click",event =>{updatePoster(image1,title1,quote1)});
  button2.addEventListener("click",event =>{generateCustomPoster(event,image2,title2,quote2)});
  button3.addEventListener("click",event =>{box[0].style.display="block";
                                            button3.style.display="none";
                                            anya.style.display="none";
                                          peek.style.display="block";})

 
  function generateCustomPoster(event,imageUrl5, title5, quote5) {
    event.preventDefault();
    posters.push({image:imageUrl5.value,title:title5.value,quote:quote5.value,});
    image1.setAttribute("src", posters[posters.length-1].image);
    title1.textContent=posters[posters.length-1].title;
    quote1.textContent=posters[posters.length-1].quote;
    //alert("Added to the list!!!!");
  }
  
  // Function to update the poster content in the DOM
  function updatePoster(imageUrl, title, quote) {
    
    let random=Math.floor(Math.random() * posters.length);
    imageUrl.setAttribute("src", posters[random].image);
    title.textContent=posters[random].title;
    quote.textContent=posters[random].quote;

  }

  