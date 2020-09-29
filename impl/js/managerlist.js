class ManagerList {
    constructor() {
        this.arrPendente = [];
        this.arrFazendo = [];
        this.arrConcluido = [];
    }

    popularArray(tarefa,status){
        if(status=='novo')
            this.arrPendente.push(tarefa)
        else if (status=='fazendo') {
            this.arrFazendo.push(tarefa)
            
        }else if(status=='concluido') {
            this.arrConcluido.push(tarefa)
        }
    }
    
    removerTarefa(descricao,arrRemove){
        let tarefa = {};
        arrRemove.forEach(objTarefa => {
            if(objTarefa.descricao==descricao){
                tarefa = objTarefa;
                
            }
        });
        var indece = arrRemove.indexOf(tarefa);
        var removido = arrRemove.splice(indece,1);
    }

    getTarefaPendente(descricao){
        let tarefa = {};
        this.arrPendente.forEach(objTarefa => {
            if(objTarefa.descricao==descricao){
                tarefa = objTarefa;
            }
        });
        return tarefa;
    }
    

    pendentes() {
        let listaHTML = "";

        for(let i=0; i<this.arrPendente.length; i++){
            listaHTML += `
            <div> 
                Data: ${this.arrPendente[i].data} </br>
                Tarefa: ${this.arrPendente[i].tarefa} </br>
                Descrição: ${this.arrPendente[i].descricao} 
                <button onclick="controller.fazendo('${this.arrPendente[i].descricao}')">>></button>
            </div>
            <hr>
            `
        } 
        return listaHTML;
    }
     
    fazendo(){
        let listaHTML = "";        
        for(let i=0; i<this.arrFazendo.length; i++){
            listaHTML += `
            <div> 
                Data: ${this.arrFazendo[i].data} </br>
                Tarefa: ${this.arrFazendo[i].tarefa} </br>
                Descrição: ${this.arrFazendo[i].descricao} 
                <button onclick="">>></button>
            </div>
            <hr>
            `
        } 
        return listaHTML;
    }    


}