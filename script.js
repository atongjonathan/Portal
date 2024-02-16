document.addEventListener("DOMContentLoaded", ()=>
{
    const ham = document.getElementById("ham");
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content")
    
    ham.addEventListener("click", () => {
        sidebar.classList.toggle("sidebar-close");
        content.classList.toggle("content-open")
    });
    
})