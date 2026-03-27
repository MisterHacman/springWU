let wrapper = document.querySelector("#wrapper");
let fade_layer = document.querySelector("#fade-layer");
let aside = document.querySelector("aside");
let menu_button = document.querySelector("#menu-button");

menu_button.addEventListener("click", () => {
	fade_layer.classList.toggle("visible");
	aside.classList.toggle("visible");
});

let rules = document.querySelector("#rules");
let rules_button = document.querySelector("#rules-btn");

rules_button.addEventListener("click", () => {
	fade_layer.classList.toggle("visible");
	rules.classList.toggle("visible");
});

fade_layer.addEventListener("click", () => {
	fade_layer.classList.toggle("visible");
	if (aside.classList.contains("visible"))
		aside.classList.remove("visible");
	if (rules.classList.contains("visible"))
		rules.classList.remove("visible");
});

let search_bar = document.querySelector("#search-bar");
let search_submit = document.querySelector("#search-submit");
let search_dropdown = document.querySelector("#search-dropdown");

function find_elements(search_term) {
	let results = [];
	for (const element in periodic_table) {
		if (element.length < search_term.length) continue;
		let satisfies_search = true;
		for (let i = 0; i < search_term.length; i++) {
			if (element[i] != search_term[i]) satisfies_search = false;
		}
		if (satisfies_search) results.push(element);
	}
	return results;
}

function update_search_dropdown(search_term) {
	const search_results = search_term == "" ? [] : find_elements(search_term);
	search_dropdown.textContent = "";
	for (const result of search_results) {
		let element = document.createElement("button");
		element.appendChild(document.createTextNode(result));
		element.addEventListener("click", (e) => {
			search_bar.value = result;
			search_bar.classList.toggle("with-dropdown");
			search_dropdown.textContent = "";
		})
		search_dropdown.appendChild(element);
	}
	if (search_dropdown.hasChildNodes() != search_bar.classList.contains("with-dropdown")) {
		search_bar.classList.toggle("with-dropdown");
	}
}

search_bar.addEventListener("input", (e) => {
	update_search_dropdown(e.target.value);
});

function elementData(data_name, text) {
	let div = document.createElement("div");
	div.classList.add(data_name);
	div.textContent = text;
	return div;
}

function elementImg(element) {
	let image = new Image();
	image.onerror = () => {
		image.src = "../img/elements/transactinoid.png";
	};
	image.src = `../img/elements/${element}.jpg`;
	const guessed_row = periodic_table[element][1];
	const guessed_col = periodic_table[element][2];
	const true_row = true_element[1];
	const true_col = true_element[2];
	const distance_close_threshold = 2;
	if (periodic_table[element] == true_element)
		image.classList.add("green");
	if ((guessed_col - true_col) ** 2 + (guessed_row - true_row) ** 2 <= distance_close_threshold ** 2)
		image.classList.add("yellow");
	return image;
}

function elementAbbrev(element) {
	let abbrev_text = periodic_table[element][3];
	const guessed_first_letter_ascii_code = abbrev_text.charCodeAt(0);
	const true_first_letter_ascii_code = true_element[3].charCodeAt(0);
	if (guessed_first_letter_ascii_code < true_first_letter_ascii_code)
		abbrev_text = abbrev_text + " >";
	else if (guessed_first_letter_ascii_code > true_first_letter_ascii_code)
		abbrev_text = "< " + abbrev_text;
	let abbrev = elementData("abbrev", abbrev_text);
	const letter_close_threshold = 3;
	if (guessed_first_letter_ascii_code == true_first_letter_ascii_code)
		abbrev.classList.add("green");
	else if (Math.abs(guessed_first_letter_ascii_code - true_first_letter_ascii_code) <= letter_close_threshold)
		abbrev.classList.add("yellow");
	return abbrev;
}

function elementPos(element) {
	const guessed_pos = periodic_table[element][0];
	let pos_text = guessed_pos;
	if (guessed_pos < true_element[0])
		pos_text = pos_text + " >";
	else if (guessed_pos > true_element[0])
		pos_text = "< " + pos_text;
	let pos = elementData("pos", pos_text);
	const true_pos = true_element[0];
	const pos_close_threshold = 3;
	if (guessed_pos == true_pos)
		pos.classList.add("green");
	else if (Math.abs(guessed_pos - true_pos) <= pos_close_threshold)
		pos.classList.add("yellow");
	return pos;
}

function elementMelt(element) {
	const guessed_melt = periodic_table[element][6];
	const true_melt = true_element[6];
	let melt_text = `${guessed_melt}°C`;
	if (guessed_melt < true_melt)
		melt_text = "^ " + melt_text;
	else if (guessed_melt > true_melt)
		melt_text = "v " + melt_text;
	let melt = elementData("melt", melt_text);
	const melt_threshold = 100;
	if (guessed_melt == true_melt)
		melt.classList.add("green");
	else if (Math.abs(guessed_melt - true_melt) <= melt_threshold)
		melt.classList.add("yellow");
	return melt;
}

function generateElement(element) {
	let element_container = document.createElement("section");
	element_container.classList.add("guessed");
	let type = elementData("type", periodic_table[element][4]);
	if (periodic_table[element][4] == true_element[4])
		type.classList.add("green");
	let state = elementData("state", periodic_table[element][5]);
	if (periodic_table[element][5] == true_element[5])
		state.classList.add("green");
	element_container.append(
		elementImg(element),
		elementAbbrev(element),
		elementPos(element),
		elementMelt(element),
		type,
		state
	);
	return element_container;
}

search_submit.addEventListener("click", (e) => {
	const search_term = search_bar.value;
	if (!(search_term in periodic_table)) {
		return;
	}
	search_bar.value = "";
	update_search_dropdown("");
	const element = generateElement(search_term);
	if (wrapper.childElementCount < 2)
		wrapper.appendChild(element);
	else {
		const hr = document.createElement("hr");
		wrapper.insertBefore(element, wrapper.childNodes[2]);
		wrapper.insertBefore(hr, wrapper.childNodes[3]);
	}
});

// [atomnummer, rad, kolumn, förkortning, grupp/typ, fas, smältpunkt]
const periodic_table = {
	"väte": [1, 1, 1, "H", "ickemetall", "gas", -259],
	"helium": [2, 1, 18, "He", "ädelgas", "gas", "N/A"],

	"litium": [3, 2, 1, "Li", "alkalimetall", "fast", 181],
	"beryllium": [4, 2, 2, "Be", "alkalisk jordartsmetall", "fast", 1287],
	"bor": [5, 2, 13, "B", "halvmetall", "fast", 2075],
	"kol": [6, 2, 14, "C", "ickemetall", "fast", 3642],
	"kväve": [7, 2, 15, "N", "ickemetall", "gas", -210],
	"syre": [8, 2, 16, "O", "ickemetall", "gas", -218],
	"fluor": [9, 2, 17, "F", "ickemetall", "gas", -220],
	"neon": [10, 2, 18, "Ne", "ädelgas", "gas", -249],

	"natrium": [11, 3, 1, "Na", "alkalimetall", "fast", 98],
	"magnesium": [12, 3, 2, "Mg", "alkalisk jordartsmetall", "fast", 650],
	"aluminium": [13, 3, 13, "Al", "posttransitionsmetall", "fast", 660],
	"kisel": [14, 3, 14, "Si", "halvmetall", "fast", 1414],
	"fosfor": [15, 3, 15, "P", "ickemetall", "fast", 44],
	"svavel": [16, 3, 16, "S", "ickemetall", "fast", 115],
	"klor": [17, 3, 17, "Cl", "ickemetall", "gas", -102],
	"argon": [18, 3, 18, "Ar", "ädelgas", "gas", -189],

	"kalium": [19, 4, 1, "K", "alkalimetall", "fast", 63],
	"kalcium": [20, 4, 2, "Ca", "alkalisk jordartsmetall", "fast", 842],
	"skandium": [21, 4, 3, "Sc", "övergångsmetall", "fast", 1541],
	"titan": [22, 4, 4, "Ti", "övergångsmetall", "fast", 1668],
	"vanadin": [23, 4, 5, "V", "övergångsmetall", "fast", 1910],
	"krom": [24, 4, 6, "Cr", "övergångsmetall", "fast", 1907],
	"mangan": [25, 4, 7, "Mn", "övergångsmetall", "fast", 1246],
	"järn": [26, 4, 8, "Fe", "övergångsmetall", "fast", 1538],
	"kobolt": [27, 4, 9, "Co", "övergångsmetall", "fast", 1495],
	"nickel": [28, 4, 10, "Ni", "övergångsmetall", "fast", 1455],
	"koppar": [29, 4, 11, "Cu", "ädelmetall", "fast", 1085],
	"zink": [30, 4, 12, "Zn", "övergångsmetall", "fast", 420],
	"gallium": [31, 4, 13, "Ga", "posttransitionsmetall", "flytande", 30],
	"germanium": [32, 4, 14, "Ge", "halvmetall", "fast", 938],
	"arsenik": [33, 4, 15, "As", "halvmetall", "fast", 817],
	"selen": [34, 4, 16, "Se", "ickemetall", "fast", 221],
	"brom": [35, 4, 17, "Br", "ickemetall", "flytande", -7],
	"krypton": [36, 4, 18, "Kr", "ädelgas", "gas", -157],

	"rubidium": [37, 5, 1, "Rb", "alkalimetall", "fast", 39],
	"strontium": [38, 5, 2, "Sr", "alkalisk jordartsmetall", "fast", 777],
	"yttrium": [39, 5, 3, "Y", "övergångsmetall", "fast", 1526],
	"zirkonium": [40, 5, 4, "Zi", "övergångsmetall", "fast", 1855],
	"niob": [41, 5, 5, "Nb", "övergångsmetall", "fast", 2477],
	"molybden": [42, 5, 6, "Mo", "övergångsmetall", "fast", 2623],
	"teknetium": [43, 5, 7, "Tc", "övergångsmetall", "fast", 2157],
	"rutenium": [44, 5, 8, "Ru", "ädelmetall", "fast", 2334],
	"rodium": [45, 5, 9, "Rh", "ädelmetall", "fast", 1964],
	"palladium": [46, 5, 10, "Pd", "ädelmetall", "fast", 1555],
	"silver": [47, 5, 11, "Ag", "ädelmetall", "fast", 962],
	"kadmium": [48, 5, 12, "Cd", "övergångsmetall", "fast", 321],
	"indium": [49, 5, 13, "In", "posttransitionsmetall", "fast", 157],
	"tenn": [50, 5, 14, "Sn", "posttransitionsmetall", "fast", 232],
	"antimon": [51, 5, 15, "Sb", "halvmetall", "fast", 631],
	"tellur": [52, 5, 16, "Te", "halvmetall", "fast", 450],
	"jod": [53, 5, 17, "I", "ickemetall", "fast", 114],
	"xenon": [54, 5, 18, "Xe", "ädelgas", "gas", -112],

	"cesium": [55, 6, 1, "Cs", "alkalimetall", "flytande", 28],
	"barium": [56, 6, 2, "Ba", "alkalisk jordartsmetall", "fast", 730],
	"lantan": [57, 8, 3, "La", "lantanoid", "fast", 920],
	"cerium": [58, 8, 4, "Ce", "lantanoid", "fast", 798],
	"praseodym": [59, 8, 5, "Pr", "lantanoid", "fast", 931],
	"neodym": [60, 8, 6, "Nd", "lantanoid", "fast", 1021],
	"prometium": [61, 8, 7, "Pm", "lantanoid", "fast", 1100],
	"samarium": [62, 8, 8, "Sm", "lantanoid", "fast", 1072],
	"europium": [63, 8, 9, "Eu", "lantanoid", "fast", 822],
	"gadolinium": [64, 8, 10, "Gd", "lantanoid", "fast", 1313],
	"terbium": [65, 8, 11, "Tb", "lantanoid", "fast", 1356],
	"dysprosium": [66, 8, 12, "Dy", "lantanoid", "fast", 1412],
	"holmium": [67, 8, 13, "Ho", "lantanoid", "fast", 1474],
	"erbium": [68, 8, 14, "Er", "lantanoid", "fast", 1497],
	"tulium": [69, 8, 15, "Tm", "lantanoid", "fast", 1545],
	"ytterbium": [70, 8, 16, "Yb", "lantanoid", "fast", 819],
	"lutetium": [71, 8, 17, "Lu", "lantanoid", "fast", 1663],
	"hafnium": [72, 6, 4, "Hf", "övergångsmetall", "fast", 2233],
	"tantal": [73, 6, 5, "Ta", "övergångsmetall", "fast", 3017],
	"volfram": [74, 6, 6, "W", "övergångsmetall", "fast", 3422],
	"rhenium": [75, 6, 7, "Re", "övergångsmetall", "fast", 3186],
	"osmium": [76, 6, 8, "Os", "ädelmetall", "fast", 3033],
	"iridium": [77, 6, 9, "Ir", "ädelmetall", "fast", 2466],
	"platina": [78, 6, 10, "Pt", "ädelmetall", "fast", 1768],
	"guld": [79, 6, 11, "Au", "ädelmetall", "fast", 1064],
	"kvicksilver": [80, 6, 12, "Hg", "ädelmetall", "flytande", -39],
	"tallium": [81, 6, 13, "Tl", "posttransitionsmetall", "fast", 304],
	"bly": [82, 6, 14, "Pb", "posttransitionsmetall", "fast", 327],
	"vismut": [83, 6, 15, "Bi", "posttransitionsmetall", "fast", 271],
	"polonium": [84, 6, 16, "Po", "posttransitionsmetall", "fast", 255],
	"astat": [85, 6, 17, "At", "halvmetall", "fast", 302],
	"radon": [86, 6, 18, "Rn", "ädelgas", "gas", -71],

	"francium": [87, 7, 1, "Fr", "alkalimetall", "flytande", 21],
	"radium": [88, 7, 2, "Ra", "alkalisk jordartsmetall", "fast", 700],
	"aktinium": [89, 9, 3, "Ac", "aktinoid", "fast", 1050],
	"torium": [90, 9, 4, "Th", "aktinoid", "fast", 1750],
	"protaktinium": [91, 9, 5, "Pa", "aktinoid", "fast", 1572],
	"uran": [92, 9, 6, "U", "aktinoid", "fast", 1135],
	"neptunium": [93, 9, 7, "Np", "aktinoid", "fast", 644],
	"plutonium": [94, 9, 8, "Pu", "aktinoid", "fast", 640],
	"americium": [95, 9, 9, "Am", "aktinoid", "fast", 1176],
	"curium": [96, 9, 10, "Cm", "aktinoid", "fast", 1345],
	"berkelium": [97, 9, 11, "Bk", "aktinoid", "fast", 1050],
	"californium": [98, 9, 12, "Cf", "aktinoid", "fast", 900],
	"einsteinium": [99, 9, 13, "Es", "aktinoid", "fast", 860],
	"fermium": [100, 9, 14, "Fm", "aktinoid", "fast", 1500],
	"mendelevium": [101, 9, 15, "Md", "aktinoid", "fast", 830],
	"nobelium": [102, 9, 16, "No", "aktinoid", "fast", 830],
	"lawrencium": [103, 9, 17, "Lr", "aktinoid", "fast", 1600],
	"rutherfordium": [104, 7, 4, "Rf", "övergångsmetall", "okänd", "N/A"],
	"dubnium": [105, 7, 5, "Db", "övergångsmetall", "okänd", "N/A"],
	"seaborgium": [106, 7, 6, "Sg", "övergångsmetall", "okänd", "N/A"],
	"bohrium": [107, 7, 7, "Bh", "övergångsmetall", "okänd", "N/A"],
	"hassium": [108, 7, 8, "Hs", "ädelmetall", "okänd", "N/A"],
	"meitnerium": [109, 7, 9, "Mt", "ädelmetall", "okänd", "N/A"],
	"darmstadtium": [110, 7, 10, "Ds", "ädelmetall", "okänd", "N/A"],
	"röntgenium": [111, 7, 11, "Rg", "ädelmetall", "okänd", "N/A"],
	"copernicium": [112, 7, 12, "Cn", "ädelmetall", "okänd", "N/A"],
	"nihonium": [113, 7, 13, "Nh", "posttransitionsmetall", "okänd", "N/A"],
	"flerovium": [114, 7, 14, "Fl", "posttransitionsmetall", "okänd", "N/A"],
	"moskovium": [115, 7, 15, "Mc", "posttransitionsmetall", "okänd", "N/A"],
	"livermorium": [116, 7, 16, "Lv", "posttransitionsmetall", "okänd", "N/A"],
	"tenness": [117, 7, 17, "Ts", "halvmetall", "okänd", "N/A"],
	"oganesson": [118, 7, 18, "Og", "ädelgas", "okänd", "N/A"],
};

const keys = Object.keys(periodic_table);
const answer_key_index = Math.floor(Math.random() * keys.length);
let true_element = periodic_table[keys[answer_key_index]];
