const e=document.getElementsByName("#delay"),o=document.getElementsByName("#step"),t=document.getElementsByName("#amount"),n=document.querySelector(".form");console.log(e),console.log(o),console.log(t);const l=o.value;e.value,t.value;o.addEventListener("click",(()=>{console.log(l)})),n.addEventListener("submit",(e=>{e.preventDefault(),console.log("submit")})),function(e,o){const t=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{if(t){n({position:e,delay:o})}else{l({position:e,delay:o})}}),o)}))}(2,1500).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}));
//# sourceMappingURL=03-promises.5064c534.js.map
