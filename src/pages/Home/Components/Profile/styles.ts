import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin: -5rem 0 4.5rem;
  padding: 2rem;
  max-width: 54rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  div {
    max-height: 9.25rem;
  }

  img {
    width: 9.25rem;
    height: 9.25rem;
    margin-left: 0.5rem;
    margin-right: 2rem;
    border-radius: 8px;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  h1 {
    display: flex;
    margin-bottom: 0.5rem;
    justify-content: space-between;
    color: ${(props) => props.theme['base-title']};

    p {
      font-size: 0.75rem;
      color: ${(props) => props.theme.blue};

      svg {
        width: 12px;
        height: 12px;
      }
    }
  }

  span {
    margin-bottom: 1.5rem;
  }

  footer {
    svg {
      margin-left: 1rem;
    }
  }
`
