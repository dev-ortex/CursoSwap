const btn_copiar=document.querySelector("#btn_copia")
const cursos=[...document.querySelectorAll(".curso")]

const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")

cursos.map((e)=>{
    e.addEventListener("click", (evt)=>{
        const el = evt.target
        el.classList.toggle("destaque")
    })
})

btn_copiar.addEventListener("click", (evt)=>{
    var destaques=[...document.querySelectorAll(".destaque")]
    console.log(destaques)

    destaques.map((el)=>{
        const tbox = el.classList.contains("caixa2") ? caixa1 : caixa2;
        el.classList.toggle("caixa2");
        tbox.appendChild(el);

        el.classList.remove("destaque")
    })
})