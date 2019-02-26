let res = 0;
let flag = true;
function count(i){
    res += i;
    document.querySelector(".counts").innerHTML = res;
    document.querySelector(".button").setAttribute("clicked","");

    setTimeout(() => {
        if (document.querySelector(".button").hasAttribute("clicked")){
            console.log("YES");
             res = 0;
             document.querySelector(".counts").innerHTML = res;
            document.querySelector(".button").removeAttribute("clicked")
        } else {
            document.querySelector(".button").removeAttribute("clicked")
        }

        // res = 0;
        // document.querySelector(".counts").innerHTML = res;
    }, 1000);

    // if (flag) {
    //     setInterval(() => {
    //         res = 0;
    //         document.querySelector(".counts").innerHTML = res;
    //     }, 1000);
    //     console.log("run");
    // } else {
    //     flag = true;
    //     console.log("not run");
    // }   
   
}
// function counts(){
//     setInterval(() => {
//         res = 0;
//         document.querySelector(".counts").innerHTML = res;
//     }, 1000);
// }
