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

function updateResult() {
    const selectedType = document.querySelector("#types").value;
    const selectedPalette = document.querySelector("#color-palettes").value;
    const selectedDescription = document.querySelector("#description").value;
    const selectedRefinements = customRefinementsField.getResult();
    
    let text = `UI design of a ${selectedDescription}`;
    
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
    descriptionTitle.innerText = "Project description";

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

    const defaultOption = document.createElement("option");
    defaultOption.innerText = "None";
    defaultOption.value = "";

    refinementsSelect.appendChild(defaultOption);

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
    typesSelect.addEventListener("input", updateResult);

    const defaultOption = document.createElement("option");
    defaultOption.innerText = "None";
    defaultOption.selected = true;
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
}

function createColorPalettesFields() {
    const colorPalettesDiv = document.createElement("div");
    colorPalettesDiv.id = "color-palettes-wrapper";

    const colorPalettesTitle = document.createElement("h3");
    colorPalettesTitle.innerText = "Color Palette";

    const colorPalettesSelect = document.createElement("select");
    colorPalettesSelect.id = "color-palettes"
    colorPalettesSelect.addEventListener("input", updateResult);

    const defaultOption = document.createElement("option");
    defaultOption.innerText = "None";
    defaultOption.selected = true;
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
}

window.addEventListener("load", () => {
    createFields();
});