import Botao from '../Botao';
import CampoTexto from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { useState } from 'react';

const Formulario = (props, {cadastrarTime}) => { // Adiciona a propriedade cadastrarTime
    const [nome, setNome] = useState('') // Adiciona o estado nome
    const [cargo, setCargo] = useState('') // Adiciona o estado cargo
    const [imagem, setImagem] = useState('') // Adiciona o estado imagem
    const [time, setTime] = useState('') // Adiciona o estado time
    const [nomeTime, setNomeTime] = useState('') // Adiciona o estado nomeTime
    const [corTime, setCorTime] = useState('') // Adiciona o estado corTime

    const aoSalvar = (evento) => { // Adiciona a função aoSalvar
        evento.preventDefault(); // Previne o comportamento padrão do formulário
        props.aoColaboradorCadastrado({ // Chama a função aoColaboradorCadastrado passando um objeto com os dados do colaborador
            nome,
            cargo,
            imagem,
            time
        });
        setNome('') // Limpa o estado nome
        setCargo('') // Limpa o estado cargo
        setImagem('') // Limpa o estado imagem
        setTime('') // Limpa o estado time
    }

    return (
        <section className="formulario">
        <form onSubmit={aoSalvar}> // Adiciona um evento onSubmit para chamar a função aoSalvar
            <h2>Preencha os dados para criar os cards</h2>
            <CampoTexto // Adiciona o componente CampoTexto
            valor={nome} // Passa o valor do estado nome
            aoAlterado={valor => setNome(valor)} // Passa a função para alterar o estado nome
            obrigatorio={true} // Passa a propriedade obrigatório como true
            label="Nome" // Passa o label como Nome
            placeholder="Digite seu nome" // Passa o placeholder como Digite seu nome
            />
            <CampoTexto 
            valor={cargo} // Passa o valor do estado cargo
            aoAlterado={valor => setCargo(valor)} // Passa a função para alterar o estado cargo
            obrigatorio={true} // Passa a propriedade obrigatório como true
            label="Cargo" // Passa o label como Cargo
            placeholder="Digite seu cargo" // Passa o placeholder como Digite seu cargo
            />
            <CampoTexto // Adiciona o componente CampoTexto
            valor={imagem} // Passa o valor do estado imagem
            aoAlterado={valor => setImagem(valor)} // Passa a função para alterar o estado imagem
            obrigatorio={true} // Passa a propriedade obrigatório como true
            label="Imagem" // Passa o label como Imagem
            placeholder="Coloque o endereço da imagem" // Passa o placeholder como Coloque o endereço da imagem
            />
            <ListaSuspensa // Adiciona o componente ListaSuspensa
            valor={time} // Passa o valor do estado time
            aoAlterado={valor => setTime(valor)} // Passa a função para alterar o estado time
            obrigatorio={true} // Passa a propriedade obrigatório como true
            label="Time" // Passa o label como Time
            itens={props.times} // Passa os times como itens
            />
            <Botao>Criar Card</Botao> 
        </form>
        <form onSubmit={(evento) => { // Adiciona um evento onSubmit para chamar a função cadastrarTime
            evento.preventDefault(); // Previne o comportamento padrão do formulário
            props.cadastrarTime({nome: nomeTime, cor: corTime}); // Chama a função cadastrarTime passando um objeto com os dados do time
            setNomeTime(''); // Limpa o estado nomeTime
            setCorTime(''); // Limpa o estado corTime
        }}>
            <h2>Preencha os dados para criar um time</h2>
            <CampoTexto // Adiciona o componente CampoTexto
            valor={nomeTime} // Passa o valor do estado nomeTime
            aoAlterado={valor => setNomeTime(valor)} // Passa a função para alterar o estado nomeTime
            obrigatorio={true} // Passa a propriedade obrigatório como true
            label="Nome" // Passa o label como Nome
            placeholder="Digite o nome do time" //  Passa o placeholder como Digite o nome do time
            />
            <CampoTexto // Adiciona o componente CampoTexto
            valor={corTime} // Passa o valor do estado corTime
            aoAlterado={valor => setCorTime(valor)} // Passa a função para alterar o estado corTime
            obrigatorio={true} // Passa a propriedade obrigatório como true
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