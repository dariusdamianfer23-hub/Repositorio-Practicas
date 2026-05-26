function filterFiles() {
    const input = document
        .getElementById("fileSearch")
        .value
        .toLowerCase();

    const links = document.querySelectorAll("#fileList a");

    links.forEach(link => {
        const text = link.textContent.toLowerCase();

        if (text.includes(input)) {
            link.style.display = "inline-block";
        } else {
            link.style.display = "none";
        }
    });
}