import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    return (
        // const css = {backgroundColor: props.corPrimaria} isso seria a mesma coisa que a linha a baixo mas eu colocaria style={css}
        (props.colaboradores.length > 0) ? <section className="time" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map((colaborador, index) => {
                console.log(<Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem } aoDeletar={() => {}} />)
                return <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem } aoDeletar={() => {}}/>
            })}
            </div>
            </section>
            :''
    )
}


export default Time;