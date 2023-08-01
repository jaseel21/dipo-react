document.addEventListener('mousemove', (e) => {
    const height = circle.offsetHeight;
    const width = circle.offsetWidth;

    if (e.target.tagName === 'A' ||
    e.target.tagName === 'BUTTON' ||
    e.target.parentNode.tagName === 'BUTTON') {
    circle.classList.add('big');
    } else {
    circle.classList.remove('big'); I
    }

    setTimeout( ()=> {
    circle.style.left = '${e.pagex width/2}px';
    circle.style.top = '${e.pageY height/2}px';
    }, 20);
    });