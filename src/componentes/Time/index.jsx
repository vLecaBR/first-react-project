import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = ({ id, nome, corPrimaria, aoFavoritar, colaboradores, mudarCor, aoDeletar }) => { // Adiciona a propriedade aoDeletar
    return (
        (colaboradores.length > 0) ? // Adiciona um if ternário para verificar se o time possui colaboradores
        <section className="time" style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(corPrimaria, 0.5) }}> // Adiciona um background com a cor primária
            <input // Adiciona um input para mudar a cor do time
                type='color' // Define o tipo do input como cor
                className='input-cor' // Adiciona uma classe ao input
                value={corPrimaria} // Define o valor do input como a cor primária
                onChange={evento => mudarCor(evento.target.value, id)} // Adiciona um evento para mudar a cor do time
            />
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3> 
            <div className='colaboradores'>
                {colaboradores.map((colaborador) => ( // Mapeia os colaboradores
                    <Colaborador // Adiciona o componente Colaborador
                        corDeFundo={corPrimaria} // Passa a cor primária para o componente Colaborador
                        key={colaborador.id} // Passa a chave para o componente Colaborador
                        id={colaborador.id} // Passa o ID para o componente Colaborador
                        nome={colaborador.nome} // Passa o nome para o componente Colaborador
                        cargo={colaborador.cargo} // Passa o cargo para o componente Colaborador
                        imagem={colaborador.imagem} // Passa a imagem para o componente Colaborador
                        aoDeletar={() => aoDeletar(colaborador.id)} // Passa a função aoDeletar para o componente Colaborador
                        aoFavoritar={aoFavoritar} // Passa a função aoFavoritar para o componente Colaborador
                        favorito={colaborador.favorito} // Passa o favorito para o componente Colaborador
                    />
                ))}
            </div>
        </section> : null // Adiciona um else para caso o time não possua colaboradores
    );
};

export default Time;
