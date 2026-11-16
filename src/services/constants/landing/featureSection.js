export const CATCHPHRASE = "How it works"
export const FEATURE_TITLE = "One notebook, three ways to look at it."
export const FEATURE_DESCRIPTION = "Everything you add lands in your task list. DailyDoodles sorts it by due date " +
    "so the right things are in front of you."

// Only features that exist in the app today (Tasks: List, Today, Upcoming).
export const FEATURE_LISTS = [
    {
        id: 1,
        icon: "bi-journal-text",
        title: "Write it down",
        description: "Add a task in a line. Open it any time to add a description or a due date, tick it off when it's done, or delete it.",
    }, {
        id: 2,
        icon: "bi-sun",
        title: "Today",
        description: "Everything due today in one short list, with a count in the sidebar so you know what's left.",
    }, {
        id: 3,
        icon: "bi-calendar-week",
        title: "Upcoming",
        description: "Tasks with later due dates, lined up so nothing sneaks up on you.",
    },
]
