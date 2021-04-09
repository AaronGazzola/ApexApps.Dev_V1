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
		description: {
			value: blog?.description || '',
			isValid: !!blog?.description,
			isTouched: false,
			isChanged: false
		},
		paragraphs: blog
			? blog.paragraphs.map((p, i) => ({
					key: i + 1,
					subtitle: p.subtitle || '',
					body: p.body || '',
					imagePath: p.imagePath || '',
					imageLabel: p.imageLabel || '',
					isValid: !!p.body,
					isChanged: false,
					isTouched: false
			  }))
			: [
					{
						key: 1,
						subtitle: '',
						body: '',
						imagePath: '',
						imageLabel: '',
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
					let formIsValid = true;
					let formIsChanged = false;
					// run validators for current input
					let inputIsValid = validate(action.payload.value, action.validators);
					// determine whether input is changed
					const inputIsChanged =
						action.payload.id === 'title' || action.payload.id === 'description'
							? initialFormState[action.payload.id].value !==
							  action.payload.value
							: initialFormState.paragraphs.length > action.i + 1
							? !!state.paragraphs[action.i].body
							: initialFormState.paragraphs[action.i]?.[action.payload.id] !==
							  action.payload.value;

					// check formState to set validity
					state.paragraphs.forEach((p, i) => {
						if (i !== action.i) {
							formIsValid = formIsValid && p.isValid;
							formIsChanged = formIsChanged || p.isChanged;
						}
					});
					if (
						action.payload.id === 'title' ||
						action.payload.id === 'description'
					) {
						draft[action.payload.id].value = action.payload.value;
						draft[action.payload.id].isValid = inputIsValid;
						draft[action.payload.id].isChanged = inputIsChanged;
					} else if (action.payload.id === 'body') {
						formIsValid =
							formIsValid && state.title.isValid && state.description.isValid;
						formIsChanged =
							formIsChanged ||
							state.title.isChanged ||
							state.description.isChanged;
						draft.paragraphs[action.i].isChanged = inputIsChanged;
						draft.paragraphs[action.i].isValid = inputIsValid;
						draft.paragraphs[action.i][action.payload.id] =
							action.payload.value;
					} else {
						formIsValid =
							formIsValid && state.title.isValid && state.description.isValid;
						formIsChanged =
							formIsChanged ||
							state.title.isChanged ||
							state.description.isChanged;
						draft.paragraphs[action.i][action.payload.id] =
							action.payload.value;
					}
					formIsChanged = formIsChanged || inputIsChanged;
					formIsValid = formIsValid && inputIsValid && formIsChanged;
					draft.formIsValid = formIsValid;
					break;
				case 'TOUCH':
					if (
						action.payload.id === 'title' ||
						action.payload.id === 'description'
					) {
						draft[action.payload.id].isTouched = true;
					} else {
						draft.paragraphs[action.i].isTouched = true;
					}
					break;
				case 'ADD_PARAGRAPH':
					// find paragraph with highest key value, increment new key by 1
					const key =
						Math.max.apply(
							Math,
							state.paragraphs.map(p => p.key)
						) + 1;
					draft.paragraphs.push({
						key,
						subtitle: '',
						body: '',
						image: '',
						imageLabel: '',
						isValid: false,
						isChanged: false,
						isTouched: false
					});
					draft.formIsValid = false;
					break;
				case 'DELETE_PARAGRAPH':
					draft.paragraphs.splice(action.i, 1);
					draft.formIsValid = state.formIsValid;
					break;
				case 'UPLOAD_IMAGE':
					draft.paragraphs[action.i].imagePath = action.payload;
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
