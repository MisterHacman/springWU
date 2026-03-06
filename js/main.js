let menu_button = document.querySelector("#menu-button");
let fade_layer = document.querySelector("#fade-layer");
let aside = document.querySelector("aside");

menu_button.addEventListener("click", () => {
    fade_layer.classList.toggle("visible");
    aside.classList.toggle("visible");
});

fade_layer.addEventListener("click", () => {
    fade_layer.classList.toggle("visible");
    aside.classList.toggle("visible");
});

let search_bar = document.querySelector("#search-bar");
let search_submit = document.querySelector("#search-submit");
let search_dropdown = document.querySelector("#search-dropdown");

element_search_bar.addEventListener("input", (e) => {
    console.log("hi");
    const search_term = e.target.value;
    let search_results = find_elements(search_term);
    search_dropdown.textContent = "";
    for (let result in search_results) {
        search_dropdown.appendChild(document.createTextNode(result));
    }
});

function find_elements(search_term) {
    let results = [];
    for (let element in periodic_table) {
        if (element.length < search_term.length) continue;
        let satisfies_search = true;
        for (let i = 0; i < search_term.length; i++) {
            if (element[i] != search_term[i]) satisfies_search = false;
        }
        if (satisfies_search) results.push(element);
    }
    return results;
}

// [rad, kolumn, förkortning, grupp, fas, smältpunkt]
let periodic_table = {
    'väte': [1, 1, 'H', 'icke-metall', 'gas', -259],
    'helium': [1, 18, 'He', 'icke-metall', 'gas', -273],

    'litium': [2, 1, 'Li', 'alkalimetall', 'fast', 181],
    'beryllium': [2, 2, 'Be', 'alkalisk jordartsmetall', 'fast', 1287],
    'bor': [2, 13, 'B', 'halvmetall', 'fast', 2075],
    'kol': [2, 14, 'C', 'icke-metall', 'fast', 3642],
    'kväve': [2, 15, 'N', 'kvävegruppen', 'gas', -210],
    'syre': [2, 16, 'O', 'kalkogen', 'gas', -218],
    'fluor': [2, 17, 'F', 'halogen', 'gas', -220],
    'argon': [2, 18, 'Ar', 'ädelgas', 'gas', -249],

    'natrium': [3, 1, 'Na', 'alkalimetall', 'fast', 98],
    'magnesium': [3, 2, 'Mg', 'alkalisk jordartsmetall', 'fast', 650],
    'aluminium': [3, 13, 'Al', 'övrig metall', 'fast', 660],
    'kisel': [3, 14, 'Si', 'halvmetall', 'fast', 1414],
    'fosfor': [3, 15, 'P', 'kvävegruppen', 'fast', 44],
    'svavel': [3, 16, 'S', 'kalkogen', 'fast', 115],
    'klor': [3, 17, 'Cl', 'halogen', 'gas', -102],
    'neon': [3, 18, 'Ne', 'ädelgas', 'gas', -189],

    'kalium': [4, 1, 'K', 'alkalimetall', 'fast', 63],
    'calcium': [4, 2, 'Ca', 'alkalisk jordartsmetall', 'fast', 842],
    'skandium': [4, 3, 'Sc', 'övergångsmetall', 'fast', 1541],
    'titan': [4, 4, 'Ti', 'övergångsmetall', 'fast', 1668],
    'vanadin': [4, 5, 'V', 'övergångsmetall', 'fast', 1910],
    'krom': [4, 6, 'Cr', 'övergångsmetall', 'fast', 1907],
    'mangan': [4, 7, 'Mn', 'övergångsmetall', 'fast', 1246],
    'järn': [4, 8, 'Fe', 'övergångsmetall', 'fast', 1538],
    'kobolt': [4, 9, 'Co', 'övergångsmetall', 'fast', 1495],
    'nickel': [4, 10, 'Ni', 'övergångsmetall', 'fast', 1455],
    'koppar': [4, 11, 'Cu', 'övergångsmetall', 'fast', 1085],
    'zink': [4, 12, 'Zn', 'övergångsmetall', 'fast', 420],
    'gallium': [4, 13, 'Ga', 'övrig metall', 'fast', 30],
    'germanium': [4, 14, 'Ge', 'halvmetall', 'fast', 938],
    'arsenik': [4, 15, 'As', 'halvmetall', 'fast', 817],
    'selen': [4, 16, 'Se', 'kalkogen', 'fast', 221],
    'brom': [4, 17, 'Br', 'halogen', 'flytande', -7],
    'krypton': [4, 18, 'Kr', 'ädelgas', 'gas', -157],

    'rubidium': [4, 1, 'Rb', 'alkalimetall', 'fast', 39],
    'strontium': [4, 2, 'Sr', 'alkalisk jordartsmetall', 'fast', 777],
    'yttrium': [4, 3, 'Y', 'övergångsmetall', 'fast', 1526],
    'zirkonium': [4, 4, 'Zi', 'övergångsmetall', 'fast', 1855],
    'niob': [4, 5, 'Nb', 'övergångsmetall', 'fast', 2477],
    'molybden': [4, 6, 'Mo', 'övergångsmetall', 'fast', 2623],
    'teknetium': [4, 7, 'Tc', 'övergångsmetall', 'fast', 2157],
    'rutenium': [4, 8, 'Ru', 'övergångsmetall', 'fast', 2334],
    'rodium': [4, 9, 'Rh', 'övergångsmetall', 'fast', 1964],
    'palladium': [4, 10, 'Pd', 'övergångsmetall', 'fast', 1555],
    'silver': [4, 11, 'Ag', 'övergångsmetall', 'fast', 962],
    'kadmium': [4, 12, 'Cd', 'övergångsmetall', 'fast', 321],
    'indium': [4, 13, 'In', 'övrig metall', 'fast', 157],
    'tenn': [4, 14, 'Sn', 'övrig metall', 'fast', 232],
    'antimon': [4, 15, 'Sb', 'halvmetall', 'fast', 631],
    'tellur': [4, 16, 'Te', 'halvmetall', 'fast', 450],
    'jod': [4, 18, 'I', 'halogen', 'fast', 114],
    'xenon': [4, 19, 'Xe', 'ädelgas', 'gas', -112],

    'cesium': [4, 1, 'Cs', 'alkalimetall', 'fast', 28],
    'barium': [4, 2, 'Ba', 'alkalisk jordartsmetall', 'fast', 730],
    'lantan': [4, 4, 'La', 'lantanoid', 'fast', 920],
    'cerium': [4, 5, 'Ce', 'lantanoid', 'fast', 798],
    'praseodym': [4, 6, 'Pr', 'lantanoid', 'fast', 931],
    'neodym': [4, 7, 'Nd', 'lantanoid', 'fast', 1021],
    'prometium': [4, 8, 'Pm', 'lantanoid', 'fast', 1100],
    'samarium': [4, 9, 'Sm', 'lantanoid', 'fast', 1072],
    'europium': [4, 10, 'Eu', 'lantanoid', 'fast', 822],
    'gadolinium': [4, 11, 'Gd', 'lantanoid', 'fast', 1313],
    'terbium': [4, 12, 'Tb', 'lantanoid', 'fast', 1356],
    'dyspropium': [4, 13, 'Dy', 'lantanoid', 'fast', 1412],
    'holmium': [4, 14, 'Ho', 'lantanoid', 'fast', 1474],
    'erbium': [4, 15, 'Er', 'lantanoid', 'fast', 1497],
    'tulium': [4, 16, 'Tm', 'lantanoid', 'fast', 1545],
    'ytterbium': [4, 17, 'Yt', 'lantanoid', 'fast', 819],
    'lutetium': [4, 18, 'Lu', 'lantanoid', 'fast', 1663],
    'hafnium': [4, 4, 'Hf', 'övergångsmetall', 'fast', 2233],
    'tantal': [4, 5, 'Ta', 'övergångsmetall', 'fast', 3017],
    'volfram': [4, 6, 'W', 'övergångsmetall', 'fast', 3422],
    'rhenium': [4, 7, 'Re', 'övergångsmetall', 'fast', 3186],
    'osmium': [4, 8, 'Os', 'övergångsmetall', 'fast', 3033],
    'iridium': [4, 9, 'Ir', 'övergångsmetall', 'fast', 2466],
    'platina': [4, 10, 'Pt', 'övergångsmetall', 'fast', 1768],
    'guld': [4, 11, 'Au', 'övergångsmetall', 'fast', 1064],
    'kvicksilver': [4, 12, 'Hg', 'övergångsmetall', 'flytande', -39],
    'tallium': [4, 13, 'Tl', 'övrig metall', 'fast', 304],
    'bly': [4, 14, 'Pb', 'övrig metall', 'fast', 327],
    'vismut': [4, 15, 'Bi', 'övrig metall', 'fast', 271],
    'polonium': [4, 16, 'Po', 'övrig metall', 'fast', 255],
    'astat': [4, 17, 'At', 'halvmetall', 'fast', 302],
    'radon': [4, 18, 'Rn', 'halogen', 'gas', -71],

    'francium': [4, 1, 'Fr', 'övergångsmetall', 'flytande', 21],
    'radium': [4, 2, 'Ra', 'övergångsmetall', 'fast', 700],
    'aktinium': [4, 4, 'Ac', 'aktinoid', 'fast', 1050],
    'thorium': [4, 5, 'Th', 'aktinoid', 'fast', 1750],
    'protaktinium': [4, 6, 'Pa', 'aktinoid', 'fast', 1572],
    'uran': [4, 7, 'U', 'aktinoid', 'fast', 1135],
    'neptunium': [4, 8, 'Np', 'aktinoid', 'fast', 644],
    'plutonium': [4, 9, 'Pu', 'aktinoid', 'fast', 640],
    'americium': [4, 10, 'Am', 'aktinoid', 'fast', 1176],
    'curium': [4, 11, 'Cm', 'aktinoid', 'fast', 1345],
    'berkelium': [4, 12, 'Bk', 'aktinoid', 'fast', 1050],
    'californium': [4, 13, 'Cf', 'aktinoid', 'fast', 900],
    'einsteinium': [4, 14, 'Es', 'aktinoid', 'fast', 860],
    'fermium': [4, 15, 'Fm', 'aktinoid', 'fast', 1500],
    'mendelevium': [4, 16, 'Md', 'aktinoid', 'fast', 830],
    'nobelium': [4, 17, 'No', 'aktinoid', 'fast', 830],
    'lawrencium': [4, 18, 'Lr', 'aktinoid', 'fast', 1600],
    'rutherfordium': [4, 4, 'Rf', 'övergångsmetall', 'okänd', NaN],
    'dubnium': [4, 5, 'Db', 'övergångsmetall', 'okänd', NaN],
    'seaborgium': [4, 6, 'Sg', 'övergångsmetall', 'okänd', NaN],
    'bohrium': [4, 7, 'Bh', 'övergångsmetall', 'okänd', NaN],
    'hassium': [4, 8, 'Hs', 'övergångsmetall', 'okänd', NaN],
    'meitnerium': [4, 9, 'Mt', 'n/a', 'okänd', NaN],
    'darmstadtium': [4, 10, 'Ds', 'n/a', 'okänd', NaN],
    'röntgenium': [4, 11, 'Rg', 'n/a', 'okänd', NaN],
    'copernicium': [4, 12, 'Cn', 'övergångsmetall', 'okänd', NaN],
    'nihonium': [4, 13, 'Nh', 'n/a', 'okänd', NaN],
    'flerovium': [4, 14, 'Fl', 'n/a', 'okänd', NaN],
    'moskovium': [4, 15, 'Mc', 'n/a', 'okänd', NaN],
    'livermorium': [4, 16, 'Lv', 'n/a', 'okänd', NaN],
    'tenness': [4, 17, 'Ts', 'n/a', 'okänd', NaN],
    'oganesson': [4, 18, 'Og', 'n/a', 'okänd', NaN],
};