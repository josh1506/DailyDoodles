// Button semantics + Enter/Space for existing clickable <div>s. Used instead of swapping in a
// <button>, which would pick up the global button styles and break the nth-child SCSS selectors.
export const clickable = (onActivate) => ({
    role: "button",
    tabIndex: 0,
    onClick: onActivate,
    onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            onActivate(e)
        }
    },
})

export const prefersReducedMotion = () =>
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
