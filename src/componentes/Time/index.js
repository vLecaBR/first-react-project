import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = ({ id, nome, corPrimaria, aoFavoritar, colaboradores, mudarCor, aoDeletar }) => {
    return (
        (colaboradores.length > 0) ? 
        <section className="time" style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(corPrimaria, 0.5) }}>
            <input 
                type='color' 
                className='input-cor' 
                value={corPrimaria} 
                onChange={evento => mudarCor(evento.target.value, id)} 
            />
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador) => (
                    <Colaborador 
                        corDeFundo={corPrimaria} 
                        key={colaborador.id} 
                        id={colaborador.id}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                        aoDeletar={() => aoDeletar(colaborador.id)} 
                        aoFavoritar={aoFavoritar}
                        favorito={colaborador.favorito}
                    />
                ))}
            </div>
        </section> : null
    );
};

export default Time;
