const types = [
    "Website",
    "Landing Page",
    "Mobile App",
    "Tablet",
    "Smartwatch",
    "Dashboard",
    "Interactive Screen",
    "AR/VR"
];
const refinements = [
    "Minimalistic",
    "Modern",
    "Feminine",
    "Vintage",
    "Elegant",
    "Clean",
    "Smart",
    "Classy",
    "High end",
    "Luxury",
    "Urban",
    "Cute",
    "Cartoonish",
    "Mysterious",
    "Sci-fi",
    "High-tech",
    "Futuristic",
    "AI Utopia Advancement",
    "Vibrant",
    "Bright",
    "Neon",
    "Cyber",
    "Watercolor",
    "Retro"
];
const colorPalettes = [
    "Gradient",
    "Neon",
    "Pastel",
    "Watercolor",
    "Dreamy summer",
    "Trending UI color on Behance",
    "Trending UI color on Dribble",
    "Navy and Gold",
    "Burgundy and Blush",
    "Forest Green and Rust",
    "Maroon and Mustard",
    "Royal Blue and Peach",
    "Eggplant and Sage",
    "Chocolate Brown and Tangerine",
    "Charcoal Grey and Coral",
    "Burnt Orange and Dusty Rose",
    "Olive Green and Terracotta",
    "Plum and Sage",
    "Teal and Burnt Sienna",
    "Slate Blue and Apricot",
    "Dark Green and Brick Red",
    "Rust and Turquoise Blue"
];

let customRefinementsField;
let customTypesField;
let customColorPalettesField;
let description;

function updateResult() {
    const selectedDescription = description.value;
    const selectedType = customTypesField.getResult()[0];
    const selectedPalette = customColorPalettesField.getResult()[0];
    const selectedRefinements = customRefinementsField.getResult();

    let text = "Please, fill at least \"Description\" and \"Type\" fields";

    if (selectedDescription.trim() && selectedType) {
        text = `UI design of a ${selectedDescription} ${selectedType}`;
    
        if (selectedRefinements.length > 0) {
            text += `, ${selectedRefinements.join(", ")}`;
        }
    
        if (selectedPalette) {
            text += `, ${selectedPalette} color palette`;
        }
    
        text += `, High Resolution --ar 4:3`;
    }

    document.querySelector("#result").value = text;
}

function manageFields() {
    createDescriptionField();
    createTypesFields();
    createRefinementsFields();
    createColorPalettesFields();
}

function createDescriptionField() {
    const descriptionDiv = document.createElement("div");
    descriptionDiv.id = "description-wrapper";

    const descriptionTitle = document.createElement("h3");
    descriptionTitle.innerText = "📝 Project Description";

    description = document.createElement("input");
    description.type = "text";
    description.id = "description";
    description.placeholder = "Description";
    description.autocomplete = "off";
    description.addEventListener("input", updateResult);

    descriptionDiv.appendChild(descriptionTitle);
    descriptionDiv.appendChild(description);

    document.querySelector("#app").appendChild(descriptionDiv);
}

function createRefinementsFields() {
    const refinementsDiv = document.createElement("div");
    refinementsDiv.id = "refinements-wrapper";

    const refinementsTitle = document.createElement("h3");
    refinementsTitle.innerText = "🔧 Refinements";

    const refinementsSelect = document.createElement("select");
    refinementsSelect.id = "refinements"
    refinementsSelect.multiple = true;
    refinementsSelect.addEventListener("change", updateResult);

    refinements.forEach((r) => {
        const refinementsOption = document.createElement("option");
        refinementsOption.innerText = r;
        refinementsOption.value = r;

        refinementsSelect.appendChild(refinementsOption);
    });

    refinementsDiv.appendChild(refinementsTitle);
    refinementsDiv.appendChild(refinementsSelect);

    document.querySelector("#app").appendChild(refinementsDiv);

    customRefinementsField = new vanillaSelectBox("#refinements", {
        maxHeight: 200,
        search: true,
        placeHolder: "Refinement",
        disableSelectAll: true,
        minWidth: -1
    });

    customRefinementsField.multipleSize = 3;
}

function createTypesFields() {
    const typesDiv = document.createElement("div");
    typesDiv.id = "types-wrapper";

    const typesTitle = document.createElement("h3");
    typesTitle.innerText = "📋 Types";

    const typesSelect = document.createElement("select");
    typesSelect.id = "types"
    typesSelect.addEventListener("change", updateResult);

    const defaultOption = document.createElement("option");
    defaultOption.innerText = "";
    defaultOption.value = "";

    typesSelect.appendChild(defaultOption);

    types.forEach((t) => {
        const typesOption = document.createElement("option");
        typesOption.innerText = t;
        typesOption.value = t;

        typesSelect.appendChild(typesOption);
    });

    typesDiv.appendChild(typesTitle);
    typesDiv.appendChild(typesSelect);

    document.querySelector("#app").appendChild(typesDiv);

    customTypesField = new vanillaSelectBox("#types", {
        maxHeight: 200,
        search: true,
        placeHolder: "Types",
        disableSelectAll: true,
        minWidth: -1
    });
}

function createColorPalettesFields() {
    const colorPalettesDiv = document.createElement("div");
    colorPalettesDiv.id = "color-palettes-wrapper";

    const colorPalettesTitle = document.createElement("h3");
    colorPalettesTitle.innerText = "🎨 Color Palette";

    const colorPalettesSelect = document.createElement("select");
    colorPalettesSelect.id = "color-palettes"
    colorPalettesSelect.addEventListener("change", updateResult);

    const defaultOption = document.createElement("option");
    defaultOption.innerText = "";
    defaultOption.value = "";

    colorPalettesSelect.appendChild(defaultOption);

    colorPalettes.forEach((c) => {
        const colorPalettesOption = document.createElement("option");
        colorPalettesOption.innerText = c;
        colorPalettesOption.value = c;

        colorPalettesSelect.appendChild(colorPalettesOption);
    });

    colorPalettesDiv.appendChild(colorPalettesTitle);
    colorPalettesDiv.appendChild(colorPalettesSelect);

    document.querySelector("#app").appendChild(colorPalettesDiv);

    customColorPalettesField = new vanillaSelectBox("#color-palettes", {
        maxHeight: 200,
        search: true,
        placeHolder: "Color Palette",
        disableSelectAll: true,
        minWidth: -1
    });
}

function copyToClipBoard() {
    const result = document.querySelector("#result");
  
    result.select();
    result.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(result.value);
    Toastify({
        text: "Input copied to clipboard!",
        gravity: "bottom",
        position: "center",
        style: {
            backgroundImage: `radial-gradient(circle farthest-corner at 10% 20%,
                rgba(14,174,87,1) 0%, rgba(12,116,117,1) 90%)`,
        }
    }).showToast();
}

function clearFields() {
    customRefinementsField.empty();
    customTypesField.empty();
    customColorPalettesField.empty();
    description.value = "";
}

window.addEventListener("load", () => {
    manageFields();
    document.querySelector("#copy").addEventListener("click", copyToClipBoard);
    document.querySelector("#clear").addEventListener("click", clearFields);
});