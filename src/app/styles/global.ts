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

    main {
        padding-top: 66px;

        @media screen and (max-width: 680px) {
            padding-top: 88px;   
        }
    }

    a {
        text-decoration: none;
    }
`