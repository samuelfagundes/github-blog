import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: -5rem 0 4.5rem;
  padding: 2rem;
  max-width: 54rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  footer {
    margin-top: 0.5rem;

    i {
      color: ${(props) => props.theme['base-label']};
      margin-right: 0.5rem;
    }

    svg {
      color: ${(props) => props.theme['base-label']};
      margin-left: 1.5rem;
      margin-right: 0.5rem;
    }
  }
`

export const PostInfoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${(props) => props.theme.blue};
  font-size: 0.75rem;
  line-height: 160%;

  svg {
    width: 12px;
    height: 12px;
  }
`

export const PostInfoContent = styled.div`
  display: flex;
  margin-top: 1.25rem;

  h1 {
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
`
