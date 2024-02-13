export default function makeArrow (id){
    switch (id) {
        case 1:
            let dpi1 = window.devicePixelRatio;
            //eslint-disable-next-line
            var c = document.getElementById('arrow1');
            //eslint-disable-next-line
            var ctx = c.getContext("2d");
            let style_height1 = getComputedStyle(c).getPropertyValue("height").slice(0, -2);
            //get CSS width
            let style_width1 = getComputedStyle(c).getPropertyValue("width").slice(0, -2);
            //scale the c
            c.setAttribute('height', style_height1 * dpi1);
            c.setAttribute('width', style_width1 * dpi1);
            ctx.beginPath();
            ctx.lineWidth = 8;
            ctx.moveTo(10, 0);
            ctx.lineTo(10, 100);        
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 8;
            ctx.moveTo(6, 100);
            ctx.lineTo(380, 100);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 8;
            ctx.moveTo(380, 104);
            ctx.lineTo(380, 70);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.arc(380, 65, 8, 0, 2 * Math.PI);
            ctx.stroke();

            //inner line
            let dpiLine1 = window.devicePixelRatio;
            //eslint-disable-next-line
            var c = document.getElementById('arrow-line1');
            //eslint-disable-next-line
            var ctxLine = c.getContext("2d");
            let style_height_line1 = getComputedStyle(c).getPropertyValue("height").slice(0, -2);
            //get CSS width
            let style_width_line1 = getComputedStyle(c).getPropertyValue("width").slice(0, -2);
            //scale the c
            c.setAttribute('height', style_height_line1 * dpiLine1);
            c.setAttribute('width', style_width_line1 * dpiLine1);
            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.moveTo(10, 0);
            ctxLine.lineTo(10, 99);
            ctxLine.strokeStyle = '#9FB6B6';
            ctxLine.stroke();

            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.moveTo(9, 100);
            ctxLine.lineTo(379, 100);
            ctxLine.stroke();

            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.moveTo(380, 101);
            ctxLine.lineTo(380, 74);
            ctxLine.stroke();

            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.arc(380, 65, 8, 0, 2 * Math.PI);
            ctxLine.stroke();
            return c;
        case 2:
            let dpi2 = window.devicePixelRatio;
            //eslint-disable-next-line
            var c = document.getElementById('arrow2');
            //eslint-disable-next-line
            var ctx = c.getContext("2d");
            let style_height2 = getComputedStyle(c).getPropertyValue("height").slice(0, -2);
            //get CSS width
            let style_width2 = getComputedStyle(c).getPropertyValue("width").slice(0, -2);
            //scale the c
            c.setAttribute('height', style_height2 * dpi2);
            c.setAttribute('width', style_width2 * dpi2);
            ctx.beginPath();
            ctx.lineWidth = 8;
            ctx.moveTo(10, 345);
            ctx.lineTo(10, 145);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 8;
            ctx.moveTo(6, 145);
            ctx.lineTo(400, 145);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 8;
            ctx.moveTo(400, 149);
            ctx.lineTo(400, 35);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.arc(400, 30, 8, 0, 2 * Math.PI);
            ctx.stroke();

            //inner line
            let dpiLine2 = window.devicePixelRatio;
            //eslint-disable-next-line
            var c = document.getElementById('arrow-line2');
            //eslint-disable-next-line
            var ctxLine = c.getContext("2d");
            let style_height_line2 = getComputedStyle(c).getPropertyValue("height").slice(0, -2);
            //get CSS width
            let style_width_line2 = getComputedStyle(c).getPropertyValue("width").slice(0, -2);
            //scale the c
            c.setAttribute('height', style_height_line2 * dpiLine2);
            c.setAttribute('width', style_width_line2 * dpiLine2);
            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.moveTo(10, 345);
            ctxLine.lineTo(10, 144);
            ctxLine.strokeStyle = '#9FB6B6';
            ctxLine.stroke();

            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.moveTo(11, 145);
            ctxLine.lineTo(399, 145);
            ctxLine.stroke();

            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.moveTo(400, 146);
            ctxLine.lineTo(400, 39);
            ctxLine.stroke();

            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.arc(400, 30, 8, 0, 2 * Math.PI);
            ctxLine.stroke();
            return c;
        case 3:
            let dpi3 = window.devicePixelRatio;
            //eslint-disable-next-line
            var c = document.getElementById('arrow3');
            //eslint-disable-next-line
            var ctx = c.getContext("2d");
            let style_height3 = getComputedStyle(c).getPropertyValue("height").slice(0, -2);
            //get CSS width
            let style_width3 = getComputedStyle(c).getPropertyValue("width").slice(0, -2);
            //scale the c
            c.setAttribute('height', style_height3 * dpi3);
            c.setAttribute('width', style_width3 * dpi3);
            ctx.beginPath();
            ctx.lineWidth = 8;
            ctx.moveTo(10, 0);
            ctx.lineTo(10, 145);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 8;
            ctx.moveTo(6, 145);
            ctx.lineTo(220, 145);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.arc(225, 145, 8, 0, 2 * Math.PI);
            ctx.stroke();

            //inner line
            let dpiLine3 = window.devicePixelRatio;
            //eslint-disable-next-line
            var c = document.getElementById('arrow-line3');
            //eslint-disable-next-line
            var ctxLine = c.getContext("2d");
            let style_height_line3 = getComputedStyle(c).getPropertyValue("height").slice(0, -2);
            //get CSS width
            let style_width_line3 = getComputedStyle(c).getPropertyValue("width").slice(0, -2);
            //scale the c
            c.setAttribute('height', style_height_line3 * dpiLine3);
            c.setAttribute('width', style_width_line3 * dpiLine3);
            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.moveTo(10, 0);
            ctxLine.lineTo(10, 144);
            ctxLine.strokeStyle = '#9FB6B6';
            ctxLine.stroke();

            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.moveTo(9, 145);
            ctxLine.lineTo(216, 145);
            ctxLine.stroke();

            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.arc(225, 145, 8, 0, 2 * Math.PI);
            ctxLine.stroke();
            return c;
        case 4:
            var dpi4 = window.devicePixelRatio;
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
            ctx.lineWidth = 8;
            ctx.moveTo(45, 410);
            ctx.lineTo(45, 35);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 8;
            ctx.moveTo(41, 35);
            ctx.lineTo(165, 35);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth = 8;
            ctx.arc(170, 35, 8, 0, 2 * Math.PI);
            ctx.stroke();

            //inner line
            let dpiLine4 = window.devicePixelRatio;
            //eslint-disable-next-line
            var c = document.getElementById('arrow-line4');
            //eslint-disable-next-line
            var ctxLine = c.getContext("2d");
            let style_height_line4 = getComputedStyle(c).getPropertyValue("height").slice(0, -2);
            //get CSS width
            let style_width_line4 = getComputedStyle(c).getPropertyValue("width").slice(0, -2);
            //scale the c
            c.setAttribute('height', style_height_line4 * dpiLine4);
            c.setAttribute('width', style_width_line4 * dpiLine4);
            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.moveTo(45, 410);
            ctxLine.lineTo(45, 34);
            ctxLine.strokeStyle = '#9FB6B6';
            ctxLine.stroke();

            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.moveTo(46, 35);
            ctxLine.lineTo(161, 35);
            ctxLine.stroke();

            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.arc(170, 35, 8, 0, 2 * Math.PI);
            ctxLine.stroke();
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
            ctx.lineWidth = 8;
            ctx.moveTo(305, 410);
            ctx.lineTo(305, 310);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 8;
            ctx.moveTo(309, 310);
            ctx.lineTo(30, 310);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth = 8;
            ctx.moveTo(30, 314);
            ctx.lineTo(30, 20);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.arc(30, 15, 8, 0, 2 * Math.PI);
            ctx.stroke();

            //inner line
            let dpiLine5 = window.devicePixelRatio;
            //eslint-disable-next-line
            var c = document.getElementById('arrow-line5');
            //eslint-disable-next-line
            var ctxLine = c.getContext("2d");
            let style_height_line5 = getComputedStyle(c).getPropertyValue("height").slice(0, -2);
            //get CSS width
            let style_width_line5 = getComputedStyle(c).getPropertyValue("width").slice(0, -2);
            //scale the c
            c.setAttribute('height', style_height_line5 * dpiLine5);
            c.setAttribute('width', style_width_line5 * dpiLine5);
            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.moveTo(305, 410);
            ctxLine.lineTo(305, 311);
            ctxLine.strokeStyle = '#9FB6B6';
            ctxLine.stroke();

            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.moveTo(306, 310);
            ctxLine.lineTo(31, 310);
            ctxLine.stroke();

            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.moveTo(30, 311);
            ctxLine.lineTo(30, 24);
            ctxLine.stroke();

            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.arc(30, 15, 8, 0, 2 * Math.PI);
            ctxLine.stroke();
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
            ctx.lineWidth = 8;
            ctx.moveTo(145, 200);
            ctx.lineTo(145, 60);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 8;
            ctx.moveTo(149, 60);
            ctx.lineTo(40, 60);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.arc(35, 60, 8, 0, 2 * Math.PI);
            ctx.stroke();

            //inner line
            let dpiLine6 = window.devicePixelRatio;
            //eslint-disable-next-line
            var c = document.getElementById('arrow-line6');
            //eslint-disable-next-line
            var ctxLine = c.getContext("2d");
            let style_height_line6 = getComputedStyle(c).getPropertyValue("height").slice(0, -2);
            //get CSS width
            let style_width_line6 = getComputedStyle(c).getPropertyValue("width").slice(0, -2);
            //scale the c
            c.setAttribute('height', style_height_line6 * dpiLine6);
            c.setAttribute('width', style_width_line6 * dpiLine6);
            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.moveTo(145, 200);
            ctxLine.lineTo(145, 61);
            ctxLine.strokeStyle = '#9FB6B6';
            ctxLine.stroke();

            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.moveTo(146, 60);
            ctxLine.lineTo(44, 60);
            ctxLine.stroke();

            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.arc(35, 60, 8, 0, 2 * Math.PI);
            ctxLine.stroke();
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
            ctx.lineWidth = 8;
            ctx.moveTo(315, 265);
            ctx.lineTo(315, 30);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 8;
            ctx.moveTo(319, 30);
            ctx.lineTo(60, 30);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.arc(55, 30, 8, 0, 2 * Math.PI);
            ctx.stroke();

            //inner line
            let dpiLine7 = window.devicePixelRatio;
            //eslint-disable-next-line
            var c = document.getElementById('arrow-line7');
            //eslint-disable-next-line
            var ctxLine = c.getContext("2d");
            let style_height_line7 = getComputedStyle(c).getPropertyValue("height").slice(0, -2);
            //get CSS width
            let style_width_line7 = getComputedStyle(c).getPropertyValue("width").slice(0, -2);
            //scale the c
            c.setAttribute('height', style_height_line7 * dpiLine7);
            c.setAttribute('width', style_width_line7 * dpiLine7);
            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.moveTo(315, 265);
            ctxLine.lineTo(315, 29);
            ctxLine.strokeStyle = '#9FB6B6';
            ctxLine.stroke();

            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.moveTo(314, 30);
            ctxLine.lineTo(64, 30);
            ctxLine.stroke();

            ctxLine.beginPath();
            ctxLine.lineWidth = 1;
            ctxLine.arc(55, 30, 8, 0, 2 * Math.PI);
            ctxLine.stroke();
            return c;
        default:
            console.log('sem ID')
      }


    
    
}


