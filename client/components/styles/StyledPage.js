import styled from 'styled-components';

const StyledPage = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding: 0.5rem 0;

	@media (min-width: 576px) {
		padding: 1rem;
	}

	@media (min-width: 768px) {
		padding: 2rem;
	}
`;

export default StyledPage;
