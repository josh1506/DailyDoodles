import {test} from "node:test"
import assert from "node:assert/strict"

import {isDueToday, isUpcoming, localDateKey} from "./dueDate.js"

// Node applies process.env.TZ changes at runtime, so each case runs in several zones,
// including UTC+8 (where the old logic listed today's tasks as Upcoming before 08:00)
// and UTC-5 (where the old logic put tasks on the wrong day).
const ZONES = ["Asia/Manila", "America/New_York", "UTC", "Pacific/Kiritimati", "Pacific/Pago_Pago"]

const inEachZone = (fn) => {
    const original = process.env.TZ
    try {
        for (const zone of ZONES) {
            process.env.TZ = zone
            fn(new Date(2026, 6, 12, 1, 30), new Date(2026, 6, 12, 23, 30), zone)
        }
    } finally {
        process.env.TZ = original
    }
}

test("local date key uses the local calendar day", () => inEachZone((early, late, zone) => {
    assert.equal(localDateKey(early), "2026-07-12", zone)
    assert.equal(localDateKey(late), "2026-07-12", zone)
}))

test("a task due today is Today and never Upcoming, at any hour", () => inEachZone((early, late, zone) => {
    for (const now of [early, late]) {
        assert.equal(isDueToday("2026-07-12", now), true, zone)
        assert.equal(isUpcoming("2026-07-12", now), false, zone)
    }
}))

test("future dates are Upcoming; past dates are neither", () => inEachZone((early, late, zone) => {
    assert.equal(isUpcoming("2026-07-13", late), true, zone)
    assert.equal(isUpcoming("2027-01-01", early), true, zone)
    assert.equal(isDueToday("2026-07-11", early), false, zone)
    assert.equal(isUpcoming("2026-07-11", early), false, zone)
}))

test("tasks without a due date are neither", () => {
    for (const due of [null, undefined, ""]) {
        assert.equal(isDueToday(due), false)
        assert.equal(isUpcoming(due), false)
    }
})
