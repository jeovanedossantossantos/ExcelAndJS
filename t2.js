import { post } from "axios";

const valor1 = document.getElementById("valor1")

function salvar() {
    post('https://sheetdb.io/api/v1/kb2wnmo78wvfp', {
        "data": {
            "valor1": valor1,

        }
    }, {
        "auth": {
            "username": "2effe7wv",
            "password": "k7ki0b28ky4lb68o6suv"
        }
    }).then(response => {
        console.log(response.data)
    })
}