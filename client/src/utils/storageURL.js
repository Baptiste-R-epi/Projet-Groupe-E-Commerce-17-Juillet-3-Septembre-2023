export function storageURL(path, args) {
    let url = "http://localhost:8484/" + path;
    if (!args) return url;
    url += "?";

    Object.keys(args).forEach(key => {
        if ((typeof args[key]) === "object") {
            args[key].forEach(value => {
                url += key + "=" + value + "&"
            })
        } else {
            url += key + "=" + args[key] + "&"
        }
    });

    return url.slice(0, -1);
}