export default function makeArrow (id){
    console.log('teste',id)
    switch (id) {
        case 1:
            var c = document.getElementById('arrow1');
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.moveTo(10, 0);
            ctx.lineTo(10, 130);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 8;
            ctx.moveTo(7, 130);
            ctx.lineTo(253, 130);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.moveTo(250, 130);
            ctx.lineTo(250, 50);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.arc(250, 42, 8, 0, 2 * Math.PI);
            ctx.stroke();
            return c;
        case 2:
            let dpi = window.devicePixelRatio;
            console.log('dpi',dpi)
            //eslint-disable-next-line
            var c = document.getElementById('arrow2');
            //eslint-disable-next-line
            var ctx = c.getContext("2d");
            let style_height = getComputedStyle(c).getPropertyValue("height").slice(0, -2);
            //get CSS width
            let style_width = getComputedStyle(c).getPropertyValue("width").slice(0, -2);
            //scale the c
            c.setAttribute('height', style_height * dpi);
            c.setAttribute('width', style_width * dpi);
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.moveTo(10, 345);
            ctx.lineTo(10, 445);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 7;
            ctx.moveTo(7, 445);
            ctx.lineTo(306, 445);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.moveTo(303, 445);
            ctx.lineTo(300, 70);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.arc(300, 65, 8, 0, 2 * Math.PI);
            ctx.stroke();
            return c;
        case 3:
            //eslint-disable-next-line
            var c = document.getElementById('arrow3');
            //eslint-disable-next-line
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.moveTo(10, 0);
            ctx.lineTo(10, 130);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 8;
            ctx.moveTo(7, 130);
            ctx.lineTo(200, 130);
            ctx.stroke();
            

            
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.arc(205, 130, 8, 0, 2 * Math.PI);
            ctx.stroke();
            return c;
        case 4:
            var dpi4 = window.devicePixelRatio;
            console.log('dpi',dpi4)
            //eslint-disable-next-line
            var c = document.getElementById('arrow4');
            //eslint-disable-next-line
            var ctx = c.getContext("2d");
            var style_height4 = getComputedStyle(c).getPropertyValue("height").slice(0, -2);
            //get CSS width
            let style_width4 = getComputedStyle(c).getPropertyValue("width").slice(0, -2);
            //scale the canvas
            c.setAttribute('height', style_height4 * dpi4);
            c.setAttribute('width', style_width4 * dpi4);
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.moveTo(96, 210);
            ctx.lineTo(40, 210);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 7;
            ctx.moveTo(40, 213);
            ctx.lineTo(40, 20);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.moveTo(37, 20);
            ctx.lineTo(250, 20);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.arc(255, 20, 8, 0, 2 * Math.PI);
            ctx.stroke();
            return c;
        case 5:
            var dpi5 = window.devicePixelRatio;
            //eslint-disable-next-line
            var c = document.getElementById('arrow5');
            //eslint-disable-next-line
            var ctx = c.getContext("2d");
            var style_height5 = getComputedStyle(c).getPropertyValue("height").slice(0, -2);
            //get CSS width
            var style_width5 = getComputedStyle(c).getPropertyValue("width").slice(0, -2);
            //scale the canvas
            c.setAttribute('height', style_height5 * dpi5);
            c.setAttribute('width', style_width5 * dpi5);
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.moveTo(257, 410);
            ctx.lineTo(40, 410);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.moveTo(40, 413);
            ctx.lineTo(40, 50);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.arc(40, 45, 8, 0, 2 * Math.PI);
            ctx.stroke();
            return c;
        case 6:
            var dpi6 = window.devicePixelRatio;
            //eslint-disable-next-line
            var c = document.getElementById('arrow6');
            //eslint-disable-next-line
            var ctx = c.getContext("2d");
            var style_height6 = getComputedStyle(c).getPropertyValue("height").slice(0, -2);
            //get CSS width
            let style_width6 = getComputedStyle(c).getPropertyValue("width").slice(0, -2);
            //scale the canvas
            c.setAttribute('height', style_height6 * dpi6);
            c.setAttribute('width', style_width6 * dpi6);
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.moveTo(96, 130);
            ctx.lineTo(40, 130);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 7;
            ctx.moveTo(40, 133);
            ctx.lineTo(40, 20);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.moveTo(36, 20);
            ctx.lineTo(100, 20);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.arc(105, 20, 8, 0, 2 * Math.PI);
            ctx.stroke();
            return c;
        case 7:
            var dpi7 = window.devicePixelRatio;
            //eslint-disable-next-line
            var c = document.getElementById('arrow7');
            //eslint-disable-next-line
            var ctx = c.getContext("2d");
            var style_height7 = getComputedStyle(c).getPropertyValue("height").slice(0, -2);
            //get CSS width
            let style_width7 = getComputedStyle(c).getPropertyValue("width").slice(0, -2);
            //scale the canvas
            c.setAttribute('height', style_height7 * dpi7);
            c.setAttribute('width', style_width7 * dpi7);
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.moveTo(66, 250);
            ctx.lineTo(40, 250);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 7;
            ctx.moveTo(40, 253);
            ctx.lineTo(40, 20);
            ctx.stroke();
            
            // ctx.beginPath();
            // ctx.lineWidth = 6;
            // ctx.moveTo(36, 20);
            // ctx.lineTo(100, 20);
            // ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.arc(40, 15, 8, 0, 2 * Math.PI);
            ctx.stroke();
            return c;
        default:
            console.log('sem ID')
      }


    
    
}


