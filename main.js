import './style.css'

const listaDeUsuarios = document.getElementById("lista-de-usuarios")

fetch("https://servidor-para-render-production.up.railway.app/usuarios")
  .then((res) => res.json())
  .then((usuarios) => {

    usuarios.forEach((usuario) => {
      const itemDeUsuario = document.createElement("li")
      itemDeUsuario.innerHTML = `${usuario.nombre} - ${usuario.edad}`

      listaDeUsuarios.appendChild(itemDeUsuario)
    })

  })
