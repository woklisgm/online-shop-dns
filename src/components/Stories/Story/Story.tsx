import styles from './story.module.css';

// TODO: margin right
function Story({description, image, background}: any) {
	return (
		<div className={styles.story} style={{backgroundColor: background}}>
			<div className={styles.image}>
				<img src={image} alt="" />
			</div>
			<div className={styles.text}>
				{description}
			</div>
		</div>
	)
}

export {Story};