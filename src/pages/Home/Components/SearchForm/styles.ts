import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  input {
    width: 100%;
    height: 50px;
    margin-bottom: 3rem;
    padding: 0.75rem 1rem;
    line-height: 160%;
    border-radius: 6px;

    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
    }
  }
`
