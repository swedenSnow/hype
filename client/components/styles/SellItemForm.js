import styled from 'styled-components';

const SellItemForm = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 3rem;
	form {
		width: 80%;
		padding: 1rem;
		label {
			display: block;
			margin-bottom: 0.5rem;
			font-weight: 700;
		}

		input {
			width: 100%;
			border: 1px solid black;
		}

		textarea {
			width: 100%;
			border: 1px solid black;
		}
	}

	@media (min-width: 576px) {
		form {
			width: 75%;
		}
	}

	@media (min-width: 768px) {
		form {
			max-width: 500px;
		}
	}

	@media (min-width: 992px) {
	}
`;

export { SellItemForm };
