window.onload = function() {
    document.getElementById('success-modal').style.display = 'none';
}

function succcessModal () {
    document.getElementById("btn").onclick = function () {
        document.getElementById('success-modal').style.display = "none"
    };

    document.getElementById("btn-2").onclick = function () {
        document.getElementById('success-modal').style.display = "none"
    };
};

function modalOpen () {
    document.getElementById("modal-open").onclick = function () {
        document.getElementById('success-modal').style.display = "flex"
    };
}

succcessModal()
