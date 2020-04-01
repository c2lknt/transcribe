import React, { useState } from 'react'
/** @jsx jsx */
import { jsx, css  } from '@emotion/core'
import { fonts, colors, Bluebutton, CoreBox } from './csscomponents'
import Progress from './progress'
import { TextSearch, DateSearch, LangSearch, SubjSearch } from './searchcomponents'
import { numberWithCommas } from './progress'

const Sidebar = props => {
    return (
        <div className="sidebar">
            <CoreBox css={css`
                // flex-basis: calc(20vw - 30px);
                // width: calc(20vw - 30px);
                // margin: 0 30px;
                padding: 20px; 
                position: sticky;
                top: 60px;
                > p {
                    font-family: ${fonts.serif};
                    text-transform: uppercase;
                    text-align: center;
                }
                .count {
                    font-family: ${fonts.serif};
                }
                .count, .progress-text {
                    text-align: center;
                    display: block;
                    width: 100%;
                }
                .progress-text {
                    font-family: ${fonts.sans};
                    font-size: 0.85rem;
                    text-transform: uppercase;
                }
            `} >
                <div className="progress-text" >{numberWithCommas(props.progressData.totalTranscount)} out of {numberWithCommas(props.progressData.totalPages)} pages transcribed!</div>
                <Progress progressData={props.progressData} />
                <TextSearch />
                <DateSearch />
                <LangSearch />
                <SubjSearch />
                <span className="count" >{ props.resultCount === 1 ? props.resultCount + ' result.' : props.resultCount + ' results.' } </span>
                <Bluebutton><div className="wrapper"><div className="button">Reset</div></div></Bluebutton>
            </CoreBox>
        </div>
    )
}

export default Sidebar