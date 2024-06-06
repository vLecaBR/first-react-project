import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores, mudarCor, aoDeletar }) => {
    return (
        (colaboradores.length > 0) ? 
        <section className="time" style={{ backgroundColor: corSecundaria }}>
            <input 
                type='color' 
                className='input-cor' 
                value={corSecundaria} 
                onChange={evento => mudarCor(evento.target.value, nome)} 
            />
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, index) => (
                    <Colaborador 
                        corDeFundo={corPrimaria} 
                        key={colaborador.nome} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                        aoDeletar={aoDeletar} 
                    />
                ))}
            </div>
        </section> : null
    );
};

export default Time;
