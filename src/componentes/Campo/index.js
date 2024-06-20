import './CampoTexto.css';

const CampoTexto = (props) => { // Adiciona a propriedade props
    const { type = 'text' } = props; // Adiciona a propriedade type

    const aoDigitar = (evento) => { // Adiciona a função aoDigitar
        props.aoAlterado(evento.target.value) // Chama a função aoAlterado passando o valor do input
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>
                {props.label} 
            </label>

            <input value={props.valor} // Adiciona o valor do input
            onChange={aoDigitar} // Adiciona o evento onChange
            required={props.obrigatorio} // Adiciona a propriedade required
            type={type} // Adiciona a propriedade type
            placeholder={props.placeholder} // Adiciona a propriedade placeholder
            />
        </div>
    );
}

export default CampoTexto;