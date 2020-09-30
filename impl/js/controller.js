class Controller {
    constructor() {
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
        let arrPendente = this.ManagerList.arrPendente;      
        let ObjTarefa = this.ManagerList.getTarefa(descricao,arrPendente);
        this.ManagerList.popularArray(ObjTarefa,"fazendo");        
        this.ManagerList.removerTarefa(descricao,arrPendente);
        this.atualizaTarefas();
         
    }

    concluido(descricao){   
        let arrFazendo = this.ManagerList.arrFazendo;     
        let ObjTarefa = this.ManagerList.getTarefa(descricao,arrFazendo);
        this.ManagerList.popularArray(ObjTarefa,"concluido");       
        this.ManagerList.removerTarefa(descricao,arrFazendo);
        this.atualizaTarefas();
         
    }
    atualizaTarefas(){
        //Atualiza a Div de Pendentes
        let strPendente = this.ManagerList.pendentes()
        document.getElementById("c2").innerHTML = strPendente

        //Atualiza a Div Fazendo
        let strFazendo = this.ManagerList.fazendo();
        document.getElementById("c3").innerHTML = strFazendo;

        //Atualiza a Div Concluido
        let strConcluido = this.ManagerList.concluido();
        document.getElementById("c4").innerHTML = strConcluido;
    }
}

var controller = new Controller();
