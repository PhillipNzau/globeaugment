export function setupCanvas(element: HTMLCanvasElement) {
    console.log('Shoutout to messs', element )

    element.width = window.innerWidth;
    element.height = 300;
    let c = element.getContext('2d');


    let x = Math.random() * 300 ;
    let y = Math.floor(Math.random() * 200) + 1;
    let dx = (Math.random() - 0.5) * 8;
    let dy = (Math.random() - 0.5) * 8;
    let radius = 30;
    const animate = () => {
        requestAnimationFrame(animate);
        c!.clearRect(0,0, innerWidth, innerHeight)
        //arc
        c!.beginPath();
        c!.arc(x,y ,30,0, Math.PI * 2, false);
        c!.strokeStyle = 'red';
        c!.stroke();

        if (x  + radius > innerWidth || x - radius < 0) {
            dx = -dx;
        }

        if (y + radius > innerWidth || y - radius < 0) {
            dy = -dy
        }
        x += dx;
        y +=dy;
        console.log(x)
    }

    animate()
    // (function() {
    //     document.onmousemove = handleMouseMove;
    //     function handleMouseMove(event) {
    //         var eventDoc, doc, body;
    //
    //         event = event || window.event; // IE-ism
    //         console.log('event', event)
    //
    //         // If pageX/Y aren't available and clientX/Y are,
    //         // calculate pageX/Y - logic taken from jQuery.
    //         // (This is to support old IE)
    //         if (event.pageX == null && event.clientX != null) {
    //             eventDoc = (event.target && event.target.ownerDocument) || document;
    //             doc = eventDoc.documentElement;
    //             body = eventDoc.body;
    //
    //             event.pageX = event.clientX +
    //                 (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
    //                 (doc && doc.clientLeft || body && body.clientLeft || 0);
    //             event.pageY = event.clientY +
    //                 (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
    //                 (doc && doc.clientTop  || body && body.clientTop  || 0 );
    //         }
    //
    //         // Use event.pageX / event.pageY here
    //     }
    // })();
}
