const express = require("express");
const app = express();

const dogs = [
  {
    id: 1,
    name: "Tini",
    breed: "CHIHUAHUA",
    price: "1000",
    description: "This is a crazy tiny dog with big alien eyes",
    imageUrl:
      "https://images.unsplash.com/photo-1605639156481-244775d6f803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    name: "Butty",
    breed: "CORGI",
    price: "1500",
    description: "This is a cute dog with a heart-shaped butt",
    imageUrl:
      "https://images.unsplash.com/photo-1597633425046-08f5110420b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    name: "Pity",
    breed: "PITBULL",
    price: "2500",
    description:
      "A dangerous breed but everyone loves to have one of them cause they look cool",
    imageUrl:
      "https://images.unsplash.com/photo-1571868094976-6af3b50b43bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    name: "Puggy",
    breed: "PUG",
    price: "1700",
    description:
      "A sad looking dog that actually very energetic and love being cuddled",
    imageUrl:
      "https://images.unsplash.com/photo-1535909339361-ef56e179d637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 5,
    name: "Mally",
    breed: "MALTESE",
    price: "2000",
    description: "A maltese dog",
    imageUrl:
      "https://images.unsplash.com/photo-1508532566027-b2032cd8a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsdGVzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 6,
    name: "Dachy",
    breed: "DASCHUND",
    price: "2700",
    description: "A dog looks like a sausage",
    imageUrl:
      "https://images.unsplash.com/photo-1612195583950-b8fd34c87093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFzY2h1bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 7,
    name: "Ngao",
    breed: "HUSKY",
    price: "2500",
    description: "A dog looks like a wolf",
    imageUrl:
      "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGh1c2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 8,
    name: "Boxy",
    breed: "BOXER",
    price: "4700",
    description: "A dog knows how to fight",
    imageUrl:
      "https://images.unsplash.com/photo-1543071220-6ee5bf71a54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym94ZXIlMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
];

app.get("/v1/dogs", (req, res) => {
  res.status(200).json(dogs);
});

app.listen("8080", () => {
  console.log("Server is running....");
});
