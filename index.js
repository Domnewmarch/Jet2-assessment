window.onload = function () {
    document.getElementById('btn').onclick = function () {
        document.getElementById('success-modal').style.display = "none"
        
    };
};

function modalOpen () {
    document.getElementById("modal-open").onclick = function () {
        document.getElementById('success-modal').style.display = "block"
    };
}

