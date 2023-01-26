import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  return (
    // Outra opçao para chamar o props
    // const css = {backgroundColor: props.corSecundaria}

    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundColor: props.corSecundaria,
          backgroundImage: "url(/images/fundo.png)",
        }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              corDeFundo={props.corPrimaria}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
