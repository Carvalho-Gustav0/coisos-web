'use client'

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Heebo', sans-serif;
        font-size: 16px;
    }

    a {
        text-decoration: none;
    }
`