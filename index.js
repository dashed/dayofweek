// Port of dayofweek function given by Tomohiko Sakamoto on the comp.lang.c Usenet newsgroup.
// See: https://groups.google.com/forum/#!msg/comp.lang.c/m4YG7Uw72Ic/WQj-pRNzJaIJ

var table = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];

// year > 1752
// 1 <= month <= 12
// 1 <= day <= 31
// Returns: 0=Sun, 1=Mon, ..., 6=Sat
module.exports = function dayofweek(year, month, day) {
    year -= month < 3;
    return (
        (year +
            Math.floor(year / 4) -
            Math.floor(year / 100) +
            Math.floor(year / 400) +
            table[month - 1] +
            day) %
        7
    );
}
