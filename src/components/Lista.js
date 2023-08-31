import Item from "./Item";

function Lista(){
    return(
        <>
            <h1>Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1995}/>
                <Item marca="Renault" ano_lancamento={1999}/>
                <Item marca="Fiat" ano_lancamento={2020}/>
                <Item/>
            </ul>
        </>
    );
}
export default Lista;