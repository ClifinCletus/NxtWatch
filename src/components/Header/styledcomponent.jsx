import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  background-color: ${({dark}) => (dark ? '#212121' : '#ffffff')};
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  position: fixed;
 top: 0;
 left: 0;
 right: 0;

  border-bottom: 1px solid ${({dark}) => (dark ? '#444' : '#ccc')};
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

export const Logo = styled.img`
  height: 35px;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ThemeToggleBtn = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({dark}) => (dark ? '#ffffff' : '#000000')};
`

export const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

export const LogoutBtn = styled.button`
  background-color: transparent;
  border: 1px solid #0b69ff;
  color: #0b69ff;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
`

export const LogoutPopup = styled.div`
  position: absolute;
  top: 70px;
  right: 30px;
  background-color: ${({dark}) => (dark ? '#424242' : '#ffffff')};
  color: ${({dark}) => (dark ? '#ffffff' : '#000000')};
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 10;
  border-radius: 8px;
`

export const PopupButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;

  & > button {
    padding: 6px 10px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
  }

  & > button:first-child {
    background-color: transparent;
    color: #7e858e;
    border: 1px solid #7e858e;
  }

  & > button:last-child {
    background-color: #3b82f6;
    color: white;
  }
`
