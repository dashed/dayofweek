// 3rd-party imports
import test from "ava";

// library imports

import dayofweek from ".";

// tests

test(t => {
    t.is(dayofweek(2017, 6, 16), "Friday");
    t.is(dayofweek(2017, 6, 16, true), "Friday");
    t.is(dayofweek(2017, 6, 16, "long"), "Friday");

    t.is(dayofweek(2017, 6, 16, "short"), "Fri");

    t.is(dayofweek(2017, 6, 16, false), 5);

    t.is(dayofweek(2017, 6, 16, false), 5);

    t.is(
        dayofweek(
            2017,
            6,
            16,
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
        ),
        "sábado"
    );

    t.is(
        dayofweek(
            2017,
            6,
            16,
            // days of the week in Spanish
            [
                "lunes",
                "martes",
                "miércoles",
                "jueves",
                "viernes",
                "sábado",
                "domingo"
            ]
        ),
        "sábado"
    );
});
