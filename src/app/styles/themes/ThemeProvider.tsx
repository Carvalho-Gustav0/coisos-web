'use client'

import { ThemeProvider } from "styled-components";
import { MainTheme } from "./theme";

export default function UserThemeProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider theme={MainTheme}>
            {children}
        </ThemeProvider>
    )
}