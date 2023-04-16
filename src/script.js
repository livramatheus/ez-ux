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

function updateResult() {
    const selectedType = document.querySelector("#types").value;
    const selectedPalette = document.querySelector("#color-palettes").value;
    const selectedDescription = document.querySelector("#description").value;

    const checkedRefinements = [];

    document.querySelectorAll(".refinement:checked").forEach((e) => {
        checkedRefinements.push(e.value);
    });
    
    document.querySelector("#result").value = 
        `UI design of a ${selectedDescription} ${selectedType}, ${checkedRefinements.join(", ")}, ${selectedPalette} color palette`;
}

function createFields() {
    createRefinementsFields();
    createTypesFields();
    createColorPalettesFields();
    createDescriptionField();
}

function createDescriptionField() {
    const descriptionDiv = document.createElement("div");
    descriptionDiv.id = "description-wrapper";

    const description = document.createElement("input");
    description.type = "text";
    description.id = "description";
    description.addEventListener("input", updateResult);

    descriptionDiv.appendChild(description);

    document.querySelector("#app").appendChild(descriptionDiv);
}

function createRefinementsFields() {
    const refinementsDiv = document.createElement("div");
    refinementsDiv.id = "refinements-wrapper";

    refinements.forEach((r) => {
        const wrapper = document.createElement("div");
        const label = document.createElement("label");
        const checkBox = document.createElement("input");

        label.setAttribute("for", r.toLocaleLowerCase());
        label.innerText = r;

        checkBox.type = "checkbox";
        checkBox.classList.add("refinement");
        checkBox.name = "refinement[]";
        checkBox.id = r.toLocaleLowerCase();
        checkBox.value = r;
        checkBox.addEventListener("input", updateResult);

        wrapper.appendChild(label);
        wrapper.appendChild(checkBox);

        refinementsDiv.appendChild(wrapper);
    });

    document.querySelector("#app").appendChild(refinementsDiv);
}

function createTypesFields() {
    const typesDiv = document.createElement("div");
    typesDiv.id = "types-wrapper";

    const typesSelect = document.createElement("select");
    typesSelect.id = "types"
    typesSelect.addEventListener("input", updateResult);

    types.forEach((t) => {
        const typesOption = document.createElement("option");
        typesOption.innerText = t;
        typesOption.value = t;

        typesSelect.appendChild(typesOption);
    });

    typesDiv.appendChild(typesSelect);

    document.querySelector("#app").appendChild(typesDiv);
}

function createColorPalettesFields() {
    const colorPalettesDiv = document.createElement("div");
    colorPalettesDiv.id = "color-palettes-wrapper";

    const colorPalettesSelect = document.createElement("select");
    colorPalettesSelect.id = "color-palettes"
    colorPalettesSelect.addEventListener("input", updateResult);

    colorPalettes.forEach((c) => {
        const colorPalettesOption = document.createElement("option");
        colorPalettesOption.innerText = c;
        colorPalettesOption.value = c;

        colorPalettesSelect.appendChild(colorPalettesOption);
    });

    colorPalettesDiv.appendChild(colorPalettesSelect);

    document.querySelector("#app").appendChild(colorPalettesDiv);
}

window.addEventListener("load", () => {
    createFields();
});