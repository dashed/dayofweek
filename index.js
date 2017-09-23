// Port of dayofweek function given by Tomohiko Sakamoto on the comp.lang.c Usenet newsgroup.
// See: https://groups.google.com/forum/#!msg/comp.lang.c/m4YG7Uw72Ic/WQj-pRNzJaIJ

var table = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];

var LONG = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
var SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

module.exports = function dayofweek(year, month, day) {
    var translate =
        arguments.length > 3 && arguments[3] !== undefined
            ? arguments[3]
            : true;

    // Expect:
    // year > 1752
    // 1 <= month <= 12
    // 1 <= day <= 31

    year -= month < 3;
    var day_index =
        (year +
            Math.floor(year / 4) -
            Math.floor(year / 100) +
            Math.floor(year / 400) +
            table[month - 1] +
            day) %
        7;

    // day_index := 0=Sun, 1=Mon, ..., 6=Sat

    if (translate === false) {
        return day_index;
    }

    if (translate === true) {
        return LONG[day_index];
    }

    if (typeof translate === "function") {
        return translate(day_index);
    }

    if (typeof translate === "string") {
        var mode = translate.toLowerCase();

        switch (mode) {
            case "long":
                return LONG[day_index];

            case "short":
                return SHORT[day_index];

            default:
                throw new Error("Invalid mode: " + mode);
        }
    }

    if (Array.isArray(translate)) {
        return translate[day_index];
    }

    // unsure what translate is, just return day_index
    return day_index;
};
