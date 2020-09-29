class Controller {
    constructor () {
        this.ManagerList = new ManagerList()
    }

    lerDados () {
        
        let data = document.getElementById('data').value
        let tarefa = document.getElementById('tarefa').value
        let descricao = document.getElementById('desc').value
        return new ToDoList(data, tarefa, descricao)
    }
    limparCampos(){
        document.getElementById('data').value="";
        document.getElementById('tarefa').value="";
        document.getElementById('desc').value="";
    }

    add(){
        
        let dados = this.lerDados()
        if (dados.data=="" || dados.tarefa=="" || dados.descricao=="") {
            alert("Todos os dados são obrigatórios");
            return false;
        }
        this.ManagerList.popularArray(dados,"novo")
        this.atualizaTarefas();
        this.limparCampos();

    }
    fazendo(descricao){        
        let ObjTarefa = this.ManagerList.getTarefaPendente(descricao);
        this.ManagerList.popularArray(ObjTarefa,"fazendo");
        let arrPendente = this.ManagerList.arrPendente;
        this.ManagerList.removerTarefa(descricao,arrPendente);
        this.atualizaTarefas();
         
    }
    atualizaTarefas(){
        //Atualiza a Div de Pendentes
        let strPendente = this.ManagerList.pendentes()
        document.getElementById("c2").innerHTML = strPendente

        //Atualiza a Div Fazendo
        let strFazendo = this.ManagerList.fazendo();
        document.getElementById("c3").innerHTML = strFazendo;
    }
}

var controller = new Controller();
