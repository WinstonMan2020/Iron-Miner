function bakeCookie() {
    document.getElementById("cookies").innerHTML = "Cookies: " + localStorage.cookies;
    if (typeof(Storage) !== "undefined") {
        if (localStorage.cookies) {
            localStorage.cookies = Number(localstorage.cookies) + 1;
        } else {
            localstorage.cookies = 1;
        }
    }
}

