import s from './container.module.css';

function Container(props) {
  return <div className={s.container}>{props.children}</div>;
}

export default Container;