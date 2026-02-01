// Hobbies Array
const hobbies = [
        {
          name:"Writing",
          desc: "I used to write my thoughts down during my free time, till it became an actual aspiration. I started some projects in hopes that one day they will be professional.",
          frec: "Summer",
        },
        {
          name:"Painting",
          desc: "Acrylic painting is one of those hobbies you are not perfect at, it just relaxes you. I am no painter, but my family keeps my best pieces on their chambers.",
          frec: "Summer",
        },
        {
          name:"Dance",
          desc: "Growing up in an English-inspired school, arts were a huge part of the education, dance being a fundamental subject. I learned to enjoy following steps my own way. Is the best to easily get rid of the recurrent stress.",
          frec: "Daily",
        },
        {
          name:"Bullet Journal",
          desc: "The perfect way to store my memories. Whether I paste receipts, list the music I’ve been listening to, or rank the productions I’ve recently watched, there is always something to include on those pages.",
          frec: "Monthly",
        },
        {
          name:"New Recipes",
          desc: "Learning how to make new dishes is much far entertaining. My family are friends are always there to taste the newest recipes.",
          frec: "Weekly",
        },
        {
          name:"Singing",
          desc: "	(What a surprise, huh?) I am not the smoothest singer. However, this and writing help me to express my true emotions. Singing lessons might come handy though…",
          frec: "Daily",
        }
      ];

      let template2 = Handlebars.compile(
        document.querySelector("#helpers-hobbies").innerHTML);

      let thecontent2 = template2(hobbies);
      document.querySelector("#hobbies-container").innerHTML = thecontent2;