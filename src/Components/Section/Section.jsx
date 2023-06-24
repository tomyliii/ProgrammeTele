import "./section.css";

const Section = (props) => {
  console.log("ici2", props.element.time);
  return (
    <section>
      <div>
        <p>{props.element.time}</p>
      </div>
      <div>
        <img src={props.element.image} alt="image du programme" />
      </div>
      <div>
        <h2>{props.element.title}</h2>
        <p>{props.element.type}</p>

        <div>
          <p>{props.element.duration}</p>
          {props.element.isUnseen && (
            <li>
              <i class="fa-solid fa-circle"></i>&nbsp; Inédit
            </li>
          )}
          {props.element.direct && (
            <li>
              <i class="fa-solid fa-circle"></i>&nbsp; Direct
            </li>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section;
