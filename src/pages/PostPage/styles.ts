import styled from 'styled-components'

export const PostPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 5rem;
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

  pre {
    display: flex;
    margin: 1.5rem 0;

    code {
      padding: 1rem;
    }
  }

  code {
    width: 100%;
    padding: 0.25rem;
    border-radius: 2px;
    line-height: 160%;

    background-color: ${(props) => props.theme['base-post']};
  }
`
