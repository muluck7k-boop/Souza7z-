// Fade ao carregar
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Efeito de clique + contador
const buttons = document.querySelectorAll(".link-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // efeito pressionar
        button.style.transform = "scale(0.95)";
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);

        // contador
        let totalClicks = localStorage.getItem("totalClicks") || 0;
        totalClicks++;
        localStorage.setItem("totalClicks", totalClicks);

        console.log("Cliques totais:", totalClicks);
    });
});