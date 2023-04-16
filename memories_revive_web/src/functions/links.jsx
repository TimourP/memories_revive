


export const smooth_scroll = (e) => {
    e.preventDefault();

    const li = e.target.getAttribute('href').split("#")

    document.querySelector("#" + li[li.length - 1]).scrollIntoView({
        behavior: 'smooth'
    });
}