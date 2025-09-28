import React from 'react';
import { Code } from 'lucide-react';

const TechIcon = ({ technology, className }) => {
  const iconMap = {
    laravel: (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M128 63.9999L105.333 52.6666V75.3332L128 63.9999Z" fill="#F05340"></path>
        <path d="M82.6667 41.3333L60 29.9999L22.6667 52.6666V75.3332L34 81.0132V64.0132L60 49.3333L82.6667 62.6666V41.3333Z" fill="#F05340"></path>
        <path d="M105.333 52.6667L82.6667 41.3334V62.6667L105.333 75.3334V52.6667Z" fill="#F05340"></path>
        <path d="M82.6667 86.6667L60 98L34 83.3334V64.0134L22.6667 58.3334V75.3334L60 98L105.333 75.3334V52.6667L94 46.9867V69.6667L82.6667 75.3334V86.6667Z" fill="#F05340"></path>
      </svg>
    ),
    php: (
      <svg className={className} viewBox="0 0 256 154" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="128" cy="77" rx="128" ry="77" fill="#777BB4"></ellipse>
        <path d="M64.5 43H96C108.703 43 119 53.297 119 66V88C119 100.703 108.703 111 96 111H64.5V43Z" fill="#E0D9F7"></path>
        <path d="M191.5 43H160C147.297 43 137 53.297 137 66V88C137 100.703 147.297 111 160 111H191.5V43Z" fill="#E0D9F7"></path>
        <path d="M191.5 43H160C147.297 43 137 53.297 137 66V88C137 100.703 147.297 111 160 111H191.5V77H160C153.925 77 149 72.075 149 66C149 59.925 153.925 55 160 55H191.5V43Z" fill="#B7B3D6"></path>
        <path d="M64.5 43H96C108.703 43 119 53.297 119 66C119 78.703 108.703 89 96 89H64.5V43Z" fill="#B7B3D6"></path>
      </svg>
    ),
    mysql: (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M108.8 0H19.2C8.64 0 0 8.64 0 19.2V108.8C0 119.36 8.64 128 19.2 128H108.8C119.36 128 128 119.36 128 108.8V19.2C128 8.64 119.36 0 108.8 0Z" fill="#00758F"></path>
        <path d="M108.8 0H19.2C8.64 0 0 8.64 0 19.2V64H128V19.2C128 8.64 119.36 0 108.8 0Z" fill="#F29111"></path>
        <path d="M96 83.2V70.4H83.2V83.2H96ZM83.2 96H96V83.2H83.2V96ZM70.4 83.2H83.2V70.4H70.4V83.2ZM70.4 96H83.2V83.2H70.4V96ZM57.6 83.2H70.4V70.4H57.6V83.2ZM57.6 96H70.4V83.2H57.6V96ZM44.8 83.2H57.6V70.4H44.8V83.2ZM32 83.2H44.8V70.4H32V83.2Z" fill="#FFFFFF"></path>
        <path d="M96 44.8C96 50.128 91.728 54.4 86.4 54.4C81.072 54.4 76.8 50.128 76.8 44.8C76.8 39.472 81.072 35.2 86.4 35.2C91.728 35.2 96 39.472 96 44.8Z" fill="#FFFFFF"></path>
        <path d="M64 54.4C64 57.536 61.536 60 58.4 60H37.6C34.464 60 32 57.536 32 54.4V35.2H64V54.4Z" fill="#FFFFFF"></path>
      </svg>
    ),
    react: (
      <svg className={className} viewBox="-11.5 -10.23174" width="35" height="35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"></circle>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"></ellipse>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
        </g>
      </svg>
    ),
    'node.js': (
      <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M128 0C57.3067 0 0 57.3067 0 128C0 198.693 57.3067 256 128 256C198.693 256 256 198.693 256 128C256 57.3067 198.693 0 128 0ZM199.317 194.347C195.307 198.357 189.653 199.467 184.427 197.44L110.507 171.093C105.28 169.067 102.4 163.413 104.427 158.187L124.907 107.52C126.933 102.293 132.587 99.4667 137.813 101.493L211.733 127.84C216.96 129.867 219.893 135.52 217.867 140.747L199.317 194.347Z" fill="#8CC84B"></path>
      </svg>
    ),
    tailwindcss: (
      <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 0C14.327 0 0 14.327 0 32C0 49.673 14.327 64 32 64C49.673 64 64 49.673 64 32C64 14.327 49.673 0 32 0Z" fill="#38BDF8"></path>
        <path d="M20.571 20.571C22.857 18.286 25.714 16.571 29.143 16C32.571 15.429 35.429 16 38.286 17.714C41.143 19.429 42.857 22.286 43.429 25.714C44 29.143 43.429 32.571 41.714 35.429C40 38.286 37.143 40 33.714 40.571C30.286 41.143 26.857 40.571 24 38.857C21.143 37.143 19.429 34.286 18.857 30.857C18.286 27.429 18.857 24 20.571 20.571Z" fill="white" fillOpacity="0.8"></path>
        <path d="M32 25.143C33.714 24 35.429 23.429 37.714 23.429C40 23.429 41.714 24 42.857 25.143C44 26.286 44.571 28 44.571 30.286C44.571 32.571 44 34.286 42.857 35.429C41.714 36.571 40 37.143 37.714 37.143C35.429 37.143 33.714 36.571 32 35.429V25.143Z" fill="white"></path>
        <path d="M20.571 37.143C22.286 36 24 35.429 26.286 35.429C28.571 35.429 30.286 36 31.429 37.143C32.571 38.286 33.143 40 33.143 42.286C33.143 44.571 32.571 46.286 31.429 47.429C30.286 48.571 28.571 49.143 26.286 49.143C24 49.143 22.286 48.571 20.571 47.429V37.143Z" fill="white"></path>
      </svg>
    ),
    wordpress: (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64 0C28.64 0 0 28.64 0 64C0 99.36 28.64 128 64 128C99.36 128 128 99.36 128 64C128 28.64 99.36 0 64 0Z" fill="#21759B"></path>
        <path d="M96.8 80.8L84.8 36H71.2L59.2 80.8L64 83.2L67.2 72.8H80.8L84 83.2L88.8 80.8L92.8 80.8L96.8 80.8ZM48.8 64.8L56.8 44H60L52 64.8H48.8ZM31.2 64.8L39.2 44H42.4L34.4 64.8H31.2ZM88.8 80.8L96.8 60H100L92 80.8H88.8Z" fill="white"></path>
        <path d="M74 48.8C76.64 48.8 78.8 46.64 78.8 44C78.8 41.36 76.64 39.2 74 39.2C71.36 39.2 69.2 41.36 69.2 44C69.2 46.64 71.36 48.8 74 48.8Z" fill="white"></path>
      </svg>
    ),
    'vue.js': (
      <svg className={className} viewBox="0 0 256 221" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M204.8 0H256L128 220.8L0 0H51.2L128 132.48L204.8 0Z" fill="#41B883"></path>
        <path d="M0 0L128 220.8L256 0H204.8L128 132.48L51.2 0H0Z" opacity="0.01" fill="url(#paint0_linear_401_13)"></path>
        <path d="M51.2 0L128 133.12L204.8 0H153.6L128 44.16L102.4 0H51.2Z" fill="#35495E"></path>
      </svg>
    ),
    strapi: (
      <svg className={className} viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M810.66 413.84L512.04 223.42L213.34 413.84V604.1L512.04 794.58L810.66 604.1V413.84Z" fill="#8E75FF"></path>
        <path d="M512 223.42V794.58L810.66 604.1V413.84L512 223.42Z" fill="#A594FF"></path>
        <path d="M512.04 223.42L213.34 413.84L512.04 413.84V223.42Z" fill="#745EFF"></path>
        <path d="M512.04 413.84L213.34 413.84L512.04 604.1V413.84Z" fill="#A594FF"></path>
        <path d="M512.04 604.1L213.34 413.84V604.1L512.04 794.58V604.1Z" fill="#8E75FF"></path>
      </svg>
    ),
  };

  const normalizedTech = technology.toLowerCase();
  return iconMap[normalizedTech] || <Code className={className} />;
};

export default TechIcon;