import { HeaderContainer } from './styles';

import logoImg from '../../assets/Logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
    </HeaderContainer>
  );
}
