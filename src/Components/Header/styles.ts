import styled from 'styled-components'
import CoverImg from '../../assets/cover.png'

export const HeaderContainer = styled.div`
  display: flex;
  height: 18.5rem;
  justify-content: center;

  background-image: url(${CoverImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  img {
    width: 9.25rem;
    height: 6.125rem;
    margin-top: 4rem;
  }
`
