
const navCoverElement = document.querySelector('.serfull-nav-cover');
const flagEl = document.querySelector('#myFlag');
const mainEl = document.querySelector('.mod-full-ser-roll');
const fixPs = document.querySelector('.serfull-nav-cover');
const scollBtnSer = document.querySelectorAll('.serfull-nav-scroll');
const sectionSerFull = document.querySelectorAll('.serfull-sec');

const bodyRect = document.body.getBoundingClientRect();
const rec1 =  flagEl.getBoundingClientRect()

window.onscroll = () => {
    let topDistance = Math.round(rec.top - bodyRect.top);
    if (document.documentElement.scrollTop >= topDistance ) {
        fixPs.classList.add('pin-service-nav');
    } else {
        fixPs.classList.remove('pin-service-nav');
    }
}

/* Array.from(scollBtnSer).map((btn) => {
    btn.onclick = () => {
        Array.from(sectionSerFull).map(item => {
            scrollTo(item);
        })
    }
})
Math.round(rec2.top - bodyRect.top)

function scrollTo(item) {
    var time;
    const rec2 =  item.getBoundingClientRect()
    if (document.documentElement.scrollTop !== Math.round(rec2.top - bodyRect.top)) {
        window.scrollBy(0, 50);
        time = setTimeout('scrollTo()', 10)
    } else {
        clearTimeout(time);
    }
} */