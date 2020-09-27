class ToDoList{
    constructor(){
        this.arrPendente = [];
        this.arrFazendo = [];
        this.arrConcluir = [];
    }
    pegarDadosTela(){
        return document.getElementById("c1").value;
    }
    popularArray(){
        this.arrPendente.push(this.pegarDadosTela())
    }
    listaDePendentes(){
        let listaHTML = "";
        for(let i=0; i<this.arrPendente.length; i++){
            listaHTML += `<div> ${this.arrPendente[i]}</div>`
        }
        return listaHTML;
    }
    injetarHTML(m){
        document.getElementById("c2").innerHTML = m;
        
    }
    add(){
        this.popularArray();
        this.injetarHTML(this.listaDePendentes());
        document.getElementById("c1").value = "";
    }

}


var tDL = new ToDoList();