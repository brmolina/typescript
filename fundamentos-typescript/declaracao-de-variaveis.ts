function iniciarTime(iniciaJogoEmUberlandia: boolean){
    const nome: String = 'Messi e amigos';
    let cidade: String = "em São Paulo"

    if(iniciaJogoEmUberlandia){
        cidade = 'em Uberlândia';
    }
    console.log(`${nome} vão jogar ${cidade}`);
}
iniciarTime(true);