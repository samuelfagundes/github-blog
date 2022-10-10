import styled from 'styled-components'

export const PostPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 54rem;
`

export const PostPageContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  p {
    line-height: 160%;

    a {
      color: ${(props) => props.theme.blue};
    }
  }

  code {
    width: 100%;
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 2px;
    line-height: 160%;

    background-color: ${(props) => props.theme['base-post']};
  }
`
