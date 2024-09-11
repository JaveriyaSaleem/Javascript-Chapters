// Objects
// var cars = {
//     "Toyota" : {
//         "Toyota Corolla":{
//             "Established" : 1966,
//             "Model Number": "Corolla LE 2024",
//             "Colors Available": ["Super White", "Black Sand Pearl", "Classic Silver Metallic"],
//             "Link to picture" : "https://img.sm360.ca/images/newcar/ca/2024/toyota/corolla/le-upgrade/sedan/main/2024_Toyota_Corolla_4-LE-CVT-Upgrade_MAIN.png"
//         },
//         "Toyota Camry":{
//             "Established" : 1982,
//             "Model Number": "Camry XSE 2024",
//             "Colors Available": ["Wind Chill Pearl", "Predawn Gray Mica", "Celestial Silver"],
//             "Link to picture" : "https://www.carscoops.com/wp-content/uploads/2023/07/2024-Toyota-Camry.jpg"
//         },
//         "Toyota Prius":{
//             "Established" : 1997,
//             "Model Number": "Prius XLE 2024",
//             "Colors Available": ["Cutting Edge", "Reservoir Blue", "Wind Chill Pearl"],
//             "Link to picture" : "https://cdn.motor1.com/images/mgl/7Ze48A/s1/2023-toyota-prius.webp"
//         },
//     },
//     "Mercedes-Benz" :{
//         "Mercedes-Benz C-Class":{
//             "Established" : 1993,
//             "Model Number": "C 300 2024",
//             "Colors Available": ["Polar White", "Obsidian Black", "Selenite Grey"],
//             "Link to picture" : "https://ymimg1.b8cdn.com/resized/article/5955/pictures/4283405/listing_main_Mercedes_Benz__C_Class__1_.jpg"
//         },
//         "Mercedes-Benz S-Class":{
//             "Established" : 1972,
//             "Model Number": "S 580 2024",
//             "Colors Available": ["Black", "Graphite Grey", "Nautic Blue"],
//             "Link to picture" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxuvaAgWeYfZgafrfiyJjdN2Uk-ICwhP0yg&s"
//         },
//         "Mercedes-Benz GLE":{
//             "Established" : 1997,
//             "Model Number": "GLE 450 2024",
//             "Colors Available": [" Mojave Silver", " Lunar Blue", "Polar White"],
//             "Link to picture" : "https://images.dealer.com/ddc/vehicles/2024/Mercedes-Benz/GLE%20450/SUV/trim_Base_f4c77b/perspective/front-left/2024_24.png"
//         }
//     },
//     "BMW":{
//         "BMW 3 Series":{
//             "Established" : 1975,
//             "Model Number": "330i 2024",
//             "Colors Available": ["Alpine White", " Jet Black", "Mineral White"],
//             "Link to picture" : "https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/3-series/gl/2023/navigation.png"
//         },
//         "BMW 5 Series":{
//             "Established" : 1972,
//             "Model Number": "530i 2024",
//             "Colors Available": ["Phytonic Blue", " Black Sapphire", "Bernina Grey Amber"],
//             "Link to picture" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OuOdNHp1c_W57LAr2wgm8UMtmebgo-ctBg&s"
//         },
//         "BMW iX":{
//             "Established" :  2002,
//             "Model Number": " Z4 M40i 2024",
//             "Colors Available": ["Alpine White", " Misano Blue", "San Francisco Red"],
//             "Link to picture" : "https://www.motortrend.com/uploads/2023/12/005-2024-bmw-z4-m40i-manual-front-three-quarter-view.jpg"
//         }


//     }
// }
// console.table(cars["Toyota"]);
// console.table(cars["Mercedes-Benz"]);
// console.table(cars["BMW"]);
// constructors function 

function CarsModel(name,established,modelNumber,colors,pictures){
    this.Name= name;
    this.Established= established;
    this.ModelNumber= modelNumber;
    this.Colors= colors;
    this.Pictures= pictures;
}
var cars = [
    {
        Brand: "Toyota",
        Model: new CarsModel("Toyota Corolla",1966,"Corolla LE 2024",["Super White", "Black Sand Pearl", "Classic Silver Metallic"],"https://img.sm360.ca/images/newcar/ca/2024/toyota/corolla/le-upgrade/sedan/main/2024_Toyota_Corolla_4-LE-CVT-Upgrade_MAIN.png")
    },
    {
        Brand:"Mercedes Benz",
        Model: new CarsModel("Mercedes-Benz C-Class",1993, "C 300 2024",["Polar White", "Obsidian Black", "Selenite Grey"],"https://ymimg1.b8cdn.com/resized/article/5955/pictures/4283405/listing_main_Mercedes_Benz__C_Class__1_.jpg")
    }

]
// console.log(cars[0].Model.Colors[2])
// console.log(cars[1].Model.Established)

console.log(Object.keys(cars[1].Model))
var objectLength = Object.keys(cars[1].Model);
for(var i = 0; i<objectLength.length;i++){
console.log(cars[1].Model[objectLength[i]])
}
console.log(typeof(cars[1].Model))