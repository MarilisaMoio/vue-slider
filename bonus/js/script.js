// const slides = [
// {
//     image: 'img/01.webp',
//         title: 'Marvel\'s Spiderman Miles Morale',
//         text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//     }, {
//         image: 'img/02.webp',
//         title: 'Ratchet & Clank: Rift Apart',
//         text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//     }, {
//         image: 'img/03.webp',
//         title: 'Fortnite',
//         text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//     }, {
//         image: 'img/04.webp',
//         title: 'Stray',
//         text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//     }, {
//         image: 'img/05.webp',
//         title: "Marvel's Avengers",
//         text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
//     }
// ];

// console.log(slides);

const {createApp} = Vue;

createApp({
    data() {
        return {
            //con aggiunta degli alt-text
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    alt: "Spiderman",
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    alt: "Ratchet & Clank",
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    alt: "Fortnite",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    alt: "Stray",
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    alt: "Avengers",
                }
            ],
            imgCounter: 0,
            autoScroll: null, 
        }
    },
    methods: {
        showPrevious: function(){
            if (this.imgCounter > 0){
                this.imgCounter--;
            } else {
                this.imgCounter = this.slides.length - 1;
            }
        },
        showNext: function(){
            if (this.imgCounter < this.slides.length - 1){
                this.imgCounter++;
            } else {
                this.imgCounter = 0;
            }
        },
        thisActive: function(index){
            this.imgCounter = index;
        },
        autoPlay: function(){
            this.autoScroll = setInterval(this.showNext, 2000)
        },
        stopAutoPlay: function(){
            clearInterval(this.autoScroll)
        },
    },
    mounted(){
        this.autoPlay();
    } 
}).mount("#app")