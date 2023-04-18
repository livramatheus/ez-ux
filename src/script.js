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
    "Futuristic",
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
    "Trending UI color on Dribble"
];

let customRefinementsField;
let customTypesField;
let customColorPalettesField;

function updateResult() {
    const selectedDescription = document.querySelector("#description").value;
    const selectedType = customTypesField.getResult()[0];
    const selectedPalette = customColorPalettesField.getResult()[0];
    const selectedRefinements = customRefinementsField.getResult();

    let text = "Please fill all fields";

    if (
        selectedDescription.trim() &&
        selectedType &&
        selectedPalette &&
        selectedRefinements.length > 0
    ) {
        text = `UI design of a ${selectedDescription}`;
    
        if (selectedType) {
            text += ` ${selectedType}`;
        }
        
        if (selectedRefinements.length > 0) {
            text += `, ${selectedRefinements.join(", ")}`;
        }
    
        if (selectedPalette) {
            text += `, ${selectedPalette} color palette`;
        }
    
        text += `, High Resolution — ar 4:3 — v 5`;
    }

    document.querySelector("#result").value = text;
}

function createFields() {
    createDescriptionField();
    createTypesFields();
    createRefinementsFields();
    createColorPalettesFields();
}

function createDescriptionField() {
    const descriptionDiv = document.createElement("div");
    descriptionDiv.id = "description-wrapper";

    const descriptionTitle = document.createElement("h3");
    descriptionTitle.innerText = "Project Description";

    const description = document.createElement("input");
    description.type = "text";
    description.id = "description";
    description.placeholder = "Description";
    description.addEventListener("input", updateResult);

    descriptionDiv.appendChild(descriptionTitle);
    descriptionDiv.appendChild(description);

    document.querySelector("#app").appendChild(descriptionDiv);
}

function createRefinementsFields() {
    const refinementsDiv = document.createElement("div");
    refinementsDiv.id = "refinements-wrapper";

    const refinementsTitle = document.createElement("h3");
    refinementsTitle.innerText = "Refinements";

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
        maxHeight: 300,
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
    typesTitle.innerText = "Types";

    const typesSelect = document.createElement("select");
    typesSelect.id = "types"
    typesSelect.addEventListener("change", updateResult);

    const defaultOption = document.createElement("option");
    defaultOption.innerText = "None";
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
        maxHeight: 300,
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
    colorPalettesTitle.innerText = "Color Palette";

    const colorPalettesSelect = document.createElement("select");
    colorPalettesSelect.id = "color-palettes"
    colorPalettesSelect.addEventListener("change", updateResult);

    const defaultOption = document.createElement("option");
    defaultOption.innerText = "None";
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
        maxHeight: 300,
        search: true,
        placeHolder: "Color Palette",
        disableSelectAll: true,
        minWidth: -1
    });
}

window.addEventListener("load", () => {
    createFields();
});