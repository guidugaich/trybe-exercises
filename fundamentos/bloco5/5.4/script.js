window.onload = function () {
    
    let text = document.querySelector('.texto');
    let bgColorBtn = document.getElementById('bg-color-btn');
    let textColorBtn = document.getElementById('text-color-btn');
    let fontSizeBtn = document.getElementById('font-size-btn');
    let lineHeightBtn = document.getElementById('line-height-btn');
    let fontFamilyBtn = document.getElementById('font-family-btn');

    if (localStorage.length !== 0) {
        text.style.backgroundColor = localStorage['bg-color'];
        text.style.color = localStorage['text-color'];
        text.style.fontSize = localStorage['font-size'];
        text.style.lineHeight = localStorage['line-height'];
        text.style.fontFamily = localStorage['font-family'];
    }

    bgColorBtn.addEventListener('click', function () {
        let bgColor = document.getElementById('bg-color').value;
        text.style.backgroundColor = bgColor;
        localStorage.setItem('bg-color', bgColor);
    });

    textColorBtn.addEventListener('click', function () {
        let textColor = document.getElementById('text-color').value;
        text.style.color = textColor;
        localStorage.setItem('text-color', textColor);
    });

    fontSizeBtn.addEventListener('click', function () {
        let fontSize = document.getElementById('font-size').value;
        text.style.fontSize = fontSize;
        localStorage.setItem('font-size', fontSize);
    });

    lineHeightBtn.addEventListener('click', function () {
        let lineHeight = document.getElementById('line-height').value;
        text.style.lineHeight = lineHeight;
        localStorage.setItem('line-height', lineHeight);
    });

    fontFamilyBtn.addEventListener('click', function () {
        let fontFamily = document.getElementById('font-family').value;
        text.style.fontFamily = fontFamily;
        localStorage.setItem('font-family', fontFamily);
    });

    let resetBtn = document.querySelector('#reset-button');
    resetBtn.addEventListener('click', function () {
        localStorage.clear();
        document.location.reload();
    })

}