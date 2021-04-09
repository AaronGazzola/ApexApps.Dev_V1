import { useReducer } from 'react';
import { produce } from 'immer';
import { validate } from 'utils/validators';

const useBlogForm = blog => {
	const initialFormState = {
		formIsValid: false,
		title: {
			value: blog?.title || '',
			isValid: !!blog?.title,
			isTouched: false,
			isChanged: false
		},
		paragraphs: blog
			? blog.paragraphs.map(p => ({
					subTitle: p.subtitle,
					body: p.body,
					image: p.image,
					isValid: !!p.body,
					isChanged: false,
					isTouched: false
			  }))
			: [
					{
						subtitle: '',
						body: '',
						image: {
							label: '',
							path: ''
						},
						isValid: false,
						isChanged: false,
						isTouched: false
					}
			  ]
	};

	const formReducer = (state, action) =>
		produce(state, draft => {
			switch (action.type) {
				case 'CHANGE':
					break;
				case 'RESET':
					return initialFormState;
				default:
					break;
			}
		});
	const [formState, formDispatch] = useReducer(formReducer, initialFormState);
	return [formState, formDispatch];
};

export default useBlogForm;
