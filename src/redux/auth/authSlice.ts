import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserType {
  id_user: string;
  name: string;
  user_token: string;
  email: string;
  cpf: string;
}

interface AuthState {
  user: UserType | null;
  messageLogin: string;
  messageRegister: string;
}

const initialState: AuthState = {
  user: null,
  messageLogin: '',
  messageRegister: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserType>) {
      state.user = action.payload;
    },
    setMessageRegister(state, action: PayloadAction<string>) {
      state.messageRegister = action.payload
    },
    setMessageLogin(state, action: PayloadAction<string>) {
      state.messageLogin = action.payload;
    },
    logout(state) {
      state.user = null;
      state.messageLogin = '';
    },
  },
});

export const { login, logout, setMessageLogin, setMessageRegister } = authSlice.actions;
export default authSlice.reducer;