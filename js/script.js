// Gallery loading effect with setTimeout
const galleryElement = document.querySelector(".gallery");
const loadingMessage = document.getElementById("loading-message");

 // Hide gallery initially
if (galleryElement && loadingMessage) {
 
  // After 2 seconds, show the gallery
  setTimeout(function() {
    loadingMessage.style.transition = "opacity 0.5s ease-out";
    loadingMessage.style.opacity = "0";
    
    setTimeout(function() {
      loadingMessage.style.display = "none";
      galleryElement.style.opacity = "1";
      

      lightGallery(galleryElement);
    }, 500);
  }, 2000);
} else if (galleryElement) {
  lightGallery(galleryElement);
}

// Image rollover effect
const shadowImages = document.querySelectorAll('.shadow');

shadowImages.forEach(image => {
    
    image.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 0 12px #915ba4';
        this.style.transition = 'transform 0.3s, box-shadow 0.3s';
    });
    
    image.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});


// Playlist array
const songs = [
        {
          url:"https://youtu.be/mzWnW1V9EMc?si=_F9Hdw8DI7fC1zdH",
          image: "images/card01.jpg",
          name: "Life Goes On",
          artist: "AGUST D",
          line1: "Don't be afraid until the end of my life",
          line2: "Because life will go on forever",
          album: "D-DAY"
        },
        {
          url:"https://youtu.be/lbmbwDkz7gQ?si=7mHW21Xu1mzXZ7i6",
          image: "images/card02.jpg",
          name: "All you want",
          artist: "GIRLKIND XJR",
          line1: "There are many more starts today",
          line2: "Deep down in my life",
          album: "Life is Diamond"
        },
        {
          url:"https://youtu.be/xEeFrLSkMm8?si=pFgcy5pA4Bn_jr9F",
          image: "images/card03.jpg",
          name: "Spring Day",
          artist: "BTS",
          line1: "I miss you, honestly, but I'll erase you",
          line2: "'Cause it hurts less than to blame you",
          album: "You Never Walk Alone"
        },
        {
          url:"https://youtu.be/kXB-Ibr55LI?si=Cr0_-lYC_yW682Ra",
          image: "images/card04.jpg",
          name: "Hawaiian Roller Coaster Ride",
          artist: "MARK KEALI'I HO'OMALU",
          line1: "And If I had one wish come true",
          line2: "I'd surf 'til the sun sets [...]",
          album: "Lilo & Stitch Soundtrack"
        },
        {
          url: "https://youtu.be/RyJ5GbzEZC0?si=mwyxSgVpkh6Had2e",  
          image: "images/card05.jpg",
          name: "Meet Me At Our Spot",
          artist: "THE ANXIETY, WILLOW & TYLER COLE",
          line1: "I slept through the day, f**k",
          line2: "I'm not getting younger",
          album: "THE ANXIETY"
        },
        {
          url:"https://youtu.be/PPEf2ugpLok?si=bNqnXn9eTwVk-ypC",
          image: "images/card06.jpg",
          name: "Blue Velvet",
          artist: "TMIDICRONICA",
          line1: "Passion is a midnight of [...] roses",
          line2: "Jealousy are a red crimson solitude",
          album: "#501"
        }
      ];

let template = Handlebars.compile(
        document.querySelector("#helpers-playlist").innerHTML
      );

      let thecontent = template(songs);
      document.querySelector("#playlist-container").innerHTML = thecontent;

