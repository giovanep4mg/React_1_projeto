
function SeuNome({setNome}){
    return(
        <div>
            <p>Digite seu nome:
            <input type="text" placeholder="Qual é o seu nome?" 
            onChange={(e) => setNome(e.target.value)}/>
            </p>
        </div>
    )
}
export default SeuNome;