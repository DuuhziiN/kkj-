var brands = [
    "Almay",
    "Alva",
    "Anna Sui",
    "Annabelle",
    "Benefit",
    "Boosh",
    "Burt's Bees",
    "Butter London",
    "C'est Moi",
    "Cargo Cosmetics",
    "China Glaze",
    "Clinique",
    "Coastal Classic Creation",
    "Colourpop",
    "Covergirl",
    "Dalish",
    "Deciem",
    "Dior",
    "Dr. Hauschka",
    "E.l.f.",
    "Essie",
    "Fenty",
    "Glossier",
    "Green People",
    "Iman",
    "L'oreal",
    "Lotus Cosmetics USA",
    "Maia's Mineral Galaxy",
    "Marcelle",
    "Marienatie",
    "Maybelline",
    "Milani",
    "Mineral Fusion",
    "Misa",
    "Mistura",
    "Moov",
    "Nudus",
    "NYX",
    "Orly",
    "Pacifica",
    "Penny Lane Organics",
    "Physicians Formula",
    "Piggy Paint",
    "Pure Anada",
    "Rejuva Minerals",
    "Revlon",
    "Sally B's Skin Yummies",
    "Salon Perfect",
    "Sante",
    "Sinful Colours",
    "Smashbox",
    "Stila",
    "Suncoat",
    "W3llpeople",
    "Wet n Wild",
    "Zorah",
    "Zorah Biocosmetiques"



];
var filters = [
    {
        type_name: "Blush",
        categories: ["Powder", "Cream"],
        tags: [
            "Vegan", "Gluten free", "Canadian", "Natural",
            "Non-gmo", "Purpicks",
            "Usda organic", "Organic",
            "Certclean", "Ewg verified",
            "Hypoallergenic", "No talc",
        ],
    },
    {
        type_name: "Bronzer",
        categories: ["Powder"],
        tags: [
            "Gluten free",
            "Canadian",
            "Natural",
            "Organic",
            "Vegan",
            "Purpicks",
            "Ewg verified"
        ],

    },

    {
        type_name: "Eyebow",
        categories: ["Pencil"],
        tags: [
            "Ewg verified", "Purpicks"
        ],
    },
    {
        type_name: "Eyeliner",
        categories: [
            "Liquid",
            "Pencil",
            "Gel",
            "Cream"],
        tags: [
            "Vegan",
            "Natural",
            "Canadian",
            "Gluten free",
            "Organic",
            "Purpicks",
            "Certclean",
            "Ewg verified",
            "Hypoallergenic",
            "No talc",
            "Ecocert"
        ],
    },
    {
        type_name: "Eyeshadow",
        categories: [
            "Palette",
            "Pencil",
            "Cream"],
        tags: [
            "Vegan",
            "Canadian",
            "Natural",
            "Gluten free",
            "Non-gmo",
            "Purpicks",
            "Certclean",
            "Ewg verified",
            "Organic",
            "Usda organic",
            "Hypoallergenic",
            "No talc",
            "Ecocert"
        ],
    },
    {
        type_name: "Foundation",
        categories: [

            "Concealer",
            "Liquid",
            "Contour",
            "Bb cc",
            "Cream",
            "Mineral",
            "Powder",
            "Highlighter"
        ],
        tags: [
            "Vegan",
            "Canadian",
            "Natural",
            "Gluten free",
            "Purpicks",
            "Certclean",
            "Ewg verified",
            "Hypoallergenic",
            "No talc",
            "Water free",
            "Cruelty free",
            "Alcohol free",
            "Oil free",
            "Silicone free"
        ],
    },
    {
        type_name: "Lip liner",
        categories: ["Pencil"],
        tags: [
            "Natural",
            "Vegan",
            "Gluten free",
            "Canadian",
            "Purpicks",
            "Ewg verified",
            "Hypoallergenic",
            "No talc",
            "Cruelty free"
        ],
    },
    {
        type_name: "Lipstick",
        categories: [
            "Lipstick",
            "Lip gloss",
            "Liquid",
            "Lip stain"
        ],
        tags: [
            "Canadian",
            "Natural",
            "Gluten free",
            "Non-gmo",
            "Peanut free product",
            "Vegan",
            "Cruelty free",
            "Organic",
            "Purpicks",
            "Certclean",
            "Chemical free",
            "Ewg verified",
            "Hypoallergenic",
            "No talc"
        ],
    },
    {
        type_name: "Mascara",
        categories: ["-"],
        tags: [
            "Natural",
            "Gluten free",
            "Vegan",
            "Canadian",
            "Organic",
            "Purpicks",
            "Ewg verified",
            "Hypoallergenic",
            "No talc",
            "Ecocert",
            "Usda organic",
            "Certclean"
        ],
    },
    {
        type_name: "Nail polish",
        tags:
            [
                "Vegan",
                "Canadian",
                "Natural",
                "Gluten free",
                "Fair trade",
                "Sugar free",
                "Non-gmo",
                "Dairy free"
            ],
    },


];

window.addEventListener("load", function () {
    carregar_marcas();
    carregar_tipo();
    verificar_tipo();
    document.getElementById("type").addEventListener("change", verificar_tipo);
    document.getElementById("send").addEventListener("click", buscar);
});

function verificar_tipo() {
    var tipo_selecionado = document.getElementById("type").value
    for (const i of filters) {
        if (tipo_selecionado === i.type_name) {
            carregar_categoria(i.categories)
            carregar_tag(i.tags)
        }
    }
}


function carregar_marcas() {
    var select = document.getElementById("brand");

    for (const brand of brands) {
        let option = document.createElement("option");
        option.innerText = brand;
        select.appendChild(option);
    }

}

function carregar_tipo() {
    var select = document.getElementById("type");

    for (const type of filters) {
        let option = document.createElement("option");
        option.innerText = type.type_name;
        select.appendChild(option);
    }

}

function carregar_categoria(categories) {
    var select = document.getElementById("category");
    select.innerHTML = "";
    for (const i of categories) {
        let option = document.createElement("option");
        option.innerText = i;
        select.appendChild(option);
    }
}

function carregar_tag(tags) {
    var select = document.getElementById("tags");
    select.innerHTML = ""
    for (const i of tags) {
        let option = document.createElement("option");
        option.innerText = i;
        select.appendChild(option);
    }

}

async function buscar() {

    const url_api = (`http://makeup-api.herokuapp.com/api/v1/products.json?`);
    const parametros = [];
    const brands = document.getElementById("brand").value;
    const type = document.getElementById("type").value;
    const category = document.getElementById("category").value;
    const tags = document.getElementById("tags").value;
    const price_greater_than = document.getElementById('price_greater_than').value;
    const price_less_than = document.getElementById('price_less_than').value;
    const rating_greater_than = document.getElementById('rating_greater_than').value;
    const rating_less_than = document.getElementById('rating_less_than').value;
    if (brands) {
        parametros.push(`brand=${brands}`);
    }
    if (type) {
        parametros.push(`product_type=${type}`);
    }
    if (category) {
        parametros.push(`category=${category}`);
    }
    if (tags) {
        parametros.push(`tag_list=${tags}`);
    }
    if (price_greater_than) {
        parametros.push(`price_greater_than=${price_greater_than}`)
    }
    if (price_less_than) {
        parametros.push(`price_less_than=${price_less_than}`)
    }
    if (rating_greater_than) {
        parametros.push(`rating_greater_than=${rating_greater_than}`)
    }
    if (rating_less_than) {
        parametros.push(`rating_less_than=${rating_less_than}`)
    }
    const url = url_api + parametros.join("&");
    console.log(url);
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
    resultado(json);



}



function resultado(buscar) {

    document.getElementById("listagemProdutos").innerHTML = "";
    for (let i = 0; i < buscar.length; i++) {

        let paragrafo = document.createElement("p");
        let paragrafo1 = document.createElement("p");
        let paragrafo2 = document.createElement("p");
        let img = document.createElement("img");
        img.setAttribute("src", buscar[i].image_link);
        paragrafo.innerText = buscar[i].name;
        paragrafo1.innerText = buscar[i].price;
        paragrafo2.innerText = buscar[i].description;
        document.getElementById("listagemProdutos").appendChild(paragrafo);
        document.getElementById("listagemProdutos").appendChild(paragrafo1);
        document.getElementById("listagemProdutos").appendChild(paragrafo2);
        document.getElementById("listagemProdutos").appendChild(img);

    }
}