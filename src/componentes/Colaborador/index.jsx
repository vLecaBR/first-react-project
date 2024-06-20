import './Colaborador.css';
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Colaborador = ({ nome, cargo, imagem, corDeFundo, aoDeletar, aoFavoritar, id, favorito }) => {

    function favoritar() {
        aoFavoritar(id); //passa o id do colaborador para a função aoFavoritar
    }

    const propsFavorito={ //propriedades do coração
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='colaborador'> 
            <AiFillCloseCircle //ícone de deletar
                size={30} //tamanho do ícone
                className="deletar" //classe do ícone
                onClick={() => aoDeletar(id)} //passa o id do colaborador para a função aoDeletar
            />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}> 
                <img src={imagem} alt={nome} /> 
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className='favoritar'>
                    {favorito 
                        ? <AiFillHeart {...propsFavorito} color='red'/> //tipo um if, se favorito for true, exibe o coração preenchido
                        : <AiOutlineHeart {...propsFavorito} /> //tipo um else, se favorito for false, exibe o coração vazio
                        } 
                </div>
            </div>
        </div>
    );
}

export default Colaborador;
