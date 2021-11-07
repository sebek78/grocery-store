import { getColor } from '@utils';
import styled from 'styled-components';

const StyledForm = styled.form`
    max-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 2px solid ${() => getColor('primary')};
    border-radius: 8px;
    padding: 24px;
    margin: 24px auto 24px;
`;

export default StyledForm;
