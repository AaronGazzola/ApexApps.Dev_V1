import React from 'react';
import useStyles from 'styles/formStyles';
import { TextField } from '@material-ui/core';

const TestScreen = () => {
	const classes = useStyles();
	return (
		<>
			<TextField
				id='title'
				label='Title'
				type='text'
				placeholder='Title'
				fullWidth
				color='secondary'
				// value={title.value}
				// onChange={e =>
				// 	changeHandler(e, [VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(100)])
				// }
				className={classes.input}
				// onBlur={touchHandler}
				// error={title.isTouched && !title.isValid}
				// helperText={
				// 	title.isTouched && !title.isValid
				// 		? 'Add a blog title below 100 characters'
				// 		: ' '
				// }
			/>
		</>
	);
};

export default TestScreen;
