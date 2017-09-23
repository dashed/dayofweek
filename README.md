dayofweek
=========

[![Greenkeeper badge](https://badges.greenkeeper.io/dashed/dayofweek.svg)](https://greenkeeper.io/)

> Get the day of the week given year, month, and day.
>
> Port of dayofweek function given by Tomohiko Sakamoto on the comp.lang.c Usenet newsgroup
> into JavaScript.
>
> See: https://groups.google.com/forum/#!msg/comp.lang.c/m4YG7Uw72Ic/WQj-pRNzJaIJ


How it works: https://www.quora.com/How-does-Tomohiko-Sakamotos-Algorithm-work

## Install

```sh
$ yarn add dayofweek
# npm v5+
$ npm install dayofweek
# before npm v5
$ npm install --save dayofweek
```

## Usage

```js
const dayofweek = require('dayofweek');

// API
// dayofweek(year, month, day[, translate = true])

// Invariants as per Tomohiko Sakamoto's original implementation.
// * year > 1752
// * 1 <= month <= 12
// * 1 <= day <= 31

// By default returns days of the week.
dayofweek(2017, 6, 16);
dayofweek(2017, 6, 16, true);
dayofweek(2017, 6, 16, 'long');
// → Friday

// Setting translate = 'short' will return shorthand form of the days of the week.
dayofweek(2017, 6, 16, 'short');
// → Fri

// Setting translate = false will return an integer representation of the day of the week.
// i.e. 0=Sun, 1=Mon, ..., 6=Sat
dayofweek(2017, 6, 16, false);
// → 5

// You can pass a translate function. This function will be given the integer
// representation of the day of the week. See above.
dayofweek(2017, 6, 16,
    day_index =>
        // days of the week in Spanish
        [
            "lunes",
            "martes",
            "miércoles",
            "jueves",
            "viernes",
            "sábado",
            "domingo"
        ][day_index]
);
// → sábado

// Or you can pass an array.
dayofweek(2017, 6, 16,
    // days of the week in Spanish
    ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]
);
// → sábado
```

License
=======

Public Domain.
