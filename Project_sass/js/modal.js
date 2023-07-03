        const refs = {
            openModalBtns: document.querySelectorAll("[data-open-modal]"),
            closeModalBtn: document.querySelector("[data-close-modal]"),
            backdrop: document.querySelector("[data-backdrop]"),
        };

        console.log(refs.openModalBtns);

        refs.openModalBtns.forEach(btn => {
            btn.addEventListener("click", toggleModal);
        });

        refs.closeModalBtn.addEventListener("click", toggleModal);

        refs.backdrop.addEventListener("click", logBackdropClick);

        function toggleModal() {
            refs.backdrop.classList.toggle("is-hidden");
        }

        function logBackdropClick() {
            console.log("Open backdrop");
        }