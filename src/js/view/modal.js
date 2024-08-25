export class Modal {
    alert(title, content, callback) {
        const modal = document.createElement("div")
        modal.classList.add("modal")
        const titleElement = document.createElement("h3")
        titleElement.innerText = title
        modal.appendChild(titleElement)
        const contentElement = document.createElement("p")
        contentElement.innerText = content
        modal.appendChild(contentElement)
        const buttonClose = document.createElement("button")
        buttonClose.innerText = "Fechar"
        buttonClose.addEventListener("click", () => callback())
        modal.appendChild(buttonClose)

        const overlay = document.createElement("div")
        overlay.classList.add("modal-overlay")

        document.body.insertBefore(modal, document.body.firstChild)
        document.body.insertBefore(overlay, modal)
    }

    confirm(title, content) {
        return new Promise((resolve) => {
            const modal = document.createElement("div");
            modal.classList.add("modal");

            const titleElement = document.createElement("h3");
            titleElement.innerText = title;
            modal.appendChild(titleElement);

            const contentElement = document.createElement("p");
            contentElement.innerText = content;
            modal.appendChild(contentElement);

            const wrapperButtons = document.createElement("div");
            wrapperButtons.classList.add("buttons__wrapper");
            modal.appendChild(wrapperButtons);

            const buttonYes = document.createElement("button");
            buttonYes.innerText = "Sim";
            buttonYes.addEventListener("click", () => {
                resolve(true); // Resolve a promessa com "true" se o usuário clicar em "Sim"
                this.close()
            });
            wrapperButtons.appendChild(buttonYes);

            const buttonNot = document.createElement("button");
            buttonNot.innerText = "Não";
            buttonNot.addEventListener("click", () => {
                resolve(false); // Resolve a promessa com "false" se o usuário clicar em "Não"
                this.close()
            });
            wrapperButtons.appendChild(buttonNot);

            const overlay = document.createElement("div");
            overlay.classList.add("modal-overlay");

            document.body.insertBefore(modal, document.body.firstChild);
            document.body.insertBefore(overlay, modal);
        });
    }

    close() {
        document.querySelector(".modal").remove()
        document.querySelector(".modal-overlay").remove()
    }
}