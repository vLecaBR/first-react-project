import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [times, setTimes] = useState([ // Adiciona um ID único para cada time
    {
      id: uuidv4(),
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      id: uuidv4(),
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]);

  const [colaboradores, setColaboradores] = useState([]); // Adiciona um estado para os colaboradores

  const aoNovoColaboradorAdd = (colaborador) => {
    const novoColaborador = { ...colaborador, id: uuidv4(), favorito: false }; // Adiciona um UUID ao novo colaborador
    setColaboradores([...colaboradores, novoColaborador]); // Adiciona o novo colaborador ao estado de colaboradores
  };

  const deletarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id)); // Filtra os colaboradores que não possuem o ID passado
  };

  const mudarCorDoTime = (cor, id) => { // Adiciona a função mudarCorDoTime
    setTimes(times.map(time => { // Mapeia os times
      if (time.id === id) { // Verifica se o ID do time é igual ao ID passado
        return { ...time, corPrimaria: cor }; // Cria um novo objeto time com a cor atualizada
      }
      return time;
    }));
  };

  const cadastrarTime = (novoTime) => { // Adiciona a função cadastrarTime
    setTimes([...times, { id: uuidv4(), ...novoTime }]) //  Adiciona um novo time ao estado de times
  }

  const resolverFavorito = (id) => { // Adiciona a função resolverFavorito
    setColaboradores(colaboradores.map(colaborador => { // Mapeia os colaboradores
      if (colaborador.id === id) { // Verifica se o ID do colaborador é igual ao ID passado
        colaborador.favorito = !colaborador.favorito; // Inverte o valor do favorito
      }
      return colaborador;
    }));
  }

  return (
    <div className="App">
      <Banner /> 
      <Formulario // Adiciona o componente Formulario
        cadastrarTime={cadastrarTime} // Passa a função cadastrarTime para o componente Formulario
        times={times.map(time => time.nome)} // Passa os nomes dos times para o componente Formulario
        aoColaboradorCadastrado={aoNovoColaboradorAdd} // Passa a função aoNovoColaboradorAdd para o componente Formulario
      />
      {times.map(time => ( // Mapeia os times
        <Time // Adiciona o componente Time
          aoFavoritar={resolverFavorito} // Passa a função resolverFavorito para o componente Time
          mudarCor={mudarCorDoTime} // Passa a função mudarCorDoTime para o componente Time
          key={time.id} // Passa a chave para o componente Time
          id={time.id} // Passa o ID para o componente Time
          nome={time.nome} // Passa o nome para o componente Time
          corPrimaria={time.corPrimaria} // Passa a cor primária para o componente Time
          corSecundaria={time.corSecundaria} // Passa a cor secundária para o componente Time
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} // Passa os colaboradores do time para o componente Time
          aoDeletar={deletarColaborador} // Passa a função deletarColaborador para o componente Time
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
