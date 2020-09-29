class Controller {
    constructor() {
        this.ManagerList = new ManagerList()
    }

    lerDados() {
        let data = document.getElementById('data').value
        let tarefa = document.getElementById('tarefa').value
        let descricao = document.getElementById('desc').value
        return new ToDoList(data, tarefa, descricao)
    }

    add() {
        let dados = this.lerDados()
        this.ManagerList.popularArray(dados);
        let pendente = this.ManagerList.pendentes()
        document.getElementById("resultPend").innerHTML = pendente
    }
}

var controller = new Controller();
