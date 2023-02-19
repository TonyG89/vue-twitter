
/**
* JSDoc 
* @param {string} desc
*/

import tor1 from '/images/trick-or-treat/tor1-img.webp';
import tor2 from '/images/trick-or-treat/tor2-img.webp';
import tor3 from '/images/trick-or-treat/tor3-img.webp';
import tor4 from '/images/trick-or-treat/tor4-img.webp';
import tor5 from '/images/trick-or-treat/tor5-img.webp';
import tor6 from '/images/trick-or-treat/tor6-img.webp';

const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.";

const tots = [
    {
        title: "Candy",
        img: tor1,
    },
    {
        title: "Ghost",
        img: tor2,
    },
    {
        title: "Grave",
        img: tor3,
    },
    {
        title: "House",
        img: tor4,
    },
    {
        title: "Spider",
        img: tor5,
    },
    {
        title: "Bone",
        img: tor6,
    },
];
tots.forEach((i) => (i.desc = desc));

export default tots