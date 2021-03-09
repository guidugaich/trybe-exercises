window.onload = function () {
    let paragraphs = document.querySelectorAll('.texto p');
    let bgColorBtn = document.getElementById('bg-color-btn');
    let textColorBtn = document.getElementById('text-color-btn');
    
    bgColorBtn.addEventListener('click', function () {
        for (let paragraph of paragraphs) {
            let bgColor = document.getElementById('bg-color').value;
            paragraph.style.backgroundColor = bgColor;
        }
    });

    textColorBtn.addEventListener('click', function () {
        for (let paragraph of paragraphs) {
            let textColor = document.getElementById('text-color').value;
            paragraph.style.color = textColor;
        }
    });
}