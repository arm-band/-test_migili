window.addEventListener('load', () => {
    const imgTags = document.querySelectorAll('img');
    Object.values(imgTags).map((imgTag) => {
        imgTag.oncontextmenu = (e) => {
            // 右クリック禁止
            e.preventDefault();
            e.stopPropagation();
            return false;
        };
        imgTag.onselectstart = (e) => {
            // 選択開始禁止
            e.preventDefault();
            e.stopPropagation();
            return false;
        };
        imgTag.onmousedown = (e) => {
            // マウスダウン禁止
            e.preventDefault();
            e.stopPropagation();
            return false;
        };
    });
});
