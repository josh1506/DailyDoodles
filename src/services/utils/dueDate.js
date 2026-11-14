// due_date comes from the API as a calendar date ("YYYY-MM-DD") with no time zone.
// Compare it as a string against the user's *local* calendar date. Parsing it with
// new Date("YYYY-MM-DD") yields UTC midnight, which shifted Today/Upcoming by the UTC offset.

export const localDateKey = (now = new Date()) => {
    const pad = (n) => String(n).padStart(2, "0")
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`
}

export const isDueToday = (dueDate, now = new Date()) => !!dueDate && dueDate === localDateKey(now)

export const isUpcoming = (dueDate, now = new Date()) => !!dueDate && dueDate > localDateKey(now)
