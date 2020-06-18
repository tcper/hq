import { h } from 'preact';
import style from './style';
import {useSpring, animated} from 'react-spring'

const Home = () => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (<animated.div style={props} class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
	</animated.div>);
}

export default Home;
