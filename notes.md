Window: DOMContentLoaded event
The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

window.addEventListener('DOMContentLoaded', (event) => {
console.log('DOM fully loaded and parsed');
});

What is the difference between querySelector () and querySelectorAll ()?
The difference between querySelector() and querySelectorAll() is that querySelector() returns a single object with the first HTML element that matches the 'selectors', but querySelectorAll() returns an array of objects with all the HTML elements that match the 'selectors'.

In the snake game currentIndex and appleIndex = 0 , then why apple appears far away at the start of game
Also when speed = .9 . How to interpret this? How fast is this?

replacement of keycode with:

function control(e) {
if (e.key === 'ArrowRight') {
console.log('right pressed')

    } else if (e.key === 'ArrowUp') {
        console.log('up pressed')

    } else if (e.key === 'ArrowLeft') {
        console.log('left pressed')

    } else if (e.key === 'ArrowDown') {
        console.log('down pressed')

    }

}
document.addEventListener('keyup', control)
