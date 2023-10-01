import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuType {
    isOpen: boolean;
}

const initialState: MenuType = {
    isOpen: false,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        openMenu(state, action: PayloadAction<boolean>) {
            state.isOpen = action.payload;
        }
    },
});

export const { openMenu } = menuSlice.actions;
export default menuSlice.reducer;