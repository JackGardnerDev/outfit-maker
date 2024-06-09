// document.getElementById('imageUpload').addEventListener('change', function(event) {
//     const files = event.target.files;
//     const container = document.getElementById('imageContainer');

//     for (let i = 0; i < files.length; i++) {
//         const file = files[i];
//         const reader = new FileReader();

//         reader.onload = function(e) {
//             const img = document.createElement('img');
//             img.src = e.target.result;
//             img.className = 'draggable';
//             img.style.top = '0px';
//             img.style.left = '0px';
//             container.appendChild(img);

//             img.addEventListener('mousedown', function(event) {
//                 let shiftX = event.clientX - img.getBoundingClientRect().left;
//                 let shiftY = event.clientY - img.getBoundingClientRect().top;

//                 function moveAt(pageX, pageY) {
//                     img.style.left = pageX - shiftX + 'px';
//                     img.style.top = pageY - shiftY + 'px';
//                 }

//                 function onMouseMove(event) {
//                     moveAt(event.pageX, event.pageY);
//                 }

//                 document.addEventListener('mousemove', onMouseMove);

//                 img.addEventListener('mouseup', function() {
//                     document.removeEventListener('mousemove', onMouseMove);
//                 });

//                 img.ondragstart = function() {
//                     return false;
//                 };
//             });
//         };

//         reader.readAsDataURL(file);
//     }
// });

document.getElementById('imageUpload').addEventListener('change', function(event) {
    const files = event.target.files;
    const container = document.getElementById('imageContainer');

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'draggable';
            img.style.top = '0px';
            img.style.left = '0px';
            container.appendChild(img);

            img.addEventListener('mousedown', function(event) {
                let shiftX = event.clientX - img.getBoundingClientRect().left;
                let shiftY = event.clientY - img.getBoundingClientRect().top;

                function moveAt(pageX, pageY) {
                    img.style.left = pageX - shiftX + 'px';
                    img.style.top = pageY - shiftY + 'px';
                }

                function onMouseMove(event) {
                    moveAt(event.pageX, event.pageY);
                }

                document.addEventListener('mousemove', onMouseMove);

                img.addEventListener('mouseup', function() {
                    document.removeEventListener('mousemove', onMouseMove);
                });

                img.ondragstart = function() {
                    return false;
                };

                // Add an event listener for the Escape key to stop dragging
                document.addEventListener('keydown', function(event) {
                    if (event.key === 'Escape') {
                        document.removeEventListener('mousemove', onMouseMove);
                    }
                });
            });
        };

        reader.readAsDataURL(file);
    }
});
