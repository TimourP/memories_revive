

if (window.location.href.includes("/payment/pay") || window.location.href.includes("payment/confirmation")) {
    document.getElementsByTagName("html")[0].classList.add("hidden")
} else {
    document.getElementsByTagName("html")[0].classList.remove("hidden")
}

if (window.location.href.includes("payment/confirmation")) {
    const links = document.getElementsByClassName("btn-primary");
    for (let i = 0;i < links.length; i++) {
        document.getElementsByClassName("btn-primary")[i].href = "https://memoriesrevive.timour.me/"   
    }
}