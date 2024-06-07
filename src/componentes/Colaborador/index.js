import './Colaborador.css';
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Colaborador = ({ nome, cargo, imagem, corDeFundo, aoDeletar, aoFavoritar, id, favorito }) => {

    function favoritar() {
        aoFavoritar(id);
    }

    const propsFavorito={
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={30} 
                className="deletar" 
                onClick={() => aoDeletar(id)} 
            />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className='favoritar'>
                    {favorito 
                        ? <AiFillHeart {...propsFavorito} color='red'/> 
                        : <AiOutlineHeart {...propsFavorito} />}
                </div>
            </div>
        </div>
    );
}

export default Colaborador;
