import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  border-radius: 10px;
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
    max-height: 7rem;
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
`
