export class Spinner {
    show() {
        const divWrapper = document.createElement("div")
        divWrapper.classList.add("loading-spinner")
        divWrapper.setAttribute("id", "loading-spinner")

        const divSpinner = document.createElement("div")
        divSpinner.classList.add("spinner")
        divWrapper.appendChild(divSpinner)

        document.body.insertBefore(divWrapper, document.body.firstChild)
    }

    destroy() {
        const divWrapper = document.querySelector(".loading-spinner")

        if (divWrapper) {
            divWrapper.remove()
        }
    }
}