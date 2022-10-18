import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  margin-bottom: -5rem;

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    width: 26rem;
    height: 16.25rem;
    padding: 2rem;
    border-radius: 10px;
    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-post']};

    > div {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.25rem;

      h1 {
        font-size: 1.25rem;
        flex: 1;
      }
    }

    > p {
      display: block;
      display: -webkit-box;
      font-size: 1rem;
      line-height: 25.6px;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    :last-child {
      margin-bottom: 5rem;
    }

    :hover {
      animation-name: pop-up;
      animation-duration: 0.5s;
    }
  }

  @keyframes pop-up {
    0% {
      margin-top: 0;
    }

    50% {
      margin-top: -10px;
    }

    100% {
      margin-top: 0;
    }
  }
`
