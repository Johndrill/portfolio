window.addEventListener("DOMContentLoaded", () =>{

    const click = document.querySelector("#click");
    const menus = document.querySelector("#menus");

    click.addEventListener("click", () => {
        if (menus.className.includes("show")) {
            menus.classList.remove("show");
        } else {
            menus.classList.add("show");
        }
    });

});


window.addEventListener("resize", () =>{

if (window.innerWidth > 992){
    if (menus.className.includes("show")){
        menus.classList.remove("show");
    }
}
});