document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".nav-item");
    const content = document.querySelector(".main-content");

    function loadPage(page) {
        fetch(`/page/${page}/`)
            .then(response => {
                if (!response.ok) throw new Error("Page not found");
                return response.text();
            })
            .then(html => {
                content.innerHTML = html;
                window.history.pushState({ page }, "", `/page/${page}/`);
                setActiveNavItem(page);
            })
            .catch(error => {
                content.innerHTML = "<h2>Page Not Found</h2>";
            });
    }

    function setActiveNavItem(page) {
        menuItems.forEach(item => {
            if (item.getAttribute("data-page") === page) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            const page = this.getAttribute("data-page");
            loadPage(page);
        });
    });

    const path = window.location.pathname.split("/").filter(Boolean);
    if (path.length === 2 && path[0] === "page") {
        loadPage(path[1]);
    } else {
        loadPage("dashboard");
    }
});