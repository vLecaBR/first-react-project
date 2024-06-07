import Botao from '../Botao';
import CampoTexto from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { useState } from 'react';

const Formulario = (props, {cadastrarTime}) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar os cards</h2>
            <CampoTexto
            valor={nome} 
            aoAlterado={valor => setNome(valor)} 
            obrigatorio={true} 
            label="Nome" 
            placeholder="Digite seu nome"
            />
            <CampoTexto 
            valor={cargo} 
            aoAlterado={valor => setCargo(valor)} 
            obrigatorio={true} 
            label="Cargo" 
            placeholder="Digite seu cargo"
            />
            <CampoTexto 
            valor={imagem} 
            aoAlterado={valor => setImagem(valor)} 
            obrigatorio={true} 
            label="Imagem" 
            placeholder="Coloque o endereço da imagem"
            />
            <ListaSuspensa 
            valor={time}
            aoAlterado={valor => setTime(valor)}
            obrigatorio={true} 
            label="Time"
            itens={props.times}
            />
            <Botao>Criar Card</Botao>
        </form>
        <form onSubmit={(evento) => {
            evento.preventDefault();
            props.cadastrarTime({nome: nomeTime, cor: corTime});
            setNomeTime('');
            setCorTime('');
        }}>
            <h2>Preencha os dados para criar um time</h2>
            <CampoTexto
            valor={nomeTime} 
            aoAlterado={valor => setNomeTime(valor)} 
            obrigatorio={true} 
            label="Nome" 
            placeholder="Digite o nome do time"
            />
            <CampoTexto 
            valor={corTime} 
            aoAlterado={valor => setCorTime(valor)} 
            obrigatorio={true} 
            label="Cor" 
            type="color"
            placeholder="Digite a cor do time"
            />
            <Botao>Criar um novo time</Botao>
        </form>
        </section>
    )
}

export default Formulario;