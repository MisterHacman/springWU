// [rad, kolumn, grupp, fas, smältpunkt]
let periodic_table = {
    'väte': [1, 1, 'icke-metall', 'gas', -259],
    'helium': [1, 18, 'icke-metall', 'gas', -273],

    'litium': [2, 1, 'alkalimetall', 'fast', 181],
    'beryllium': [2, 2, 'alkalisk jordartsmetall', 'fast', 1287],
    'bor': [2, 13, 'halvmetall', 'fast', 2075],
    'kol': [2, 14, 'icke-metall', 'fast', 3642],
    'kväve': [2, 15, 'kvävegruppen', 'gas', -210],
    'syre': [2, 16, 'kalkogen', 'gas', -218],
    'fluor': [2, 17, 'halogen', 'gas', -220],
    'argon': [2, 18, 'ädelgas', 'gas', -249],

    'natrium': [3, 1, 'alkalimetall', 'fast', 98],
    'magnesium': [3, 2, 'alkalisk jordartsmetall', 'fast', 650],
    'aluminium': [3, 13, 'övrig metall', 'fast', 660],
    'kisel': [3, 14, 'halvmetall', 'fast', 1414],
    'fosfor': [3, 15, 'kvävegruppen', 'fast', 44],
    'svavel': [3, 16, 'kalkogen', 'fast', 115],
    'klor': [3, 17, 'halogen', 'gas', -102],
    'neon': [3, 18, 'ädelgas', 'gas', -189],

    'kalium': [4, , 'alkalimetall', 'fast', 63],
    'calcium': [4, , 'alkalisk jordartsmetall', 'fast', 842],
    'skandium': [4, , 'övergångsmetall', 'fast', 1541],
    'titan': [4, , 'övergångsmetall', 'fast', 1668],
    'vanadin': [4, , 'övergångsmetall', 'fast', 1910],
    'krom': [4, , 'övergångsmetall', 'fast', 1907],
    'mangan': [4, , 'övergångsmetall', 'fast', 1246],
    'järn': [4, , 'övergångsmetall', 'fast', 1538],
    'kobolt': [4, , 'övergångsmetall', 'fast', 1495],
    'nickel': [4, , 'övergångsmetall', 'fast', 1455],
    'koppar': [4, , 'övergångsmetall', 'fast', 1085],
    'zink': [4, , 'övergångsmetall', 'fast', 420],
    'gallium': [4, , 'övrig metall', 'fast', 30],
    'germanium': [4, , 'halvmetall', 'fast', 938],
    'arsenik': [4, , 'halvmetall', 'fast', 817],
    'selen': [4, , 'kalkogen', 'fast', 221],
    'brom': [4, , 'halogen', 'flytande', -7],
    'krypton': [4, , 'ädelgas', 'gas', -157],
};

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