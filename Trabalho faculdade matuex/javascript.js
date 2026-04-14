function entrar() {
    let audio = document.getElementById("musica");

    if (!audio) {
        alert("Erro: áudio não encontrado");
        return;
    }

    audio.play().then(() => {
        document.querySelector(".tela").style.display = "none";
        document.getElementById("site").style.display = "block";
    }).catch((erro) => {
        console.log("erro:", erro);
        alert("Clique novamente para ativar o som");
    });
}


const audio = document.getElementById("musica");

// começa com volume baixo
audio.volume = 0.2;

function mudarVolume(valor) {
  audio.volume = valor;
}

function toggleMusica() {
  let botao = document.querySelector("#controle-audio button");

  if (audio.paused) {
    audio.play();
    botao.textContent = "⏸";
  } else {
    audio.pause();
    botao.textContent = "▶";
  }
}