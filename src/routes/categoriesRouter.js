const { Router, json } = require('express');
const router = Router();

const categories = [
    { catId:1, catName:'Linux' },
    { catId:2, catName:'Maquetado' },
    { catId:3, catName:'JavaScript' },
    { catId:4, catName:'FrontEnd' },
];

router.get("/", (req, res) => {
    res.json(categories)
});

router.get("/:id", (req, res) => {
    const category = categories.find((element) => element.id == req.params.id);

    if(!category) {
        res.status(404).json({ message: "Categorie not found" });
    } else {
        res.json(category);
    }
});

// router.post("/", (req, res) => {
//     console.log("Request Body: ", req.body);
//     res.status(200).json( { message: "Category created!"} )
// })
