import React,{useState} from "react"
import loader from '../assets/circle3.png';

const ProgressBar = (props) => {
    const [porcent, setPorcent] = useState(0);

    const handlerIncrent =()=>{
        if (porcent<100){
            setPorcent(porcent+2)
        }

    }
    const handlerDecrement =()=>{
        if (porcent>0){
            setPorcent(porcent-2)
        }

    }
    return(

<div className="wrapper">
  <svg height={110} width={310} xmlns="http://www.w3.org/2000/svg" {...props}>

    <defs>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path d="M3423.05 3695.02h-3.31c-64.71.46-123.26 26.87-165.73 69.34-42.84 42.84-69.34 102.03-69.34 167.41s26.5 124.57 69.34 167.41c42.64 42.65 101.48 69.1 166.49 69.35h.93c65.38 0 124.57-26.5 167.41-69.35 42.84-42.84 69.34-102.03 69.34-167.41s-26.5-124.57-69.34-167.41c-43.79-43.79-103.92-68.9-165.79-69.34" />
      </clipPath>
      <clipPath id="c" clipPathUnits="userSpaceOnUse">
        <path d="M4649.05 3773.78h214.008v23.121H4649.05Z" />
      </clipPath>
      <clipPath id="e" clipPathUnits="userSpaceOnUse">
        <path d="M3943.25 3835.75c-3.8 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.06 6.87 6.86 6.87 3.79 0 6.87-3.07 6.87-6.87v-194.72c0-3.79-3.08-6.86-6.87-6.86" />
      </clipPath>
      <clipPath id="i" clipPathUnits="userSpaceOnUse">
        <path d="M4016.97 3835.75a6.85 6.85 0 0 0-6.85 6.86v194.72c0 3.8 3.06 6.87 6.85 6.87 3.8 0 6.87-3.07 6.87-6.87v-194.72a6.86 6.86 0 0 0-6.87-6.86" />
      </clipPath>
      <clipPath id="k" clipPathUnits="userSpaceOnUse">
        <path d="M4041.55 3835.75c-3.8 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.06 6.87 6.86 6.87 3.79 0 6.87-3.07 6.87-6.87v-194.72c0-3.79-3.08-6.86-6.87-6.86" />
      </clipPath>
      <clipPath id="m" clipPathUnits="userSpaceOnUse">
        <path d="M4066.12 3835.75c-3.8 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.06 6.87 6.86 6.87 3.79 0 6.87-3.07 6.87-6.87v-194.72c0-3.79-3.08-6.86-6.87-6.86" />
      </clipPath>
      <clipPath id="o" clipPathUnits="userSpaceOnUse">
        <path d="M4090.7 3835.75c-3.8 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.06 6.87 6.86 6.87a6.86 6.86 0 0 0 6.86-6.87v-194.72c0-3.79-3.07-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="q" clipPathUnits="userSpaceOnUse">
        <path d="M4115.27 3835.75a6.85 6.85 0 0 0-6.85 6.86v194.72c0 3.8 3.06 6.87 6.85 6.87 3.8 0 6.87-3.07 6.87-6.87v-194.72a6.86 6.86 0 0 0-6.87-6.86" />
      </clipPath>
      <clipPath id="s" clipPathUnits="userSpaceOnUse">
        <path d="M4139.84 3835.75a6.85 6.85 0 0 0-6.85 6.86v194.72c0 3.8 3.06 6.87 6.85 6.87 3.8 0 6.87-3.07 6.87-6.87v-194.72a6.86 6.86 0 0 0-6.87-6.86" />
      </clipPath>
      <clipPath id="u" clipPathUnits="userSpaceOnUse">
        <path d="M4164.42 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.07 6.87 6.86 6.87 3.79 0 6.87-3.07 6.87-6.87v-194.72c0-3.79-3.08-6.86-6.87-6.86" />
      </clipPath>
      <clipPath id="w" clipPathUnits="userSpaceOnUse">
        <path d="M4189 3835.75c-3.8 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.06 6.87 6.86 6.87a6.86 6.86 0 0 0 6.86-6.87v-194.72c0-3.79-3.07-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="y" clipPathUnits="userSpaceOnUse">
        <path d="M4213.57 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72a6.86 6.86 0 1 0 13.72 0v-194.72c0-3.79-3.07-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="A" clipPathUnits="userSpaceOnUse">
        <path d="M4238.14 3835.75a6.85 6.85 0 0 0-6.85 6.86v194.72c0 3.8 3.06 6.87 6.85 6.87 3.8 0 6.87-3.07 6.87-6.87v-194.72a6.86 6.86 0 0 0-6.87-6.86" />
      </clipPath>
      <clipPath id="C" clipPathUnits="userSpaceOnUse">
        <path d="M4262.71 3835.75c-3.78 0-6.85 3.07-6.85 6.86v194.72c0 3.8 3.07 6.87 6.85 6.87 3.8 0 6.87-3.07 6.87-6.87v-194.72a6.86 6.86 0 0 0-6.87-6.86" />
      </clipPath>
      <clipPath id="E" clipPathUnits="userSpaceOnUse">
        <path d="M4287.29 3835.75c-3.78 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.08 6.87 6.86 6.87 3.79 0 6.87-3.07 6.87-6.87v-194.72c0-3.79-3.08-6.86-6.87-6.86" />
      </clipPath>
      <clipPath id="G" clipPathUnits="userSpaceOnUse">
        <path d="M4311.88 3835.75a6.86 6.86 0 0 0-6.87 6.86v194.72c0 3.8 3.07 6.87 6.87 6.87 3.78 0 6.85-3.07 6.85-6.87v-194.72c0-3.79-3.07-6.86-6.85-6.86" />
      </clipPath>
      <clipPath id="I" clipPathUnits="userSpaceOnUse">
        <path d="M4336.45 3835.75a6.86 6.86 0 0 0-6.87 6.86v194.72c0 3.8 3.07 6.87 6.87 6.87 3.78 0 6.85-3.07 6.85-6.87v-194.72c0-3.79-3.07-6.86-6.85-6.86" />
      </clipPath>
      <clipPath id="K" clipPathUnits="userSpaceOnUse">
        <path d="M4361.02 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72a6.86 6.86 0 1 0 13.72 0v-194.72c0-3.79-3.07-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="M" clipPathUnits="userSpaceOnUse">
        <path d="M4385.6 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.78 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.08-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="O" clipPathUnits="userSpaceOnUse">
        <path d="M4410.17 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87a6.86 6.86 0 0 0 6.86-6.87v-194.72c0-3.79-3.07-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="Q" clipPathUnits="userSpaceOnUse">
        <path d="M4434.75 3835.75a6.86 6.86 0 0 0-6.87 6.86v194.72c0 3.8 3.07 6.87 6.87 6.87 3.78 0 6.85-3.07 6.85-6.87v-194.72c0-3.79-3.07-6.86-6.85-6.86" />
      </clipPath>
      <clipPath id="S" clipPathUnits="userSpaceOnUse">
        <path d="M4459.32 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72a6.86 6.86 0 1 0 13.72 0v-194.72c0-3.79-3.07-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="U" clipPathUnits="userSpaceOnUse">
        <path d="M4483.89 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72a6.86 6.86 0 1 0 13.72 0v-194.72c0-3.79-3.07-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="W" clipPathUnits="userSpaceOnUse">
        <path d="M4508.47 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="Y" clipPathUnits="userSpaceOnUse">
        <path d="M4533.05 3835.75a6.86 6.86 0 0 0-6.87 6.86v194.72c0 3.8 3.07 6.87 6.87 6.87 3.79 0 6.85-3.07 6.85-6.87v-194.72a6.85 6.85 0 0 0-6.85-6.86" />
      </clipPath>
      <clipPath id="aa" clipPathUnits="userSpaceOnUse">
        <path d="M4557.62 3835.75a6.86 6.86 0 0 0-6.87 6.86v194.72c0 3.8 3.07 6.87 6.87 6.87 3.79 0 6.85-3.07 6.85-6.87v-194.72a6.85 6.85 0 0 0-6.85-6.86" />
      </clipPath>
      <clipPath id="ac" clipPathUnits="userSpaceOnUse">
        <path d="M4582.19 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.07 6.87 6.86 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="ae" clipPathUnits="userSpaceOnUse">
        <path d="M4606.77 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="ag" clipPathUnits="userSpaceOnUse">
        <path d="M4631.34 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="ai" clipPathUnits="userSpaceOnUse">
        <path d="M4655.92 3835.75a6.86 6.86 0 0 0-6.87 6.86v194.72c0 3.8 3.07 6.87 6.87 6.87 3.79 0 6.85-3.07 6.85-6.87v-194.72a6.85 6.85 0 0 0-6.85-6.86" />
      </clipPath>
      <clipPath id="ak" clipPathUnits="userSpaceOnUse">
        <path d="M4680.49 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.07 6.87 6.86 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="am" clipPathUnits="userSpaceOnUse">
        <path d="M4705.06 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.07 6.87 6.86 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="ao" clipPathUnits="userSpaceOnUse">
        <path d="M4729.64 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="aq" clipPathUnits="userSpaceOnUse">
        <path d="M4754.22 3835.75a6.86 6.86 0 0 0-6.87 6.86v194.72c0 3.8 3.07 6.87 6.87 6.87 3.79 0 6.85-3.07 6.85-6.87v-194.72a6.85 6.85 0 0 0-6.85-6.86" />
      </clipPath>
      <clipPath id="as" clipPathUnits="userSpaceOnUse">
        <path d="M4778.79 3835.75a6.86 6.86 0 0 0-6.87 6.86v194.72c0 3.8 3.07 6.87 6.87 6.87a6.86 6.86 0 0 0 6.86-6.87v-194.72c0-3.79-3.07-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="au" clipPathUnits="userSpaceOnUse">
        <path d="M4803.36 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.07 6.87 6.86 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="aw" clipPathUnits="userSpaceOnUse">
        <path d="M4827.93 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.07 6.87 6.86 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="ay" clipPathUnits="userSpaceOnUse">
        <path d="M4852.51 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86" />
      </clipPath>
      <clipPath id="aA" clipPathUnits="userSpaceOnUse">
        <path d="M5201.66 4066.93H3856.43v114.67h1065.85c24.49-24.49 39.56-39.57 61.71-61.72h164.71l52.96-52.95m-1194.71 82.26c-4.66-7.82-6.01-14.73-6.48-19.2-.29-2.26-.25-3.97-.25-5.1v-1.7c.6-14.95 9.01-29.32 21.81-37.1l.18-.1c7.18-4.37 15.6-6.72 24.02-6.72.63 0 1.26.01 1.89.03 14.95.6 29.31 9.01 37.09 21.83l.11.16c4.69 7.73 7.06 16.87 6.67 25.91-.58 14.95-8.99 29.32-21.8 37.1l-.17.1c-6.66 3.99-14.35 6.4-22.13 6.67-1.27 0-2.53.01-3.79.02 0 0-.93-.09-2.79-.25-1.86-.16-4.65-.57-8.22-1.65-7.01-1.97-18.06-7.21-26.14-20m151.16-52.25c-.8-2.61-1.19-3.92-1.19-3.92-.4-1.31-.8-2.61-1.19-3.92-.4-1.31-.8-2.62-1.19-3.93 0 0-.4-1.31-1.19-3.92 3-.8 5.25-1.32 6.81-1.47l2.31-.33c1.33-.11 2.67-.17 4.01-.17 9.13 0 18.22 2.73 25.8 7.79 8.69 5.81 15.24 14.73 18.32 24.7l.05.19c.85 2.95 1.45 5.95 1.77 9.02.94 10.45-1.81 21.11-7.61 29.81-5.81 8.69-14.73 15.24-24.69 18.32l-.2.06c-2.95.85-5.96 1.44-9.02 1.77-1.34.12-2.69.18-4.03.18-9.12 0-18.2-2.73-25.78-7.79-8.69-5.81-15.24-14.74-18.33-24.7l-.05-.19c-.85-2.95-1.44-5.96-1.76-9.03-.39-4.71-.09-9.46.9-14.07 0 0 .24-.98.75-2.95.57-1.94 1.55-4.83 3.39-8.44 3.65-6.94 11.64-17.72 27.36-22.7.79 2.61 1.19 3.92 1.19 3.92.39 1.31.79 2.62 1.19 3.93.39 1.31.79 2.61 1.19 3.92 0 0 .39 1.31 1.19 3.92-10.12 3.24-15.2 10.11-17.58 14.6-2.34 4.69-2.67 7.33-2.67 7.33-.62 2.97-.81 6-.59 9.02.23 1.97.61 3.9 1.15 5.82l.04.12c2.02 6.43 6.17 12.11 11.76 15.87a30.316 30.316 0 0 0 19.16 4.91c1.97-.23 3.9-.61 5.82-1.15l.11-.03c6.44-2.03 12.11-6.17 15.88-11.78 3.73-5.61 5.48-12.47 4.9-19.15-.22-1.96-.6-3.9-1.14-5.82l-.04-.12c-2.02-6.43-6.17-12.11-11.78-15.87-4.91-3.27-10.77-5.01-16.64-5.01-.84 0-1.67.03-2.51.11 0 0-.48.07-1.47.22-1.01.08-2.45.45-4.4.93m-232.93-17.65c1.25.03 2.52.07 3.77.1 0 0 .93.11 2.79.34 1.84.22 4.63.71 8.17 1.89 6.94 2.19 17.82 7.77 25.51 20.8 4.4 7.96 5.56 14.9 5.89 19.38.21 2.27.12 3.98.09 5.11l-.06 1.7c-1.06 14.93-9.9 29.03-22.94 36.41l-.18.1c-6.91 3.92-14.86 6-22.82 6-1.1 0-2.19-.04-3.28-.12-14.92-1.05-29.02-9.9-36.41-22.95l-.1-.16c-4.45-7.87-6.54-17.08-5.87-26.11 1.05-14.92 9.89-29.03 22.94-36.41l.17-.1c6.77-3.78 14.53-5.95 22.33-5.98m121.07 16.38c-5.45 0-10.82 1.49-15.51 4.32l-.1.07c-8.26 5.03-13.61 14.2-14.03 23.86.01-.01.01-.01.02-.01.34 0-1.41 6.47 4.31 16.71 5.23 8.22 12.25 11.59 16.79 12.84 2.31.7 4.12.97 5.31 1.06l1.79.18 2.43-.02c5.02-.18 9.89-1.73 14.21-4.28l.11-.06c8.25-5.04 13.6-14.2 14.03-23.86.23-5.84-1.27-11.64-4.29-16.65l-.07-.11c-5.04-8.25-14.2-13.6-23.86-14.02-.38-.02-.76-.03-1.14-.03m-120.96.02c-5.01.02-9.94 1.43-14.33 3.84l-.12.06c-8.4 4.78-14.03 13.78-14.75 23.42-.41 5.83.92 11.66 3.78 16.77l.06.11c4.79 8.4 13.78 14.04 23.42 14.75a30.177 30.177 0 0 0 16.78-3.77l.1-.07c8.4-4.78 14.04-13.78 14.76-23.42l-.01.01c-.36 0 1.59-6.42-3.81-16.84-4.98-8.37-11.88-11.96-16.4-13.35-2.27-.77-4.07-1.09-5.26-1.22-1.19-.16-1.79-.23-1.79-.23l-2.43-.06" />
      </clipPath>
      <clipPath id="aC" clipPathUnits="userSpaceOnUse">
        <path d="M3925.18 4079.29c-7.8.03-15.56 2.2-22.33 5.98l-.17.1c-13.05 7.38-21.89 21.49-22.94 36.41-.67 9.03 1.42 18.24 5.87 26.11l.1.16c7.39 13.05 21.49 21.9 36.41 22.95 1.09.08 2.18.12 3.28.12 7.96 0 15.91-2.08 22.82-6l.18-.1c13.04-7.38 21.88-21.48 22.94-36.41l.06-1.7c.03-1.13.12-2.84-.09-5.11-.33-4.48-1.49-11.42-5.89-19.38-7.69-13.03-18.57-18.61-25.51-20.8-3.54-1.18-6.33-1.67-8.17-1.89-1.86-.23-2.79-.34-2.79-.34-1.25-.03-2.52-.07-3.77-.1m.24 75.42c-.69 0-1.38-.02-2.07-.07-9.64-.71-18.63-6.35-23.42-14.75l-.06-.11c-2.86-5.11-4.19-10.94-3.78-16.77.72-9.64 6.35-18.64 14.75-23.42l.12-.06c4.39-2.41 9.32-3.82 14.33-3.84l2.43.06s.6.07 1.79.23c1.19.13 2.99.45 5.26 1.22 4.52 1.39 11.42 4.98 16.4 13.35 5.4 10.42 3.45 16.84 3.81 16.84l.01-.01c-.72 9.64-6.36 18.64-14.76 23.42l-.1.07a30.177 30.177 0 0 1-14.71 3.84" />
      </clipPath>
      <clipPath id="aD" clipPathUnits="userSpaceOnUse">
        <path d="M4046.23 4079.27c-8.42 0-16.84 2.35-24.02 6.72l-.18.1c-12.8 7.78-21.21 22.15-21.81 37.1v1.7c0 1.13-.04 2.84.25 5.1.47 4.47 1.82 11.38 6.48 19.2 8.08 12.79 19.13 18.03 26.14 20 3.57 1.08 6.36 1.49 8.22 1.65 1.86.16 2.79.25 2.79.25 1.26-.01 2.52-.02 3.79-.02 7.78-.27 15.47-2.68 22.13-6.67l.17-.1c12.81-7.78 21.22-22.15 21.8-37.1.39-9.04-1.98-18.18-6.67-25.91l-.11-.16c-7.78-12.82-22.14-21.23-37.09-21.83-.63-.02-1.26-.03-1.89-.03m-29.62 44.65c.42-9.66 5.77-18.83 14.03-23.86l.1-.07a30.038 30.038 0 0 1 15.51-4.32c.38 0 .76.01 1.14.03 9.66.42 18.82 5.77 23.86 14.02l.07.11a30.007 30.007 0 0 1 4.29 16.65c-.43 9.66-5.78 18.82-14.03 23.86l-.11.06c-4.32 2.55-9.19 4.1-14.21 4.28l-2.43.02-1.79-.18c-1.19-.09-3-.36-5.31-1.06-4.54-1.25-11.56-4.62-16.79-12.84-5.72-10.24-3.97-16.71-4.31-16.71-.01 0-.01 0-.02.01" />
      </clipPath>
      <clipPath id="aE" clipPathUnits="userSpaceOnUse">
        <path d="M4166.48 4079.28c-1.34 0-2.68.06-4.01.17l-2.31.33c-1.56.15-3.81.67-6.81 1.47.79 2.61 1.19 3.92 1.19 3.92.39 1.31.79 2.62 1.19 3.93.39 1.31.79 2.61 1.19 3.92 0 0 .39 1.31 1.19 3.92 1.95-.48 3.39-.85 4.4-.93.99-.15 1.47-.22 1.47-.22.84-.08 1.67-.11 2.51-.11 5.87 0 11.73 1.74 16.64 5.01 5.61 3.76 9.76 9.44 11.78 15.87l.04.12c.54 1.92.92 3.86 1.14 5.82.58 6.68-1.17 13.54-4.9 19.15-3.77 5.61-9.44 9.75-15.88 11.78l-.11.03c-1.92.54-3.85.92-5.82 1.15a30.316 30.316 0 0 1-19.16-4.91c-5.59-3.76-9.74-9.44-11.76-15.87l-.04-.12c-.54-1.92-.92-3.85-1.15-5.82-.22-3.02-.03-6.05.59-9.02 0 0 .33-2.64 2.67-7.33 2.38-4.49 7.46-11.36 17.58-14.6-.8-2.61-1.19-3.92-1.19-3.92-.4-1.31-.8-2.61-1.19-3.92-.4-1.31-.8-2.62-1.19-3.93 0 0-.4-1.31-1.19-3.92-15.72 4.98-23.71 15.76-27.36 22.7-1.84 3.61-2.82 6.5-3.39 8.44-.51 1.97-.75 2.95-.75 2.95-.99 4.61-1.29 9.36-.9 14.07.32 3.07.91 6.08 1.76 9.03l.05.19c3.09 9.96 9.64 18.89 18.33 24.7 7.58 5.06 16.66 7.79 25.78 7.79 1.34 0 2.69-.06 4.03-.18 3.06-.33 6.07-.92 9.02-1.77l.2-.06c9.96-3.08 18.88-9.63 24.69-18.32 5.8-8.7 8.55-19.36 7.61-29.81-.32-3.07-.92-6.07-1.77-9.02l-.05-.19c-3.08-9.97-9.63-18.89-18.32-24.7-7.58-5.06-16.67-7.79-25.8-7.79" />
      </clipPath>
      <clipPath id="aF" clipPathUnits="userSpaceOnUse">
        <path d="M3774.16 1117.98h500.27v22.969h-500.27z" />
      </clipPath>
      <clipPath id="aG" clipPathUnits="userSpaceOnUse">
        <path d="M3774.16 1078.39h299.262v22.969H3774.16Z" />
      </clipPath>
      <clipPath id="aH" clipPathUnits="userSpaceOnUse">
        <path d="M3774.16 1038.8h364.789v22.969H3774.16Z" />
      </clipPath>
      <clipPath id="aI" clipPathUnits="userSpaceOnUse">
        <path d="M3794.86 1316.87h33.93v18.16h-33.93Z" />
      </clipPath>
      <clipPath id="aJ" clipPathUnits="userSpaceOnUse">
        <path d="M3154.55 2895.43h-1.14c-42.96.17-81.84 17.65-110.01 45.83-28.31 28.3-45.82 67.43-45.82 110.63 0 43.2 17.51 82.31 45.82 110.62 28.17 28.18 67.05 45.66 110.01 45.82h.61c43.21 0 82.32-17.51 110.64-45.82 27.92-27.93 45.34-66.36 45.81-108.87v-3.5c-.47-42.51-17.89-80.96-45.81-108.88-29.07-29.06-69.03-45.68-110.11-45.83" />
      </clipPath>
      <clipPath id="aK" clipPathUnits="userSpaceOnUse">
        <path d="M3154.91 2710.73h-3.07c-43.9.33-87.82 9.12-128.41 25.99-41.27 17.08-79.07 42.38-110.65 73.92-31.54 31.58-56.83 69.37-73.91 110.64-17.14 41.25-25.94 85.92-26.01 130.51v.18c.07 44.6 8.87 89.28 26.01 130.52 17.08 41.27 42.37 79.06 73.91 110.64 31.58 31.54 69.38 56.84 110.65 73.92 41.24 17.14 85.91 25.93 130.51 26h.17l33.42-1.68c21.92-3.21 55.81-6.78 97.12-24.33 41.29-16.63 89.72-47.59 133.1-98.76 20.99-26.06 40.18-57.29 54.35-93.71 13.95-35.82 22.75-76.8 23.08-120.7v-2.84c-.73-59.99-16.15-111.58-36.26-151.64-20.29-40.5-44.97-69.6-66.06-90.96-21.78-20.84-40.24-34.02-52.78-42.31-12.87-7.82-19.31-11.73-19.31-11.73-50.36-28.42-108.2-42.91-165.86-43.66m-.96 641.32c-39.34-.08-78.55-7.82-114.81-22.87-36.28-15.02-69.55-37.28-97.36-65.04-27.78-27.82-50.03-61.09-65.04-97.36-15.06-36.27-22.81-75.48-22.87-114.81v-.16c.06-39.34 7.81-78.55 22.87-114.82 15.01-36.27 37.26-69.54 65.04-97.35 27.81-27.77 61.08-50.04 97.36-65.04 36.26-15.05 75.47-22.81 114.81-22.88h.15c51.07.64 102.07 13.29 146.59 38.41 0 0 5.66 3.45 16.99 10.33 11.02 7.3 27.26 18.93 46.46 37.25 18.54 18.83 40.28 44.43 58.11 80.05 17.78 35.41 31.34 80.93 31.94 134.13-.09 39.38-7.89 75.96-20.34 107.92-12.46 32.01-29.34 59.47-47.79 82.45-38.26 44.97-80.8 72.33-117.12 86.91-36.29 15.49-66.12 18.46-85.4 21.39-19.62.99-29.44 1.49-29.44 1.49h-.15" />
      </clipPath>
      <clipPath id="aL" clipPathUnits="userSpaceOnUse">
        <path d="M3612.46 2983.98c-4.53 0-8.2 3.66-8.2 8.19v119.43c0 4.53 3.67 8.2 8.2 8.2 4.53 0 8.2-3.67 8.2-8.2v-119.43c0-4.53-3.67-8.19-8.2-8.19" />
      </clipPath>
      <clipPath id="aM" clipPathUnits="userSpaceOnUse">
        <path d="M3641.83 2983.98c-4.54 0-8.2 3.66-8.2 8.19v119.43c0 4.53 3.66 8.2 8.2 8.2 4.53 0 8.2-3.67 8.2-8.2v-119.43c0-4.53-3.67-8.19-8.2-8.19" />
      </clipPath>
      <clipPath id="aN" clipPathUnits="userSpaceOnUse">
        <path d="M3671.19 2983.98c-4.54 0-8.2 3.66-8.2 8.19v119.43c0 4.53 3.66 8.2 8.2 8.2 4.53 0 8.2-3.67 8.2-8.2v-119.43c0-4.53-3.67-8.19-8.2-8.19" />
      </clipPath>
      <clipPath id="aO" clipPathUnits="userSpaceOnUse">
        <path d="M3906.11 2983.98c-4.53 0-8.2 3.66-8.2 8.19v119.43c0 4.53 3.67 8.2 8.2 8.2 4.53 0 8.21-3.67 8.21-8.2v-119.43c0-4.53-3.68-8.19-8.21-8.19" />
      </clipPath>
      <clipPath id="aP" clipPathUnits="userSpaceOnUse">
        <path d="M4757.68 2983.98c-4.54 0-8.21 3.66-8.21 8.19v119.43c0 4.53 3.67 8.2 8.21 8.2 4.53 0 8.2-3.67 8.2-8.2v-119.43c0-4.53-3.67-8.19-8.2-8.19" />
      </clipPath>
      <clipPath id="aQ" clipPathUnits="userSpaceOnUse">
        <path d="M4787.04 2983.98c-4.53 0-8.19 3.66-8.19 8.19v119.43c0 4.53 3.66 8.2 8.19 8.2 4.54 0 8.2-3.67 8.2-8.2v-119.43c0-4.53-3.66-8.19-8.2-8.19" />
      </clipPath>
      <clipPath id="aR" clipPathUnits="userSpaceOnUse">
        <path d="M3604.26 2925.85h990.52v11.738h-990.52z" />
      </clipPath>
      <clipPath id="aS" clipPathUnits="userSpaceOnUse">
        <path d="M3604.26 2886.22H5042.6v11.73H3604.26Z" />
      </clipPath>
      <linearGradient
        id="b"
        spreadMethod="pad"
        gradientTransform="matrix(505.215 0 0 -505.215 4649.05 3785.34)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="d"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.45 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="f"
        spreadMethod="pad"
        gradientTransform="matrix(1112.45 0 0 -1112.45 3744.32 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="g"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.47 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="h"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.48 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="j"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.49 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="l"
        spreadMethod="pad"
        gradientTransform="matrix(1112.45 0 0 -1112.45 3744.29 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="n"
        spreadMethod="pad"
        gradientTransform="matrix(1112.45 0 0 -1112.45 3744.28 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="p"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.52 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="r"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.53 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="t"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.54 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="v"
        spreadMethod="pad"
        gradientTransform="matrix(1112.45 0 0 -1112.45 3744.25 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="x"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.55 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="z"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.56 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="B"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.58 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="D"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.59 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="F"
        spreadMethod="pad"
        gradientTransform="matrix(1112.45 0 0 -1112.45 3744.21 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="H"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.6 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="J"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.61 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="L"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.63 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="N"
        spreadMethod="pad"
        gradientTransform="matrix(1112.45 0 0 -1112.45 3744.18 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="P"
        spreadMethod="pad"
        gradientTransform="matrix(1112.45 0 0 -1112.45 3744.17 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="R"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.65 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="T"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.67 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="V"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.68 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="X"
        spreadMethod="pad"
        gradientTransform="matrix(1112.45 0 0 -1112.45 3744.14 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="Z"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.69 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="ab"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.7 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="ad"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.71 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="af"
        spreadMethod="pad"
        gradientTransform="matrix(1112.45 0 0 -1112.45 3744.1 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="ah"
        spreadMethod="pad"
        gradientTransform="matrix(1112.45 0 0 -1112.45 3744.1 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="aj"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.74 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="al"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.75 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="an"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.76 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="ap"
        spreadMethod="pad"
        gradientTransform="matrix(1112.45 0 0 -1112.45 3744.06 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="ar"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.78 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="at"
        spreadMethod="pad"
        gradientTransform="matrix(1112.45 0 0 -1112.45 3744.05 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="av"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.79 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      {/* elemento barra */}
      <linearGradient
        id="ax"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.8 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            // cambiar quando no esta lleno
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="az"
        spreadMethod="pad"
        gradientTransform="matrix(1112.45 0 0 -1112.45 3744.02 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="ba"
        spreadMethod="pad"
        gradientTransform="matrix(1112.45 0 0 -1112.45 3744.12 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="bb"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.8 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="bc"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.8 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="bd"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.8 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="be"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.8 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="bf"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.8 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="bg"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.8 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="bh"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.8 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="bi"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.8 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="bj"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.8 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="bk"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.8 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="bl"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.8 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="bm"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.8 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      <linearGradient
        id="bn"
        spreadMethod="pad"
        gradientTransform="matrix(1111.66 0 0 -1111.66 3744.8 3939.98)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#33fcff",
          }}
        />
      </linearGradient>
      {/* -------------------------------- */}
      <linearGradient
        id="aB"
        spreadMethod="pad"
        gradientTransform="matrix(1345.23 0 0 -1345.23 3856.43 4124.26)"
        gradientUnits="userSpaceOnUse"
        y2={0}
        x2={1}
        y1={0}
        x1={0}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={0.086}
          style={{
            stopOpacity: 1,
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#0a3233",
          }}
        />
      </linearGradient>
    </defs>
    <path
      style={{
        fill: "#000",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
        strokeWidth: 0.273259,
      }}
      d="M3.968 3694.444h2305.556v801.588H3.968Z"
      transform="matrix(.13333 0 0 -.13333 0 600)"
    />
    <path
      style={{
        fill: "#33fcff",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      d="M1586.793 3811.98h-780.62c-2.26 0-4.09 1.83-4.09 4.11 0 2.26 1.83 4.09 4.09 4.09h778.92l78.35 78.34c.77.77 1.81 1.2 2.9 1.2h512.42l83.36 83.36v232.69l-83.36 83.35h-163.01c-1.09 0-2.13.43-2.9 1.2l-60.52 60.5H806.173c-2.26 0-4.09 1.84-4.09 4.11 0 2.26 1.83 4.1 4.09 4.1h1147.86c1.1 0 2.13-.43 2.9-1.2l60.52-60.51h163.01c1.09 0 2.13-.44 2.9-1.2l85.76-85.76c.76-.77 1.2-1.81 1.2-2.9v-236.09c0-1.08-.44-2.12-1.2-2.89l-85.76-85.75a4.062 4.062 0 0 0-2.9-1.21h-512.42l-78.35-78.34c-.77-.77-1.81-1.2-2.9-1.2"
      transform="matrix(.13333 0 0 -.13333 0 600)"
    />
    <g
      clipPath="url(#a)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <image
        href="data:image/png;base64,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"
        transform="matrix(491.2 0 0 -486.2 3176.9 4174.1)"
        preserveAspectRatio="none"
        style={{
          imageRendering: "optimizeSpeed",
        }}
        height={1}
        width={1}
      />
    </g>
    <path
      style={{
        fill: "#33fcff",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      d="M877.993 3944.45h17.81v-60.63h64.97v-16.74h-82.78v77.37M988.553 3883.82h46.91v43.79h-46.91zm47.95 60.53c9.31 0 17.01-7.09 17.01-15.89v-45.5c0-8.8-7.7-15.88-17.01-15.88h-48.75c-9.44 0-17.03 7.08-17.03 15.88v45.5c0 8.8 7.59 15.89 17.03 15.89h48.75M1131.553 3908.71v18.9h-46.91v-18.9zm.92 35.64c9.43 0 17.13-7.09 17.13-15.89v-61.38h-18.05v24.89h-46.91v-24.89h-17.82v61.38c0 8.8 7.59 15.89 17.01 15.89h48.64M1181.183 3883.82h46.93v43.79h-46.93zm47.84 60.53c9.43 0 17.13-7.09 17.13-15.89v-45.5c0-8.8-7.7-15.88-17.13-15.88h-65.65v77.27h65.65M1259.623 3944.35h17.94v-77.27h-17.94v77.27M1352.753 3944.35h18.04v-77.27h-18.4l-46.57 51.73v-51.73h-17.81v77.27h18.39l46.35-51.52v51.52M1466.953 3921.17h-18.04v6.44h-46.93v-43.79h46.93v11.59h-17.95v16.74h35.99v-29.19c0-8.8-7.7-15.88-17.12-15.88h-48.65c-9.42 0-17.01 7.08-17.01 15.88v45.5c0 8.8 7.59 15.89 17.01 15.89h48.65c9.42 0 17.12-7.09 17.12-15.89v-7.29M1497.553 3867.08h-17.6v16.42h17.6v-16.42M1526.653 3867.08h-17.59v16.42h17.59v-16.42M1555.773 3867.08h-17.59v16.42h17.59v-16.42M344.593 4132.28c9.93 0 18-7.53 18-16.82v-66.73h-18.99v65.81h-55.24v17.74h56.23M396.163 4114.43v-14.49h50.65c9.93 0 18.12-7.53 18.12-16.8v-17.6c0-9.15-8.19-16.81-18.12-16.81h-51.52c-9.93 0-18.12 7.66-18.12 16.81v6.49h18.99v-5.57h49.79v15.65h-68.78v50.05h87.76v-17.73h-68.77M558.063 4064.26h12.65v10.77h-12.65zm11.29 25.26c9.93 0 16.88-6.38 16.88-15.64v-8.34c0-9.29-6.95-15.75-16.88-15.75h-10.05c-9.81 0-16.76 6.46-16.76 15.75v8.34c0 9.26 6.95 15.64 16.76 15.64zm-74.48 16.57h12.66v10.66h-12.66zm82.91 25.94v-18.07l-81.42-65.23h-6.33v18.18l81.43 65.12zm-71.49-.82c9.92 0 16.87-6.35 16.87-15.63v-8.34c0-9.27-6.95-15.76-16.87-15.76h-10.06c-9.92 0-16.87 6.49-16.87 15.76v8.34c0 9.28 6.95 15.63 16.87 15.63h10.06M1678.773 4356.73h-803.95c-4.55 0-8.21 3.67-8.21 8.2 0 4.53 3.66 8.2 8.21 8.2h803.95c4.54 0 8.2-3.67 8.2-8.2 0-4.53-3.66-8.2-8.2-8.2M1407.713 3807.88h-433.3c-4.53 0-8.2 3.67-8.2 8.21 0 4.53 3.67 8.19 8.2 8.19h433.3c4.53 0 8.19-3.66 8.19-8.19 0-4.54-3.66-8.21-8.19-8.21"
    />
    <g
      clipPath="url(#clipPath3036)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#b)",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M5154.27 3773.78h-291.21v23.12h-214.01v-23.12 23.12h505.22v-23.12"
      />
    </g>
    <g
      clipPath="url(#c)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <image
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAICAYAAAC/K3xHAAAABHNCSVQICAgIfAhkiAAAAG1JREFUOI3tj0EOA1EIQp+K+Hv/A7cLp+kRJk3mbSCgCwJ4A4REnkOcQ8789PWiPIS9/czml+YM0U18M5tok2PSJtX7axM2IRHd1OX3XmT3dmqym1StlzavIiTq8qkCguTPeQbczTPgbp4Bd/MBBfkDUKJ4HcEAAAAASUVORK5CYII="
        transform="matrix(231.2 0 0 -39.2002 4640.9 3804.1)"
        preserveAspectRatio="none"
        style={{
          imageRendering: "optimizeSpeed",
        }}
        height={1}
        width={1}
      />
    </g>
    <path
      style={{
        fill: "#24b0b2",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      d="m463.713 3761.3-4.53 56.66c33.68 2.69 66.27 11.55 96.87 26.33l24.7-51.18c-36.93-17.84-76.32-28.54-117.04-31.81"
      transform="matrix(.13333 0 0 -.13333 0 600)"
    />
    <path
      style={{
        fill: "#29cacc",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      d="M437.593 3760.27c-24.65 0-49.42 2.8-73.68 8.32a334.725 334.725 0 0 0-45.5 13.84l20.39 53.04c31.27-12.01 65.36-18.37 98.78-18.38l.01-56.82"
      transform="matrix(.13333 0 0 -.13333 0 600)"
    />
    <path
      style={{
        fill: "#33fcff",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      d="m176.523 4008.36-54.18-17.15c12.34-38.97 31.55-74.96 57.1-106.94l44.41 35.46c-21.18 26.52-37.1 56.34-47.33 88.63"
      transform="matrix(.13333 0 0 -.13333 0 600)"
    />
    <path
      style={{
        fill: "#0f4c4d",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      d="M697.893 4173.16c-10.26 32.26-26.23 62.04-47.47 88.52l44.33 35.56c25.63-31.96 44.9-67.9 57.29-106.85l-54.15-17.23"
      transform="matrix(.13333 0 0 -.13333 0 600)"
    />
    <path
      style={{
        fill: "#146566",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      d="m764.203 4044.01-56.26 8.06c4.82 33.59 3.36 67.32-4.31 100.24l55.35 12.9c9.28-39.84 11.03-80.6 5.22-121.2"
      transform="matrix(.13333 0 0 -.13333 0 600)"
    />
    <path
      style={{
        fill: "#1a7e80",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      d="m711.063 3905.77-47.11 31.8c18.87 27.95 32.28 58.96 39.85 92.16l.24 1.13 55.41-12.63-.12-.56c-9.26-40.65-25.46-78.1-48.27-111.9"
      transform="matrix(.13333 0 0 -.13333 0 600)"
    />
    <path
      style={{
        fill: "#1f9799",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      d="m603.813 3805.39-28.67 49.07c29.33 17.14 54.91 39.24 76 65.67l44.42-35.45c-25.48-31.92-56.35-58.6-91.75-79.29"
      transform="matrix(.13333 0 0 -.13333 0 600)"
    />
    <path
      style={{
        fill: "#2ee3e6",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      d="M294.403 3792.77c-36.88 17.67-69.81 41.8-97.86 71.73l41.47 38.86c23.21-24.76 50.45-44.72 80.95-59.33l-24.56-51.26"
      transform="matrix(.13333 0 0 -.13333 0 600)"
    />
    <path
      style={{
        fill: "#0f4c4d",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      d="M535.283 4345.72c-31.08 11.89-64.94 18.19-98.22 18.19h-.57l-.1 56.83h.59c40.2 0 81.03-7.58 118.61-21.94l-20.31-53.08M636.223 4278.03c-23.26 24.72-50.54 44.63-81.05 59.18l24.45 51.3c36.9-17.59 69.88-41.66 98-71.54l-41.4-38.94"
      transform="matrix(.13333 0 0 -.13333 0 600)"
    />
    <path
      style={{
        fill: "#051a1a",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      d="m318.093 4336.49-24.83 51.13c36.92 17.91 76.28 28.69 116.99 32.03l4.65-56.64c-33.68-2.76-66.26-11.69-96.81-26.52M170.523 4150.17l-55.26 13.17.12.56c9.09 39.87 25.18 77.15 47.8 110.8l47.16-31.7c-18.71-27.84-32.01-58.7-39.55-91.73l-.27-1.1M115.473 4016.41c-9.2 39.85-10.88 80.63-4.99 121.22l56.24-8.18c-4.88-33.57-3.49-67.3 4.12-100.25l-55.37-12.79M223.143 4260.47l-44.5 35.35c25.42 31.99 56.24 58.73 91.6 79.48l28.77-49.03c-29.3-17.18-54.83-39.33-75.87-65.8"
      transform="matrix(.13333 0 0 -.13333 0 600)"
    />
    <path
      style={{
        fill: "#33fcff",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      d="M437.303 4451.71c-199.17 0-361.22-162.03-361.22-361.21 0-199.17 162.05-361.21 361.22-361.21 199.17 0 361.21 162.04 361.21 361.21 0 199.18-162.04 361.21-361.21 361.21zm0-730.62c-203.71 0-369.42 165.72-369.42 369.41 0 203.7 165.71 369.41 369.42 369.41 203.7 0 369.41-165.71 369.41-369.41 0-203.69-165.71-369.41-369.41-369.41"
      transform="matrix(.13333 0 0 -.13333 0 600)"
    />
    <path
      style={{
        fill: "#26bdbf",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      d="M158.143 3807.25c-1.05 0-2.09.4-2.89 1.2-75.36 75.33-116.85 175.51-116.85 282.05 0 106.55 41.49 206.72 116.85 282.06.8.8 1.84 1.2 2.89 1.2s2.1-.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8-73.79-73.79-114.44-171.9-114.44-276.26 0-104.35 40.65-202.46 114.44-276.25 1.6-1.6 1.6-4.2 0-5.8-.81-.8-1.85-1.2-2.9-1.2M716.453 3807.25c-1.05 0-2.1.4-2.9 1.2a4.086 4.086 0 0 0 0 5.8c73.79 73.79 114.44 171.9 114.44 276.25 0 104.36-40.65 202.47-114.44 276.26a4.086 4.086 0 0 0 0 5.8c.8.8 1.85 1.2 2.9 1.2 1.05 0 2.1-.4 2.9-1.2 75.34-75.34 116.83-175.51 116.83-282.06 0-106.54-41.49-206.72-116.83-282.05-.8-.8-1.85-1.2-2.9-1.2"
      transform="matrix(.13333 0 0 -.13333 0 600)"
    />
    <g
      clipPath="url(#clipPath3098)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#linearGradient3104)",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M3869.53 3835.75c-3.8 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.06 6.87 6.86 6.87a6.86 6.86 0 0 0 6.86-6.87v-194.72c0-3.79-3.07-6.86-6.86-6.86"
      />
    </g>
    {/* primeira barra */}
    <g
      clipPath="url(#clipPath3130)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#d)",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M3918.67 3835.75a6.85 6.85 0 0 0-6.85 6.86v194.72c0 3.8 3.06 6.87 6.85 6.87 3.8 0 6.87-3.07 6.87-6.87v-194.72a6.86 6.86 0 0 0-6.87-6.86"
      />
    </g>
    <g
      clipPath="url(#e)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#f)",
          fillOpacity: porcent>=1?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M3943.25 3835.75c-3.8 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.06 6.87 6.86 6.87 3.79 0 6.87-3.07 6.87-6.87v-194.72c0-3.79-3.08-6.86-6.87-6.86"
      />
    </g>
    <g
      clipPath="url(#clipPath3162)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#g)",
          fillOpacity: porcent>=1?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M3967.83 3835.75c-3.8 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.06 6.87 6.86 6.87a6.86 6.86 0 0 0 6.86-6.87v-194.72c0-3.79-3.07-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#clipPath3178)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#h)",
          fillOpacity: porcent>=2?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M3992.4 3835.75c-3.8 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.06 6.87 6.86 6.87a6.86 6.86 0 0 0 6.86-6.87v-194.72c0-3.79-3.07-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#i)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#j)",
          fillOpacity: porcent>=4?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4016.97 3835.75a6.85 6.85 0 0 0-6.85 6.86v194.72c0 3.8 3.06 6.87 6.85 6.87 3.8 0 6.87-3.07 6.87-6.87v-194.72a6.86 6.86 0 0 0-6.87-6.86"
      />
    </g>
    <g
      clipPath="url(#k)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#l)",
          fillOpacity: porcent>=6?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4041.55 3835.75c-3.8 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.06 6.87 6.86 6.87 3.79 0 6.87-3.07 6.87-6.87v-194.72c0-3.79-3.08-6.86-6.87-6.86"
      />
    </g>
    <g
      clipPath="url(#m)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#n)",
          fillOpacity: porcent>=8?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4066.12 3835.75c-3.8 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.06 6.87 6.86 6.87 3.79 0 6.87-3.07 6.87-6.87v-194.72c0-3.79-3.08-6.86-6.87-6.86"
      />
    </g>
    <g
      clipPath="url(#o)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#p)",
          fillOpacity: porcent>=10?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4090.7 3835.75c-3.8 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.06 6.87 6.86 6.87a6.86 6.86 0 0 0 6.86-6.87v-194.72c0-3.79-3.07-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#q)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#r)",
          fillOpacity: porcent>=12?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4115.27 3835.75a6.85 6.85 0 0 0-6.85 6.86v194.72c0 3.8 3.06 6.87 6.85 6.87 3.8 0 6.87-3.07 6.87-6.87v-194.72a6.86 6.86 0 0 0-6.87-6.86"
      />
    </g>
    <g
      clipPath="url(#s)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#t)",
          fillOpacity: porcent>=14?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4139.84 3835.75a6.85 6.85 0 0 0-6.85 6.86v194.72c0 3.8 3.06 6.87 6.85 6.87 3.8 0 6.87-3.07 6.87-6.87v-194.72a6.86 6.86 0 0 0-6.87-6.86"
      />
    </g>
    <g
      clipPath="url(#u)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#v)",
          fillOpacity: porcent>=16?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4164.42 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.07 6.87 6.86 6.87 3.79 0 6.87-3.07 6.87-6.87v-194.72c0-3.79-3.08-6.86-6.87-6.86"
      />
    </g>
    <g
      clipPath="url(#w)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#x)",
          fillOpacity: porcent>=18?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4189 3835.75c-3.8 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.06 6.87 6.86 6.87a6.86 6.86 0 0 0 6.86-6.87v-194.72c0-3.79-3.07-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#y)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#z)",
          fillOpacity: porcent>=20?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4213.57 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72a6.86 6.86 0 1 0 13.72 0v-194.72c0-3.79-3.07-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#A)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#B)",
          fillOpacity: porcent>=22?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4238.14 3835.75a6.85 6.85 0 0 0-6.85 6.86v194.72c0 3.8 3.06 6.87 6.85 6.87 3.8 0 6.87-3.07 6.87-6.87v-194.72a6.86 6.86 0 0 0-6.87-6.86"
      />
    </g>
    <g
      clipPath="url(#C)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#D)",
          fillOpacity: porcent>=24?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4262.71 3835.75c-3.78 0-6.85 3.07-6.85 6.86v194.72c0 3.8 3.07 6.87 6.85 6.87 3.8 0 6.87-3.07 6.87-6.87v-194.72a6.86 6.86 0 0 0-6.87-6.86"
      />
    </g>
    <g
      clipPath="url(#E)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#F)",
          fillOpacity: porcent>=26?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4287.29 3835.75c-3.78 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.08 6.87 6.86 6.87 3.79 0 6.87-3.07 6.87-6.87v-194.72c0-3.79-3.08-6.86-6.87-6.86"
      />
    </g>
    <g
      clipPath="url(#G)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#H)",
          fillOpacity: porcent>=28?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4311.88 3835.75a6.86 6.86 0 0 0-6.87 6.86v194.72c0 3.8 3.07 6.87 6.87 6.87 3.78 0 6.85-3.07 6.85-6.87v-194.72c0-3.79-3.07-6.86-6.85-6.86"
      />
    </g>
    <g
      clipPath="url(#I)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#J)",
          fillOpacity: porcent>=30?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4336.45 3835.75a6.86 6.86 0 0 0-6.87 6.86v194.72c0 3.8 3.07 6.87 6.87 6.87 3.78 0 6.85-3.07 6.85-6.87v-194.72c0-3.79-3.07-6.86-6.85-6.86"
      />
    </g>
    <g
      clipPath="url(#K)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#L)",
          fillOpacity: porcent>=32?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4361.02 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72a6.86 6.86 0 1 0 13.72 0v-194.72c0-3.79-3.07-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#M)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#N)",
          fillOpacity: porcent>=34?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4385.6 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.78 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.08-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#O)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#P)",
          fillOpacity: porcent>=36?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4410.17 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87a6.86 6.86 0 0 0 6.86-6.87v-194.72c0-3.79-3.07-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#Q)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#R)",
          fillOpacity: porcent>=38?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4434.75 3835.75a6.86 6.86 0 0 0-6.87 6.86v194.72c0 3.8 3.07 6.87 6.87 6.87 3.78 0 6.85-3.07 6.85-6.87v-194.72c0-3.79-3.07-6.86-6.85-6.86"
      />
    </g>
    <g
      clipPath="url(#S)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#T)",
          fillOpacity: porcent>=40?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4459.32 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72a6.86 6.86 0 1 0 13.72 0v-194.72c0-3.79-3.07-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#U)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#V)",
          fillOpacity: porcent>=42?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4483.89 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72a6.86 6.86 0 1 0 13.72 0v-194.72c0-3.79-3.07-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#W)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#X)",
          fillOpacity: porcent>=44?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4508.47 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#Y)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#Z)",
          fillOpacity: porcent>=46?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4533.05 3835.75a6.86 6.86 0 0 0-6.87 6.86v194.72c0 3.8 3.07 6.87 6.87 6.87 3.79 0 6.85-3.07 6.85-6.87v-194.72a6.85 6.85 0 0 0-6.85-6.86"
      />
    </g>
    <g
      clipPath="url(#aa)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#ab)",
          fillOpacity: porcent>=48?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4557.62 3835.75a6.86 6.86 0 0 0-6.87 6.86v194.72c0 3.8 3.07 6.87 6.87 6.87 3.79 0 6.85-3.07 6.85-6.87v-194.72a6.85 6.85 0 0 0-6.85-6.86"
      />
    </g>
    <g
      clipPath="url(#ac)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#ad)",
          fillOpacity: porcent>=50?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4582.19 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.07 6.87 6.86 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#ae)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#af)",
          fillOpacity: porcent>=52?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4606.77 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#ag)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#ah)",
          fillOpacity: porcent>=54?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4631.34 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#ai)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#aj)",
          fillOpacity: porcent>=54?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4655.92 3835.75a6.86 6.86 0 0 0-6.87 6.86v194.72c0 3.8 3.07 6.87 6.87 6.87 3.79 0 6.85-3.07 6.85-6.87v-194.72a6.85 6.85 0 0 0-6.85-6.86"
      />
    </g>
    <g
      clipPath="url(#ak)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#al)",
          fillOpacity: porcent>=56?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4680.49 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.07 6.87 6.86 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#am)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#an)",
          fillOpacity: porcent>=58?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4705.06 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.07 6.87 6.86 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#ao)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#ap)",
          fillOpacity: porcent>=60?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4729.64 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#aq)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#ar)",
          fillOpacity: porcent>=62?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4754.22 3835.75a6.86 6.86 0 0 0-6.87 6.86v194.72c0 3.8 3.07 6.87 6.87 6.87 3.79 0 6.85-3.07 6.85-6.87v-194.72a6.85 6.85 0 0 0-6.85-6.86"
      />
    </g>
    <g
      clipPath="url(#as)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#at)",
          fillOpacity: porcent>=64?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4778.79 3835.75a6.86 6.86 0 0 0-6.87 6.86v194.72c0 3.8 3.07 6.87 6.87 6.87a6.86 6.86 0 0 0 6.86-6.87v-194.72c0-3.79-3.07-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#au)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#av)",
          fillOpacity: porcent>=66?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4803.36 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.07 6.87 6.86 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    
    <g
      clipPath="url(#aw)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#ax)",
          fillOpacity: porcent>=68?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4827.93 3835.75c-3.79 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.07 6.87 6.86 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    {/* barra llena */}
    <g
      clipPath="url(#ay)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#az)",
          fillOpacity: porcent>=70?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4852.51 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#ba)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#ba)",
          fillOpacity: porcent>=72?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4877.51 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#bb)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#bb)",
          fillOpacity: porcent>=74?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4902.51 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#bc)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#bc)",
          fillOpacity: porcent>=76?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4927.51 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#bd)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#bd)",
          fillOpacity: porcent>=78?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4952.51 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#be)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#be)",
          fillOpacity: porcent>=80?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4977.51 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#bf)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#bf)",
          fillOpacity: porcent>=82?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M5002.51 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#bg)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#bg)",
          fillOpacity: porcent>=84?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M5027.51 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#bh)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#bh)",
          fillOpacity: porcent>=86?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M5052.51 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#bi)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#bi)",
          fillOpacity: porcent>=88?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M5077.51 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#bj)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#bj)",
          fillOpacity: porcent>=90?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M5102.51 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#bk)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#bk)",
          fillOpacity: porcent>=92?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M5127.51 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#bl)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#bl)",
          fillOpacity: porcent>=94?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M5152.51 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#bm)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#bm)",
          fillOpacity: porcent>=96?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M5177.51 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    <g
      clipPath="url(#bn)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#bn)",
          fillOpacity: porcent>98?1:0.3,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M5202.51 3835.75c-3.79 0-6.87 3.07-6.87 6.86v194.72c0 3.8 3.08 6.87 6.87 6.87 3.8 0 6.86-3.07 6.86-6.87v-194.72c0-3.79-3.06-6.86-6.86-6.86"
      />
    </g>
    {/* ------------------------- */}
    {/* sem rellenar la barra */}
    {/* <path
      style={{
        fill: "#0f4c4d",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      d="M1892.963 3994.48a6.86 6.86 0 0 0-6.87 6.86v194.72c0 3.8 3.07 6.87 6.87 6.87 3.79 0 6.85-3.07 6.85-6.87v-194.72a6.85 6.85 0 0 0-6.85-6.86M1917.533 3994.48a6.86 6.86 0 0 0-6.87 6.86v194.72c0 3.8 3.07 6.87 6.87 6.87 3.79 0 6.87-3.07 6.87-6.87v-194.72c0-3.79-3.08-6.86-6.87-6.86M1942.103 3994.48a6.85 6.85 0 0 0-6.85 6.86v194.72c0 3.8 3.06 6.87 6.85 6.87 3.8 0 6.87-3.07 6.87-6.87v-194.72a6.86 6.86 0 0 0-6.87-6.86M1966.683 3994.48c-3.79 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.07 6.87 6.86 6.87 3.8 0 6.87-3.07 6.87-6.87v-194.72a6.86 6.86 0 0 0-6.87-6.86M1991.253 3994.48c-3.79 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.07 6.87 6.86 6.87 3.8 0 6.87-3.07 6.87-6.87v-194.72a6.86 6.86 0 0 0-6.87-6.86M2015.833 3994.48c-3.8 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.06 6.87 6.86 6.87 3.79 0 6.87-3.07 6.87-6.87v-194.72c0-3.79-3.08-6.86-6.87-6.86M2040.403 3994.48a6.85 6.85 0 0 0-6.85 6.86v194.72c0 3.8 3.06 6.87 6.85 6.87 3.8 0 6.87-3.07 6.87-6.87v-194.72a6.86 6.86 0 0 0-6.87-6.86M2064.973 3994.48a6.85 6.85 0 0 0-6.85 6.86v194.72c0 3.8 3.06 6.87 6.85 6.87 3.8 0 6.87-3.07 6.87-6.87v-194.72a6.86 6.86 0 0 0-6.87-6.86M2089.553 3994.48c-3.79 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.07 6.87 6.86 6.87 3.8 0 6.87-3.07 6.87-6.87v-194.72a6.86 6.86 0 0 0-6.87-6.86M2114.133 3994.48c-3.8 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.06 6.87 6.86 6.87 3.79 0 6.87-3.07 6.87-6.87v-194.72c0-3.79-3.08-6.86-6.87-6.86M2138.703 3994.48c-3.8 0-6.86 3.07-6.86 6.86v194.72c0 3.8 3.06 6.87 6.86 6.87 3.79 0 6.87-3.07 6.87-6.87v-194.72c0-3.79-3.08-6.86-6.87-6.86M2163.273 3994.48a6.85 6.85 0 0 0-6.85 6.86v194.72c0 3.8 3.06 6.87 6.85 6.87 3.8 0 6.87-3.07 6.87-6.87v-194.72a6.86 6.86 0 0 0-6.87-6.86"
      transform="matrix(.13333 0 0 -.13333 0 600)"
    /> */}
    <g
      clipPath="url(#aA)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <path
        style={{
          fill: "url(#aB)",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M5201.66 4066.93H3856.43v114.67h1065.85c24.49-24.49 39.56-39.57 61.71-61.72h164.71l52.96-52.95m-1194.71 82.26c-4.66-7.82-6.01-14.73-6.48-19.2-.29-2.26-.25-3.97-.25-5.1v-1.7c.6-14.95 9.01-29.32 21.81-37.1l.18-.1c7.18-4.37 15.6-6.72 24.02-6.72.63 0 1.26.01 1.89.03 14.95.6 29.31 9.01 37.09 21.83l.11.16c4.69 7.73 7.06 16.87 6.67 25.91-.58 14.95-8.99 29.32-21.8 37.1l-.17.1c-6.66 3.99-14.35 6.4-22.13 6.67-1.27 0-2.53.01-3.79.02 0 0-.93-.09-2.79-.25-1.86-.16-4.65-.57-8.22-1.65-7.01-1.97-18.06-7.21-26.14-20m151.16-52.25c-.8-2.61-1.19-3.92-1.19-3.92-.4-1.31-.8-2.61-1.19-3.92-.4-1.31-.8-2.62-1.19-3.93 0 0-.4-1.31-1.19-3.92 3-.8 5.25-1.32 6.81-1.47l2.31-.33c1.33-.11 2.67-.17 4.01-.17 9.13 0 18.22 2.73 25.8 7.79 8.69 5.81 15.24 14.73 18.32 24.7l.05.19c.85 2.95 1.45 5.95 1.77 9.02.94 10.45-1.81 21.11-7.61 29.81-5.81 8.69-14.73 15.24-24.69 18.32l-.2.06c-2.95.85-5.96 1.44-9.02 1.77-1.34.12-2.69.18-4.03.18-9.12 0-18.2-2.73-25.78-7.79-8.69-5.81-15.24-14.74-18.33-24.7l-.05-.19c-.85-2.95-1.44-5.96-1.76-9.03-.39-4.71-.09-9.46.9-14.07 0 0 .24-.98.75-2.95.57-1.94 1.55-4.83 3.39-8.44 3.65-6.94 11.64-17.72 27.36-22.7.79 2.61 1.19 3.92 1.19 3.92.39 1.31.79 2.62 1.19 3.93.39 1.31.79 2.61 1.19 3.92 0 0 .39 1.31 1.19 3.92-10.12 3.24-15.2 10.11-17.58 14.6-2.34 4.69-2.67 7.33-2.67 7.33-.62 2.97-.81 6-.59 9.02.23 1.97.61 3.9 1.15 5.82l.04.12c2.02 6.43 6.17 12.11 11.76 15.87a30.316 30.316 0 0 0 19.16 4.91c1.97-.23 3.9-.61 5.82-1.15l.11-.03c6.44-2.03 12.11-6.17 15.88-11.78 3.73-5.61 5.48-12.47 4.9-19.15-.22-1.96-.6-3.9-1.14-5.82l-.04-.12c-2.02-6.43-6.17-12.11-11.78-15.87-4.91-3.27-10.77-5.01-16.64-5.01-.84 0-1.67.03-2.51.11 0 0-.48.07-1.47.22-1.01.08-2.45.45-4.4.93m-232.93-17.65c1.25.03 2.52.07 3.77.1 0 0 .93.11 2.79.34 1.84.22 4.63.71 8.17 1.89 6.94 2.19 17.82 7.77 25.51 20.8 4.4 7.96 5.56 14.9 5.89 19.38.21 2.27.12 3.98.09 5.11l-.06 1.7c-1.06 14.93-9.9 29.03-22.94 36.41l-.18.1c-6.91 3.92-14.86 6-22.82 6-1.1 0-2.19-.04-3.28-.12-14.92-1.05-29.02-9.9-36.41-22.95l-.1-.16c-4.45-7.87-6.54-17.08-5.87-26.11 1.05-14.92 9.89-29.03 22.94-36.41l.17-.1c6.77-3.78 14.53-5.95 22.33-5.98m121.07 16.38c-5.45 0-10.82 1.49-15.51 4.32l-.1.07c-8.26 5.03-13.61 14.2-14.03 23.86.01-.01.01-.01.02-.01.34 0-1.41 6.47 4.31 16.71 5.23 8.22 12.25 11.59 16.79 12.84 2.31.7 4.12.97 5.31 1.06l1.79.18 2.43-.02c5.02-.18 9.89-1.73 14.21-4.28l.11-.06c8.25-5.04 13.6-14.2 14.03-23.86.23-5.84-1.27-11.64-4.29-16.65l-.07-.11c-5.04-8.25-14.2-13.6-23.86-14.02-.38-.02-.76-.03-1.14-.03m-120.96.02c-5.01.02-9.94 1.43-14.33 3.84l-.12.06c-8.4 4.78-14.03 13.78-14.75 23.42-.41 5.83.92 11.66 3.78 16.77l.06.11c4.79 8.4 13.78 14.04 23.42 14.75a30.177 30.177 0 0 0 16.78-3.77l.1-.07c8.4-4.78 14.04-13.78 14.76-23.42l-.01.01c-.36 0 1.59-6.42-3.81-16.84-4.98-8.37-11.88-11.96-16.4-13.35-2.27-.77-4.07-1.09-5.26-1.22-1.19-.16-1.79-.23-1.79-.23l-2.43-.06"
      />
    </g>
    <path
      style={{
        fill: "#33fcff",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      d="M1892.153 4299.07h-597.09c-2.27 0-4.1 1.83-4.1 4.1a4.1 4.1 0 0 0 4.1 4.1h597.09a4.1 4.1 0 1 0 0-8.2M1842.943 4274.47h-547.88c-2.27 0-4.1 1.83-4.1 4.1 0 2.27 1.83 4.1 4.1 4.1h547.88c2.27 0 4.1-1.83 4.1-4.1 0-2.27-1.83-4.1-4.1-4.1M2006.953 4249.86h-711.89a4.1 4.1 0 0 0-4.1 4.1c0 2.27 1.83 4.11 4.1 4.11h711.89a4.11 4.11 0 0 0 4.11-4.11c0-2.26-1.84-4.1-4.11-4.1"
      transform="matrix(.13333 0 0 -.13333 0 600)"
    />
    <g
      clipPath="url(#aC)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
        {/* bolinha */}
    {/* <image
        className="loader-2"
        //  herf="data:image/png;base64,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"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAhxJREFUOI2dlEty00AURU9/1JLjJDCDSZiwAYrsgAGwpKwgS2DAVqhiB1Qxo5gmA2Bop4gtS+rH4KmtliwHwq1S2f07fXXVrw0g1fU1APbZc2ZVFJgQYLHALJcYaw+mmJMTCCXr16+UVV1dzcP+U+ffvgPg88746+fgIJRQlpiiAOe0r/8lBG370fKRdOT+ftxblsiu1tc3ZuhP4AQ1FpwF60bLn/6ue3DbDr3GQNsppN4i1uoGgOx2+gZJ1oDzYO3+LQbHTZNNtPrUW7AGAUwZFRojJkZMCOrWOXUaCowvoKomYJGhFSNEgcJDp65lvULWKwDCu/fjyAyQoL6ALHMvXTfODVFoXeuTa7nkQM5DWWlE2TH0bLf6r6qQlLVzCp/InD05BPdr91Dne3BS2sA5RvHkOplxDOjHsJB9WC+r1djV6Snsdgdrzz58nIf23Djp8zLN8YgWD4zdA9MiH06FCMSItC1yd3ew+MfbN7z89HkWbHrEBnWv4JRtjAqOcRb8kOsajSIf95KXc9dpFbYtkjbM9LU4vNUum8ipgRZIpdYI+PxDSQKnatxs9mPx5mbW7ZfCctkKVoR0YzSAHznrOqRp9FT02Utdw2aDOT9H1ut5uDej9otdxEvmClDHfd7E4RAdgx6TFsj03MYIIlqJbYtMr9W/6CbYmWszh4NGEsL8nAdkALEXF7OnAICm2ef8GFmAeHv7qEX/oj/a5+Yo6QkhBAAAAABJRU5ErkJggg=="
        // transform="matrix(-0.81,-0.59,0.59,-0.81,0,0)"
        transform="matrix(107.2 0 0 -107.2 3872.9 4180.1)"
        // preserveAspectRatio="none"
        height={1}
        width={1}
      />
    </g>
    <g
      clipPath="url(#aD)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <image
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAiJJREFUOI2llb1uE0EQx3/jW5/tS7BAKIqUwlRpaGmQeAUKnoM8AgXwFnkdaKCBhidIEQkpEqLgfHtfOxRza9+HXSQZeWXv7uxv/jOzvhNElL6JMDbprzmHZNnET9ZrAMLtLQCzCeWRNru8tPgPJqQpslwe3ZYHlyLLkPkcZrP9GRFIU5LN5p6KI3S1MqjIfsR5dL0XeJxVVLtYIEkyBL+s2kEUB/xcHI43u7gYwrvUJU3BORuRVXQVTgRabLyqWn6kyZScplPxyyXM53t4XN9UYdA8AZ6N+henv968HiqOP7MMkgSSZNdol/cOZ4ACxVhV/F4sDoNPTmzeuyHyfKQ4myRr4N/v3o4We+DTUwhhsO2GU9geAcv5+VEweW5q+9tP//lOsdqnaSbRI8J//HAgLNDazdKiADWcI7RTRx3n0dmBW2H+Ct5bEztzO3UhWOSyBFX075+e5K4hh8BR7XJpjI7ntCiGTk2DbnOoa2iaAZjVahjMewNpQJzb+WlR4Cj93rlu0Loy1W2Ltq2p955wc8Ns8wL1HnyBlqWBnRso3ZVC83ywQFMT6y4iqCqoImdnsN1CCBYcIMugqiwz1QMPobIc1S0AulNsAbuyoJA4xM3R6BvC/s9R1z1wNQJHUzVgZQo1BECsF85ZdkkCSa/2dU15fW0P+vW372h3eGJtC3mOVpX5eG9j9EIId3cA+M+frIzxDfLky9dHgbdX7wdr/wFHzPZSjt+FtgAAAABJRU5ErkJggg=="
        transform="matrix(107.2 0 0 -107.2 3992.9 4179.1)"
        preserveAspectRatio="none"
        style={{
          imageRendering: "optimizeSpeed",
        }}
        height={1}
        width={1}
      />
    </g>
    <g
      clipPath="url(#aE)"
      transform="matrix(.13333 0 0 -.13333 -397.884 578.836)"
    >
      <image
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAiNJREFUOI2llU1v00AQhp+ZHa/dpKl6A8EVJA6IC0jckOgvKyfED0H8ssKxFUmbr10vh7Udf6SQirlsPDt+dvb1zETE+6Rv3yGXlwDoi5eMTdr14gLKEjEHIsMg55CqYvPta+boq9cT0P9Ydf0FABtv1D9vDplWFVQVOENms2GgCKg+ekAHTnd33QtSltkngphB4adXF+ngUhSDrfn3Hw14sz54y4q02yHeZ/jDQ4bP55lnLmeqmnUtC0ChsMHhRozDTNYP4EtSXSOALBbgXN5rV5EMLQzU5YOdA7MeOITh9cxgt+0gabmE5ZLEDXZ1NUyiKPLNVME31dKB63oIDiHDQ8jQ1t9mPzZVODvLB7geOPXAIgIpZVDs6d6CLxYTH5ArRhudj0mRIH/hse4tuKx6vt7P+Tw72koBLO33h4gEKewRG5ZPl935+ViIbLP5xGXc308gaRzVgPXZ8+NggBhG5bbfHc/umK+qpnuthf3gcdLSfzO14+F1CDCS70lg13Qj0H28FGtSSpBStz4ZXI7qOGw2hLjFFQV1jLQ9kWI8Dfx+lWv6dp3XOga2v3PzmPfEEFDy0AKIMfL43Guh9xtqYMVQY1GlmM3QokCdQ1RRsy7mn2CgKz9p5m+qa7QZleocaoaVJdaMWzhR467pU0Kcw+FJdQLvibsd1psRYbtl9fnTaeB+w0jzrE5R57HyUCnb5Yrbjx/yTU4Bn2q/3hz+P/8A/5acSL84iR8AAAAASUVORK5CYII="
        transform="matrix(107.2 0 0 -107.2 4112.9 4179.1)"
        preserveAspectRatio="none"
        style={{
          imageRendering: "optimizeSpeed",
        }}
        height={1}
        width={1}
      /> */}
    </g>
    <g
      clipPath="url(#clipPath4122)"
      transform="matrix(.13333 0 0 -.13333 0 600)"
    >
      <path
        style={{
          fill: "url(#linearGradient4128)",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M4351.97 1316.87h33.93v18.16h-33.93Z"
      />
    </g>
    <g
      clipPath="url(#clipPath4264)"
      transform="matrix(.13333 0 0 -.13333 0 600)"
    >
      <path
        style={{
          fill: "url(#linearGradient4270)",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="M5072.64 1173.37h-264.22l-126.68 125.75h-933.3 1197.52l126.68-125.75"
      />
    </g>
  </svg>
  <img src={loader} alt="loader-1" className={`${porcent!==0&&porcent!==100?'loader-1-animated':''} loader-1`}/>
  <img src={loader} alt="loader-1" className={`${porcent!==0&&porcent!==100?'loader-2-animated':''} loader-2`}/>
  <img src={loader} alt="loader-1" className={`${porcent!==0&&porcent!==100?'loader-3-animated':''} loader-3`}/>
  <div className="porcentage-div">
    <h1 className="porcentage">{porcent}%</h1>
  </div>
  <h1 className="loading">LOADING...</h1>
  <div className="button-group">
    <button className="button-1" onClick={handlerDecrement}>-</button>
    <button className="button-2" onClick={handlerIncrent}>+</button>
  </div>
  </div>
)}

export default ProgressBar
