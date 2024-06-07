import './CampoTexto.css';

const CampoTexto = (props) => {
    const { type = 'text' } = props;

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>
                {props.label}
            </label>

            <input value={props.valor} 
            onChange={aoDigitar} 
            required={props.obrigatorio} 
            type={type} 
            placeholder={props.placeholder}
            />
        </div>
    );
}

export default CampoTexto;