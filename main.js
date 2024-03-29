const data = [
  {
    id: 1,
    title: "iPhone 9",
    description:
      "An apple mobile which is nothing like apple phone, Does More,Costs Less",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/1/1.jpg",
      "https://dummyjson.com/image/i/products/1/2.jpg",
      "https://dummyjson.com/image/i/products/1/3.jpg",
      "https://dummyjson.com/image/i/products/1/4.jpg",
      "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    ],
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "Practically Magic, SIM Free,A12 Bionic chip and Retina Display with a big notch",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/2/1.jpg",
      "https://dummyjson.com/image/i/products/2/2.jpg",
      "https://dummyjson.com/image/i/products/2/3.jpg",
      "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
    ],
  },
  {
    id: 3,
    title: "Samsung Universe ",
    description:
      "Lets go Beyong Galaxy to the universe with Samsung and this phone",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
    images: ["https://dummyjson.com/image/i/products/3/1.jpg"],
  },
  {
    id: 4,
    title: "OPPOF19",
    description:
      "OPPO F19 is officially announced on April 2021 and is a premium camera phone",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/4/1.jpg",
      "https://dummyjson.com/image/i/products/4/2.jpg",
      "https://dummyjson.com/image/i/products/4/3.jpg",
      "https://dummyjson.com/image/i/products/4/4.jpg",
      "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
    ],
  },
  {
    id: 5,
    title: "Huawei P30",
    description:
      "Huawei new Phone , just got released in Germany and now we may get it in India",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/5/1.jpg",
      "https://dummyjson.com/image/i/products/5/2.jpg",
      "https://dummyjson.com/image/i/products/5/3.jpg",
    ],
  },
  {
    id: 6,
    title: "MacBook Pro",
    description:
      "MacBook Pro with mini-LED display may launch in September with M2 max chipset",
    price: 1749,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
    brand: "APPle",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/6/thumbnail.png",
    images: [
      "https://dummyjson.com/image/i/products/6/1.png",
      "https://dummyjson.com/image/i/products/6/2.jpg",
      "https://dummyjson.com/image/i/products/6/3.png",
      "https://dummyjson.com/image/i/products/6/4.jpg",
    ],
  },
  {
    id: 7,
    title: "Samsung Galaxy Book",
    description: "Galaxy Book With 8GB RAM and MacBook inspired",
    price: 1499,
    discountPercentage: 4.15,
    rating: 4.25,
    stock: 50,
    brand: "Samsung",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/7/1.jpg",
      "https://dummyjson.com/image/i/products/7/2.jpg",
      "https://dummyjson.com/image/i/products/7/3.jpg",
      "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
    ],
  },
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    description: "Style and speed. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    discountPercentage: 10.23,
    rating: 4.43,
    stock: 68,
    brand: "Microsoft Surface",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/8/1.jpg",
      "https://dummyjson.com/image/i/products/8/2.jpg",
      "https://dummyjson.com/image/i/products/8/3.jpg",
      "https://dummyjson.com/image/i/products/8/4.jpg",
      "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
    ],
  },
  {
    id: 9,
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    discountPercentage: 11.83,
    rating: 4.54,
    stock: 96,
    brand: "Infinix",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/9/1.jpg",
      "https://dummyjson.com/image/i/products/9/2.png",
      "https://dummyjson.com/image/i/products/9/3.png",
      "https://dummyjson.com/image/i/products/9/4.jpg",
      "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
    ],
  },
  {
    id: 10,
    title: "HP Pavilion 15-DK1056WM",
    description: "HP Pavilion Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD",
    price: 1099,
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
    images: [
      "https://dummyjson.com/image/i/products/10/1.jpg",
      "https://dummyjson.com/image/i/products/10/2.jpg",
      "https://dummyjson.com/image/i/products/10/3.jpg",
      "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
    ],
  },
  {
    id: 11,
    title: "Perfume Oil",
    description:
      "Mega Discount,attar perfume Oil with rare essence from Himalayas",
    price: 13,
    discountPercentage: 8.4,
    rating: 4.26,
    stock: 65,
    brand: "Impression of Acqua Di Gio",
    category: "fragrances",
    thumbnail: "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/11/1.jpg",
      "https://dummyjson.com/image/i/products/11/2.jpg",
      "https://dummyjson.com/image/i/products/11/3.jpg",
      "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
    ],
  },
  {
    id: 12,
    title: "Brown Perfume",
    description:
      "Royal Mirage Extreme Sport Brown Perfume for Men & Women : 120ml",
    price: 40,
    discountPercentage: 15.66,
    rating: 4,
    stock: 52,
    brand: "Royal_Mirage",
    category: "fragrances",
    thumbnail: "https://dummyjson.com/image/i/products/12/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/12/1.jpg",
      "https://dummyjson.com/image/i/products/12/2.jpg",
      "https://dummyjson.com/image/i/products/12/3.png",
      "https://dummyjson.com/image/i/products/12/4.jpg",
      "https://dummyjson.com/image/i/products/12/thumbnail.jpg",
    ],
  },
  {
    id: 13,
    title: "Fog Scent Xpressio ",
    description:
      " Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
    price: 13,
    discountPercentage: 8.14,
    rating: 4.59,
    stock: 61,
    brand: "Fog Scent Xpressio",
    category: "fragrances",
    thumbnail: "https://dummyjson.com/image/i/products/13/thumbnail.webp",
    images: [
      "https://dummyjson.com/image/i/products/13/1.jpg",
      "https://dummyjson.com/image/i/products/13/2.png",
      "https://dummyjson.com/image/i/products/13/3.jpg",
      "https://dummyjson.com/image/i/products/13/4.jpg",
      "https://dummyjson.com/image/i/products/13/thumbnail.webp",
    ],
  },
  {
    id: 14,
    title: "Non-Alcoholic Perfume Oil",
    description: "Original Al Munakh® by Mahal Al Musk  Perfume Oil",
    price: 120,
    discountPercentage: 15.6,
    rating: 4.21,
    stock: 114,
    brand: "Al Munakh",
    category: "fragrances",
    thumbnail: "https://dummyjson.com/image/i/products/14/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/14/1.jpg",
      "https://dummyjson.com/image/i/products/14/2.jpg",
      "https://dummyjson.com/image/i/products/14/3.jpg",
      "https://dummyjson.com/image/i/products/14/thumbnail.jpg",
    ],
  },
  {
    id: 15,
    title: "Eau De Perfume Spray",
    description: "Genuine Al-Rehab spray perfume from UAE High Quality",
    price: 30,
    discountPercentage: 10.99,
    rating: 4.7,
    stock: 105,
    brand: "Lord - Al-Rehab",
    category: "fragrances",
    thumbnail: "https://dummyjson.com/image/i/products/15/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/15/1.jpg",
      "https://dummyjson.com/image/i/products/15/2.jpg",
      "https://dummyjson.com/image/i/products/15/3.jpg",
      "https://dummyjson.com/image/i/products/15/4.jpg",
      "https://dummyjson.com/image/i/products/15/thumbnail.jpg",
    ],
  },
  {
    id: 16,
    title: "Hyaluronic Serum",
    description:
      "L'Orealal Paris introduces Hyaluron  Serum made with 1.5% Hyaluronic Acid",
    price: 19,
    discountPercentage: 13.31,
    rating: 4.83,
    stock: 110,
    brand: "L'Oreal Paris",
    category: "skincare",
    thumbnail: "https://dummyjson.com/image/i/products/16/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/16/1.png",
      "https://dummyjson.com/image/i/products/16/2.webp",
      "https://dummyjson.com/image/i/products/16/3.jpg",
      "https://dummyjson.com/image/i/products/16/4.jpg",
      "https://dummyjson.com/image/i/products/16/thumbnail.jpg",
    ],
  },
  {
    id: 17,
    title: "Tree Oil 30ml",
    description:
      "Tea tree oil contains many compounds, that have been shown to kill certain bacteria,",
    price: 12,
    discountPercentage: 4.09,
    rating: 4.52,
    stock: 78,
    brand: "Hemani Tea",
    category: "skincare",
    thumbnail: "https://dummyjson.com/image/i/products/17/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/17/1.jpg",
      "https://dummyjson.com/image/i/products/17/2.jpg",
      "https://dummyjson.com/image/i/products/17/3.jpg",
      "https://dummyjson.com/image/i/products/17/thumbnail.jpg",
    ],
  },
  {
    id: 18,
    title: "Oil Free Moisturizer",
    description:
      "Dermive Oil Free Moisturizer with SPF 20 with ceramides & sunscreen.",
    price: 40,
    discountPercentage: 13.1,
    rating: 4.56,
    stock: 88,
    brand: "Dermive",
    category: "skincare",
    thumbnail: "https://dummyjson.com/image/i/products/18/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/18/1.jpg",
      "https://dummyjson.com/image/i/products/18/2.jpg",
      "https://dummyjson.com/image/i/products/18/3.jpg",
      "https://dummyjson.com/image/i/products/18/4.jpg",
      "https://dummyjson.com/image/i/products/18/thumbnail.jpg",
    ],
  },
  {
    id: 19,
    title: "Skin Beauty Serum.",
    description:
      "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
    price: 46,
    discountPercentage: 10.68,
    rating: 4.42,
    stock: 54,
    brand: "ROREC White Rice",
    category: "skincare",
    thumbnail: "https://dummyjson.com/image/i/products/19/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/19/1.jpg",
      "https://dummyjson.com/image/i/products/19/2.jpg",
      "https://dummyjson.com/image/i/products/19/3.png",
      "https://dummyjson.com/image/i/products/19/thumbnail.jpg",
    ],
  },
  {
    id: 20,
    title: "Freckle Treatment Cream- 15gm",
    description:
      "Fair & Clear helps fade Freckles & Darkspots. 0% Mercury Level.",
    price: 70,
    discountPercentage: 16.99,
    rating: 4.06,
    stock: 140,
    brand: "Fair & Clear",
    category: "skincare",
    thumbnail: "https://dummyjson.com/image/i/products/20/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/20/1.jpg",
      "https://dummyjson.com/image/i/products/20/2.jpg",
      "https://dummyjson.com/image/i/products/20/3.jpg",
      "https://dummyjson.com/image/i/products/20/4.jpg",
      "https://dummyjson.com/image/i/products/20/thumbnail.jpg",
    ],
  },
  {
    id: 21,
    title: "- Daal Masoor 500 grams",
    description: "Fine quality Branded Product Keep in a cool and dry place",
    price: 20,
    discountPercentage: 4.81,
    rating: 4.44,
    stock: 133,
    brand: "Saaf & Khaas",
    category: "groceries",
    thumbnail: "https://dummyjson.com/image/i/products/21/thumbnail.png",
    images: [
      "https://dummyjson.com/image/i/products/21/1.png",
      "https://dummyjson.com/image/i/products/21/2.jpg",
      "https://dummyjson.com/image/i/products/21/3.jpg",
    ],
  },
  {
    id: 22,
    title: "Elbow Macaroni - 400 gm",
    description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
    price: 14,
    discountPercentage: 15.58,
    rating: 4.57,
    stock: 146,
    brand: "Bake Parlor Big",
    category: "groceries",
    thumbnail: "https://dummyjson.com/image/i/products/22/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/22/1.jpg",
      "https://dummyjson.com/image/i/products/22/2.jpg",
      "https://dummyjson.com/image/i/products/22/3.jpg",
    ],
  },
  {
    id: 23,
    title: "Orange Essence Food Flavour",
    description: "Orange Essence Food Flavour For Cakes and Baking Food Item",
    price: 14,
    discountPercentage: 8.04,
    rating: 4.85,
    stock: 26,
    brand: "Baking Food Items",
    category: "groceries",
    thumbnail: "https://dummyjson.com/image/i/products/23/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/23/1.jpg",
      "https://dummyjson.com/image/i/products/23/2.jpg",
      "https://dummyjson.com/image/i/products/23/3.jpg",
      "https://dummyjson.com/image/i/products/23/4.jpg",
      "https://dummyjson.com/image/i/products/23/thumbnail.jpg",
    ],
  },
  {
    id: 24,
    title: "Muesli Fruit Nuts",
    description:
      "original fauji cereal muesli 2cereal break fast fauji cereals cerels cerel foji fouji",
    price: 46,
    discountPercentage: 16.8,
    rating: 4.94,
    stock: 113,
    brand: "fauji",
    category: "groceries",
    thumbnail: "https://dummyjson.com/image/i/products/24/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/24/1.jpg",
      "https://dummyjson.com/image/i/products/24/2.jpg",
      "https://dummyjson.com/image/i/products/24/3.jpg",
      "https://dummyjson.com/image/i/products/24/4.jpg",
      "https://dummyjson.com/image/i/products/24/thumbnail.jpg",
    ],
  },
  {
    id: 25,
    title: "Gulab Powder ",
    description: "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
    price: 70,
    discountPercentage: 13.58,
    rating: 4.87,
    stock: 47,
    brand: "Dry Rose",
    category: "groceries",
    thumbnail: "https://dummyjson.com/image/i/products/25/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/25/1.png",
      "https://dummyjson.com/image/i/products/25/2.jpg",
      "https://dummyjson.com/image/i/products/25/3.png",
      "https://dummyjson.com/image/i/products/25/4.jpg",
      "https://dummyjson.com/image/i/products/25/thumbnail.jpg",
    ],
  },
  {
    id: 26,
    title: "Plant Hanger",
    description:
      "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
    price: 41,
    discountPercentage: 17.86,
    rating: 4.08,
    stock: 131,
    brand: "Boho Decor",
    category: "home-decoration",
    thumbnail: "https://dummyjson.com/image/i/products/26/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/26/1.jpg",
      "https://dummyjson.com/image/i/products/26/2.jpg",
      "https://dummyjson.com/image/i/products/26/3.jpg",
      "https://dummyjson.com/image/i/products/26/4.jpg",
      "https://dummyjson.com/image/i/products/26/5.jpg",
      "https://dummyjson.com/image/i/products/26/thumbnail.jpg",
    ],
  },
  {
    id: 27,
    title: "Flying Wooden Bird",
    description:
      "Includes 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material",
    price: 51,
    discountPercentage: 15.58,
    rating: 4.41,
    stock: 17,
    brand: "Flying Wooden",
    category: "home-decoration",
    thumbnail: "https://dummyjson.com/image/i/products/27/thumbnail.webp",
    images: [
      "https://dummyjson.com/image/i/products/27/1.jpg",
      "https://dummyjson.com/image/i/products/27/2.jpg",
      "https://dummyjson.com/image/i/products/27/3.jpg",
      "https://dummyjson.com/image/i/products/27/4.jpg",
      "https://dummyjson.com/image/i/products/27/thumbnail.webp",
    ],
  },
  {
    id: 28,
    title: "3D Embellishment Art Lamp",
    description:
      "3D led lamp sticker Wall 3D wall art light on/off cell operated ",
    price: 20,
    discountPercentage: 16.49,
    rating: 4.82,
    stock: 54,
    brand: "LED Lights",
    category: "home-decoration",
    thumbnail: "https://dummyjson.com/image/i/products/28/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/28/1.jpg",
      "https://dummyjson.com/image/i/products/28/2.jpg",
      "https://dummyjson.com/image/i/products/28/3.png",
      "https://dummyjson.com/image/i/products/28/4.jpg",
      "https://dummyjson.com/image/i/products/28/thumbnail.jpg",
    ],
  },
  {
    id: 29,
    title: "Handcraft-Chinese ",
    description:
      "Handcraft Chinese style villa mansion home decor ceramic vase & brass fruit plate",
    price: 60,
    discountPercentage: 15.34,
    rating: 4.44,
    stock: 7,
    brand: "luxury palace",
    category: "home-decoration",
    thumbnail: "https://dummyjson.com/image/i/products/29/thumbnail.webp",
    images: [
      "https://dummyjson.com/image/i/products/29/1.jpg",
      "https://dummyjson.com/image/i/products/29/2.jpg",
      "https://dummyjson.com/image/i/products/29/3.webp",
      "https://dummyjson.com/image/i/products/29/4.webp",
      "https://dummyjson.com/image/i/products/29/thumbnail.webp",
    ],
  },
  {
    id: 30,
    title: "Key Holder",
    description:
      "Attractive Design Metallic material Reliable & Durable Premium Quality ",
    price: 30,
    discountPercentage: 2.92,
    rating: 4.92,
    stock: 54,
    brand: "Golden",
    category: "home-decoration",
    thumbnail: "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/30/1.jpg",
      "https://dummyjson.com/image/i/products/30/2.jpg",
      "https://dummyjson.com/image/i/products/30/3.jpg",
      "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    ],
  },
];

let mappedarray = [...data];
const bufferkey = [];


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }


function inputhandler(event) {

  const charList = "abcdefghijklmnopqrstuvwxyz0123456789 ";
  const key = event.key.toLowerCase();


  // we are only interested in alphanumeric keys
  if (charList.indexOf(key) !== -1) {
    bufferkey.push(key);
  }else{
    bufferkey.pop();
  }
  let strings = bufferkey.join("");

  mappedarray = data.filter((item) =>
    (item.description.toLowerCase().includes(strings.toLowerCase()) || item.title.toLowerCase().includes(strings.toLowerCase()))
  );


 

  const container = document.getElementById("home_product");
  removeAllChildNodes(container);

  mappedarray.forEach((i) => loadProducts(i));
}

console.log(bufferkey);

const input = document.getElementById("input1");

input.addEventListener("keydown", inputhandler);

$(document).ready(function (e) {
  mappedarray.forEach((item) => loadProducts(item));
});

function loadProducts(data) {
  var li = document.createElement("li");

  li.innerHTML =
    '<div class="card  height:"100"">' +
    '<div class="product-1 align-items-center p-2 text-center"> <img src="' +
    data.images[0] +
    '" class="rounded" width="150" height="100">' +
    '<h6 class="mt-0 font-weight-bold mb-2 info">' +
    data.title +
    "</h6>" +
    '<div class="mt-3 info"> <span class="text1 d-block"><small>' +
    data.description +
    "</small> </span> </div>" +
    '<div class=" cost mt-1 text-dark"> <span>$' +
    data.price +
    "</span>" +
    "</div>" +
    "</div>" +
    '<div class="button-color p-2 text-center text-white"> <span class="text-uppercase "><a href="Error.html" class = "error">Add To Cart</a></span> </div>' +
    "</div>";

  document.getElementById("home_product").appendChild(li);

  /*
   * flipclock
   * Version: 1.0.1
   * Authors: @gokercebeci
   * Licensed under the MIT license
   * Demo: http://
   */

  (function ($) {
    var pluginName = "flipclock";

    var methods = {
      pad: function (n) {
        return n < 10 ? "0" + n : n;
      },
      time: function (date) {
        if (date) {
          var e = new Date(date);
          var b = new Date();
          var d = new Date(e.getTime() - b.getTime());
        } else var d = new Date();
        var t =
          methods.pad(date ? d.getFullYear() - 70 : d.getFullYear()) +
          "" +
          methods.pad(date ? d.getMonth() : d.getMonth() + 1) +
          "" +
          methods.pad(date ? d.getDate() - 1 : d.getDate()) +
          "" +
          methods.pad(d.getHours()) +
          "" +
          methods.pad(d.getMinutes()) +
          "" +
          methods.pad(d.getSeconds());
        return {
          Y: { d2: t.charAt(2), d1: t.charAt(3) },
          M: { d2: t.charAt(4), d1: t.charAt(5) },
          D: { d2: t.charAt(6), d1: t.charAt(7) },
          h: { d2: t.charAt(8), d1: t.charAt(9) },
          m: { d2: t.charAt(10), d1: t.charAt(11) },
          s: { d2: t.charAt(12), d1: t.charAt(13) },
        };
      },
      play: function (c) {
        $("body").removeClass("play");
        var a = $("ul" + c + " section.active");
        if (a.html() == undefined) {
          a = $("ul" + c + " section").eq(0);
          a.addClass("ready")
            .removeClass("active")
            .next("section")
            .addClass("active")
            .closest("body")
            .addClass("play");
        } else if (a.is(":last-child")) {
          $("ul" + c + " section").removeClass("ready");
          a.addClass("ready").removeClass("active");
          a = $("ul" + c + " section").eq(0);
          a.addClass("active").closest("body").addClass("play");
        } else {
          $("ul" + c + " section").removeClass("ready");
          a.addClass("ready")
            .removeClass("active")
            .next("section")
            .addClass("active")
            .closest("body")
            .addClass("play");
        }
      },
      // d1 is first digit and d2 is second digit
      ul: function (c, d2, d1) {
        return (
          '<ul class="flip ' +
          c +
          '">' +
          this.li("d2", d2) +
          this.li("d1", d1) +
          "</ul>"
        );
      },
      li: function (c, n) {
        //
        return (
          '<li class="' +
          c +
          '"><section class="ready"><div class="up">' +
          '<div class="shadow"></div>' +
          '<div class="inn"></div></div>' +
          '<div class="down">' +
          '<div class="shadow"></div>' +
          '<div class="inn"></div></div>' +
          '</section><section class="active"><div class="up">' +
          '<div class="shadow"></div>' +
          '<div class="inn">' +
          n +
          "</div></div>" +
          '<div class="down">' +
          '<div class="shadow"></div>' +
          '<div class="inn">' +
          n +
          "</div></div>" +
          "</section></li>"
        );
      },
    };
    // var defaults = {};
    function Plugin(element, options) {
      this.element = element;
      this.options = options;
      // this.options = $.extend({}, defaults, options);
      // this._defaults = defaults;
      this._name = pluginName;
      this.init();
    }
    Plugin.prototype = {
      init: function () {
        var t,
          full = false;

        if (!this.options || this.options == "clock") {
          t = methods.time();
        } else if (this.options == "date") {
          t = methods.time();
          full = true;
        } else {
          t = methods.time(this.options);
          full = true;
        }

        $(this.element)
          .addClass("flipclock")
          .html(
            (full
              ? methods.ul("year", t.Y.d2, t.Y.d1) +
                methods.ul("month", t.M.d2, t.M.d1) +
                methods.ul("day", t.D.d2, t.D.d1)
              : "") +
              methods.ul("hour", t.h.d2, t.h.d1) +
              methods.ul("minute", t.m.d2, t.m.d1) +
              methods.ul("second", t.s.d2, t.s.d1) +
              '<audio id="flipclick">' +
              '<source src="https://github.com/gokercebeci/flipclock/blob/master/js/plugins/flipclock/click.mp3?raw=true" type="audio/mpeg"/>' +
              "</audio>"
          );

        setInterval($.proxy(this.refresh, this), 1000);
      },
      refresh: function () {
        var el = $(this.element);
        var t;
        if (this.options && this.options != "clock" && this.options != "date") {
          t = methods.time(this.options);
        } else t = methods.time();

        // second sound
        setTimeout(function () {
          document.getElementById("flipclick").play();
        }, 500);

        // second first digit
        el.find(".second .d1 .ready .inn").html(t.s.d1);
        methods.play(".second .d1");
        // second second digit
        if (t.s.d1 === "0") {
          el.find(".second .d2 .ready .inn").html(t.s.d2);
          methods.play(".second .d2");
          // minute first digit
          if (t.s.d2 === "0") {
            el.find(".minute .d1 .ready .inn").html(t.m.d1);
            methods.play(".minute .d1");
            // minute second digit
            if (t.m.d1 === "0") {
              el.find(".minute .d2 .ready .inn").html(t.m.d2);
              methods.play(".minute .d2");
              // hour first digit
              if (t.m.d2 === "0") {
                el.find(".hour .d1 .ready .inn").html(t.h.d1);
                methods.play(".hour .d1");
                // hour second digit
                if (t.h.d1 === "0") {
                  el.find(".hour .d2 .ready .inn").html(t.h.d2);
                  methods.play(".hour .d2");
                  // day first digit
                  if (t.h.d2 === "0") {
                    el.find(".day .d1 .ready .inn").html(t.D.d1);
                    methods.play(".day .d1");
                    // day second digit
                    if (t.D.d1 === "0") {
                      el.find(".day .d2 .ready .inn").html(t.D.d2);
                      methods.play(".day .d2");
                      // month first digit
                      if (t.D.d2 === "0") {
                        el.find(".month .d1 .ready .inn").html(t.M.d1);
                        methods.play(".month .d1");
                        // month second digit
                        if (t.M.d1 === "0") {
                          el.find(".month .d2 .ready .inn").html(t.M.d2);
                          methods.play(".month .d2");
                          // year first digit
                          if (t.M.d2 === "0") {
                            el.find(".year .d1 .ready .inn").html(t.Y.d1);
                            methods.play(".year .d1");
                            // year second digit
                            if (t.Y.d1 === "0") {
                              el.find(".year .d2 .ready .inn").html(t.Y.d2);
                              methods.play(".year .d2");
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
    };

    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$(this).data("plugin_" + pluginName)) {
          $(this).data("plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(typeof jQuery !== "undefined" ? jQuery : Zepto);

  // RUN
  $("#container").flipclock();
}

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}

var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount + ` times`;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});
