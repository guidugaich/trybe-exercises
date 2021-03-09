window.onload = function () {
    let text = document.querySelector('.texto');
    let bgColorBtn = document.getElementById('bg-color-btn');
    let textColorBtn = document.getElementById('text-color-btn');
    let fontSizeBtn = document.getElementById('font-size-btn');
    let lineHeightBtn = document.getElementById('line-height-btn');
    let fontFamilyBtn = document.getElementById('font-family-btn');

    
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
}