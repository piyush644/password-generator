var pass_gen = document.getElementById("gen");

function run() {
    pass_gen.innerHTML = Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2);
}