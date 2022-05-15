;(function(window,document,undefined){
    "use strict";
        var init = function(){   
            var canvas = document.querySelector('#x');
            var icon_template = document.querySelector('#template');
            //setting the area the elements will be randomly generated in
            var icon_width = 40;
            var icon_height = 30;
            //setting size of elements
            var the_images = [
                'media/star2.png',
                'media/star3.png',
                'media/star4.png',
                'media/star5.png'
            ];
            var pickRandomImage = function(){
                var i = Math.floor( Math.random() * the_images.length );
                //get random array of index from the function above items
                return the_images[i];
            };
            var total_number_of_images = 25;
            var max_height = canvas.offsetHeight - icon_height;
            var max_width = canvas.offsetWidth - icon_width;
            var randomCoordinate = function(){
                //randomizing placement of elements
                var r = [];
                var x = Math.floor( Math.random() * max_width );
                //setting the elements within the x bounds of the canvas
                var y = Math.floor( Math.random() * max_height );
                //setting the elements within the y bounds of the canvas
                r = [x,y];
                return r;
            };
            var createImage = function(){
                var node = icon_template.cloneNode(true);
                //declaring duplicate of node modules in the template
                var xy = randomCoordinate();
                node.removeAttribute('id');
                node.removeAttribute('hidden');
                //hide elements that was generated previously
                node.style.top = xy[1] + 'px';
                node.style.left = xy[0] + 'px';
                node.setAttribute('src',pickRandomImage());
                //generate image
                canvas.appendChild(node);
            };
            for (var i=0;i<total_number_of_images;i++){
                createImage();
            };
            //start function
        };
       window.addEventListener('load',init);
})(window,document);
//load function