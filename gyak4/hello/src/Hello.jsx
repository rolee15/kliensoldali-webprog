import "./Hello.css";
import cn from "classnames";
import PropTypes from "prop-types";

function Hello(props) {
  if (props.name === "") {
    return (
      <>
        <h1>Noone to greet</h1>
        {props.children}
      </>
    );
  }

  return (
    <>
      {[...Array(props.count)].map((e, i) => (
        <h1 className={cn({ orange: props.name === "React" })} key={i}>
          Hello {props.name}!
        </h1>
      ))}
      {props.children}
    </>
  );
}

Hello.propTypes = {
  name: PropTypes.string,
  count: PropTypes.number,
};

export default Hello;
