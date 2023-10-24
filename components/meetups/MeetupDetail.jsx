import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;

/**
 * css module
 * in a folder with a react component file, a css file with same name + '.module.css' will play a role as the css module.
 * it can be imported in the react component, and the css style will just effect the react component scope with a special hash class nam(class="MeetupDetail_detail__fx3Eg").
 * it can effectively avoid unnecessary local style pollute global style.
 * it can ensure the style just effect the current component and not overflow or pollute other scope.
 */
