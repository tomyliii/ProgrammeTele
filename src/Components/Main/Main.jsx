import "./main.css";
import programme from "../../assets/programme.json";
import Section from "../Section/Section";
const Main = () => {
  console.log(programme);
  return (
    <main>
      {programme.map((element, index) => {
        return <Section key={index} element={element} />;
      })}
    </main>
  );
};

export default Main;
