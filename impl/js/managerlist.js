class ManagerList {
    constructor(){
        this.arrPendente = [];
        this.arrFazendo = [];
        this.arrConcluir = [];
    }

    popularArray(tarefas){
        this.arrPendente.push(tarefas)
    }

    pendentes(){
        let listaHTML = "";
        for(let i=0; i<this.arrPendente.length; i++){
            listaHTML += `<div> Data: ${this.arrPendente[i].data} </br>
            Tarefa: ${this.arrPendente[i].tarefa} </br>
            Descrição: ${this.arrPendente[i].descricao} </div>`
        } return listaHTML;
    } 
}