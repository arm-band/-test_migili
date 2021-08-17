window.addEventListener('load', () => {
    const imgTags = document.querySelectorAll('img');
    for (const [key, val] of Object.entries(imgTags)) {
        val.oncontextmenu = (e) => {
            // 右クリック禁止
            e.preventDefault();
            e.stopPropagation();
            return false;
        };
        val.onselectstart = (e) => {
            // 選択開始禁止
            e.preventDefault();
            e.stopPropagation();
            return false;
        };
        val.onmousedown = (e) => {
            // マウスダウン禁止
            e.preventDefault();
            e.stopPropagation();
            return false;
        };
    }
});
