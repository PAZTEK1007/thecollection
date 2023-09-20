document.addEventListener('DOMContentLoaded', () =>{

const collection = [
            // Honda Section
    {
        brand: "Honda",
        model: ["Civic", "EK9", "1.6VTi"],
        type: ["Hatchback", "FWD"],
        motor: ["B16B", "I4", "DOHC", "VTEC"],
        horsePower: 185,
        torquePower: 160,
        weightKg: 1050, 
        releaseYear: 1996,
        picture: "https://www.trustmotors.co.nz/Motorcentral/VehicleData/TRU-752bb7ea-5a33-450a-b4fe-be47de027bfe-5.jpg",

    },

    {
        brand: "Honda",
        model: ["Civic", "EG6", "1.6VTi"],
        type: ["Hatchback", "FWD"],
        motor: ["B16A", "I4", "DOHC", "VTEC"],
        horsePower: 160,
        torquePower: 150,
        weightKg: 1080, 
        releaseYear: 1992,
        picture: "https://nzperformancecar.co.nz/wp-content/uploads/2023/05/untitled-30-scaled.jpg",

    },

    {
        brand: "Honda",
        model: ["Prelude", "BA4", "2.0i", "4WS"],
        type: ["Coupe", "FWD"],
        motor: ["B20A7", "I4", "DOHC"],
        horsePower: 150,
        torquePower: 180,
        weightKg: 1140, 
        releaseYear: 1987,
        picture: "http://tuning.im/wp-content/uploads/2015/05/Honda-Prelude-2.jpg",
        
    },

    {
        brand: "Honda",
        model: ["Prelude", "BB5", "2.2VTi", "4WS"],
        type: ["Coupe", "FWD"],
        motor: ["H22A", "I4", "DOHC", "VTEC"],
        horsePower: 200,
        torquePower: 210,
        weightKg: 1320, 
        releaseYear: 1997,
        picture: "https://wallpapercave.com/wp/wp2760636.jpg",
        
    },

    {
        brand: "Honda",
        model: ["Integra Type-R", "DC2", "1.8VTi"],
        type: ["Coupe", "FWD"],
        motor: ["B18C6", "I4","DOHC" ,"VTEC"],
        horsePower: 190,
        torquePower: 180,
        weightKg: 1125,
        releaseYear: 1997,
        picture: "https://www.topgear.com/sites/default/files/news-listicle/image/0_honda_integra_type_r.jpg",
        
    },

    {
        brand: "Honda",
        model: ["NSX", "NA", "3.0VTi"],
        type: ["Coupe", "RWD"],
        motor: ["C30A", "V6", "DOHC", "VTEC"],
        horsePower: 275,
        torquePower: 285,
        weightKg: 1370, 
        releaseYear: 1990,
        picture: "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1684410357/autoexpress/2023/05/Honda%20NSX%20Mk1-18.jpg",

    },
             // Mazda Section
    {
        brand: "Mazda",
        model: ["RX-7", "FD3S", "1.3i"],
        type: ["Coupe", "RWD"],
        motor: ["13B-REW", "BiRotor", "Twin-Turbo"],
        horsePower: 255,
        torquePower: 294,
        weightKg: 1260,
        releaseYear: 1995,
        picture: "https://64.media.tumblr.com/3a865a05c802035d2b3cbc353caf10d2/25c939667264f593-79/s1280x1920/978dad5650468696e1c55cf26adef175f92de14f.jpg",

    },

    {
        brand: "Mazda",
        model: "RX-7 FC3S",
        type: ["Coupe", "RWD"],
        motor: ["13B-REW", "BiRotor", "Turbo"],
        horsePower: 200,
        torquePower: 265,
        weightKg: 1300,
        releaseYear: 1989,
        picture: "https://pbs.twimg.com/media/FVDyb0FakAEechs.jpg",

    },
            // Nissan Section
    {
        brand: "Nissan",
        model: ["Skyline GT-R", "BNR34", "2.6i"],
        type: ["Coupe", "AWD"],
        motor: ["RB26DETT", "I6", "DOHC", "Twin-Turbo"],
        horsePower: 320,
        torquePower: 385,
        weightKg: 1540, 
        releaseYear: 1999,
        picture: "https://cdn.motor1.com/images/mgl/P3nO74/s1/2000-nissan-skyline-r34-gt-r-by-kaizo-industries-driven-by-paul-walker-in-fast-and-furious-bonham-s-auction.webp",

    },

    {
        brand: "Nissan",
        model: ["Skyline GT-R", "BNR32", "2.6i"],
        type: ["Coupe", "AWD"],
        motor: ["RB26DETT", "I6", "DOHC", "Twin-Turbo"],
        horsePower: 280,
        torquePower: 355,
        weightKg: 1430, 
        releaseYear: 1989,
        picture: "https://i.ebayimg.com/images/g/4WQAAOSwN9BdcLZA/s-l1200.webp",

    },

    {
        brand: "Nissan",
        model: ["Silvia", "S14", "2.0i"],
        type: ["Coupe", "RWD"],
        motor: ["SR20DET", "I4", "DOHC", "Turbo"],
        horsePower: 200,
        torquePower: 275,
        weightKg: 1220, 
        releaseYear: 1996,
        picture: "https://cdn.wallpapersafari.com/43/16/mYh0IN.jpg",

    },

    {
        brand: "Nissan",
        model: ["Silvia", "RS13", "2.0i"],
        type: ["Coupe", "RWD"],
        motor: ["SR20DET", "I4", "DOHC", "Turbo"],
        horsePower: 200,
        torquePower: 275,
        weightKg: 1140, 
        releaseYear: 1988,
        picture: "https://tophinhanhdep.com/wp-content/uploads/2021/10/Nissan-180SX-Wallpapers.jpg",

    },
            // Toyota Section
    {
        brand: "Toyota",
        model: ["Supra", "AJ-80", "3.0i"],
        type: ["Coupe", "RWD"],
        motor: ["2JZGTE", "I6", "DOHC", "Twin-Turbo"],
        horsePower: 330,
        torquePower: 440,
        weightKg: 1630, 
        releaseYear: 1993,
        picture: "https://www.hgkshop.com/cdn/shop/collections/toyota-supra-mkiv-turbotarga-780x405_1400x.jpg?v=1593681769",
        
    },

    {
        brand: "Toyota",
        model: ["Sprinter Trueno", "AE-86", "1.6i"],
        type: ["Coupe", "RWD"],
        motor: ["4AGE", "I4", "DOHC"],
        horsePower: 120,
        torquePower: 130,
        weightKg: 900, 
        releaseYear: 1983,
        picture: "https://rare-gallery.com/thumbs/555604-toyota-ae86.jpg",
        
    },

    {
        brand: "Toyota",
        model: ["Chaser", "JZX100", "2.5i"],
        type: ["Coupe", "RWD"],
        motor: ["1JZGTE", "I6", "DOHC", "Turbo"],
        horsePower: 280,
        torquePower: 378,
        weightKg: 1400, 
        releaseYear: 1996,
        picture: "https://wallpapercave.com/wp/wp7011366.jpg",
        
    },
            // Mitsubishi Section
    {
        brand: "Mitsubishi",
        model: ["Evolution VI", "AE-86", "1.6i"],
        type: ["Sedan", "AWD"],
        motor: ["4G63", "I4", "DOHC", "Turbo"],
        horsePower: 280,
        torquePower: 364,
        weightKg: 1360, 
        releaseYear: 1999,
        picture: "https://wallpapercave.com/wp/wp11903212.jpg",
                
    },
            // Subaru Section
    {
    brand: "Subaru",
    model: ["Impreza WRX STi", "22B", "2.2i"],
    type: ["Sedan", "AWD"],
    motor: ["EJ22", "F4", "DOHC"],
    horsePower: 350,
    torquePower: 363,
    weightKg: 1245, 
    releaseYear: 1998,
    picture: "https://w.wallhaven.cc/full/zm/wallhaven-zm76lo.jpg",
                
    },
];

const returnCollection = (objects) => {
    return objects.map((object) => ` 
      <div class="card">
        <picture class="cars-pic">
            <source media="(min-width:768px)" srcset="${object.picture}">
            <source media="(max-width:768px)" srcset="${object.picture}">
            <img src="${object.picture}" alt="${object.brand}"/>
        </picture>
        <div class="card_content">
          <h3>${object.brand}</h3>
          <h3>Model: ${object.model}</h3>
          <h3>Motor: ${object.motor}</h3>
          <h4>HP / NM: ${object.horsePower} / ${object.torquePower}</h4>
          <h4>Weight(KG): ${object.weightKg}</h4>
          <p>Type : ${object.type}</p>
          <p>Production: ${object.releaseYear}</p>
        </div>
      </div>
    `
    ).join("");
  };

  const generatedHTML = returnCollection(collection);
  const listContainer = document.getElementById("container-card");
  if (listContainer) {
    listContainer.innerHTML = generatedHTML;
  } else {
    console.error("Element with ID 'container-card' not found in the document.");
  };
});
