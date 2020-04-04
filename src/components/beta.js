import React from 'react'
import styled from '@emotion/styled'
import { colors, fonts } from './csscomponents'

const Betacss = styled.div`

    position: fixed;
    width: 200px;
    height: 50px;
    background: rgba(${colors.hl},1);
    top: 55px;
    left: -55px;
    text-align: center;
    line-height: 50px;
    // font-size: 13px;
    font-family: ${fonts.sans};
    text-transform: uppercase;
    font-weight: bold;
    color: rgba(${colors.bg},1);
    // line-height: 27px;
    transform:rotate(-45deg);
    box-shadow: inset 0 0 10px rgba(${colors.fg},1);
}
`

const BetaBanner = () => {
    return (
        <Betacss>
            B e t a
        </Betacss>
    )
}

export default BetaBanner