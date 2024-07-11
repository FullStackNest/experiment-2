// Array Methods
/**
 * push
 * pop
 * shift
 * unshift
 * splice
 * slice
 * map
 * filter
 * sort
 * every
 * some
 * includes
 * join
 * reduce
 * find
 * indexOf
 * 
 */

import { DATA } from "./data.js";


let root = document.getElementById("root");

// DATA.sort((a, b) => a.price - b.price).forEach(item => {
//     if (item.price < 200) {
//         root.innerHTML += `
//         <div class="card" style="width: 16rem;">
//             <img src=${item.image} class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${item.price}</h5>

//             </div>
//         </div>
//         `
//     }
// })

let priceRange = document.getElementById('priceRange');

function helper(range) {
    let condition;

    root.innerHTML = ``;
    DATA.sort((a, b) => a.price - b.price).forEach(item => {
        if (range == 1) {
            condition = item.price < 200;
        } else if (range == 2) {
            condition = item.price > 200 && item.price < 600;
        } else if (range == 3) {
            condition = item.price > 600;
        }

        if (condition) {
            root.innerHTML += `
                <div class="card" style="width: 16rem;">
                    <img src=${item.image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.price}</h5>

                    </div>
                </div>
                `
        }
    })
}

priceRange.addEventListener("change", function () {

    let value = priceRange.value;
    helper(value);
})