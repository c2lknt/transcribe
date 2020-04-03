import React, { useState } from 'react'
import { navigate } from 'gatsby'
import styled from '@emotion/styled'
/** @jsx jsx */
import { jsx, css  } from '@emotion/core'
import { fonts, colors, Bluebutton, CoreBox } from './csscomponents'
import Progress from './progress'
import { TextSearch, DateSearch, LangSearch, SubjSearch } from './searchcomponents'
import { numberWithCommas } from './progress'

const Dropdowncss = styled.div`
    @media only screen and (min-width: 850px){
        display: none;
    }
    position: fixed;
    top: 50px;
    left: 50px;
    right: 50px;
    z-index: 1000;
    padding: 0 10px 5px 10px;
    background: rgba(${colors.bg},1);
    border: 1px solid rgba(${colors.fg},1);
    color: rgba(${colors.fg},1);
    box-shadow: inset 0 0 8px rgba(${colors.fg},1);
    .dropdowns {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        > * {
            min-width: 150px;
            // flex-basis: 150px;
            flex: 1;
        }
        select {
            
            margin-top: 0;
        }
    }
    .count {
        font-family: ${fonts.serif};
        text-align: center;
        display: block;
        width: 100%;
    }
`
const dropdowncss = css`

    @media only screen and (min-width: 850px){
        display: none;
    }   
    position: fixed;
    top: 50px;
    left: 50px;
    right: 50px;
    z-index: 1000;
`
const sidebarcss = css`
    
`
// let SidebarCss = styled('div')`${dynamicStyle}` 
const Sidebar = props => {
    let showHideMenu = props.showMenu ? 'block' : 'none'
    return (
        <div className="sidebar" css={css`
            @media ( min-width: 1300px ) { flex-basis: 20vw; width: 20vw; }
            @media ( min-width: 900px ) and ( max-width: 1300px ) { flex-basis: 30vw; width: 30vw; }
            @media ( max-width: 900px ) { flex-basis: 40vw; width: 40vw;}
            @media ( max-width: 800px) { display: ${showHideMenu}; }
        `}>
            <CoreBox css={css`
                @media ( min-width: 801px ) {
                    position: sticky;
                    top: 60px;
                    display: block;
                }
                @media (max-width: 800px) {
                    position: fixed;
                    top: 50px;
                    left: 50px;
                    right: 50px;
                    z-index: 1000;
                    width: auto;
                }
                padding: 20px; 
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
                
            `}>
                <div className="progress-text" >{numberWithCommas(props.progressData.totalTranscount)} out of {numberWithCommas(props.progressData.totalPages)} pages transcribed!</div>
                <Progress progressData={props.progressData} />
                <TextSearch setFilters={props.setFilters} />
                <DateSearch setFilters={props.setFilters} />
                <LangSearch setFilters={props.setFilters} />
                <SubjSearch setFilters={props.setFilters} showMenu={props.showMenu} />
                <span className="count" >{ props.resultCount === 1 ? props.resultCount + ' result.' : props.resultCount + ' results.' } </span>
                <Bluebutton><div className="wrapper"><div className="button" onClick={e => resetFilters(e, props.setFilters) }>Reset</div></div></Bluebutton>
            </CoreBox>
        </div>
    )
}

const resetFilters = (e, setFilters) => {
    e.preventDefault()
    setFilters({
        lang: 'English',
        cat:  '' ,
        date: 1 ,
        text: [] ,
    })
    
    const inputField = typeof document !== `undefined` ? document.querySelector('.searchInput') : null  
    const dropdowns = typeof document !== `undefined` ? document.querySelectorAll('.dropdown') : null  
    inputField.value = ''
    inputField.placeholder = 'Search the Transcriptions...'
    dropdowns.forEach(d => d.selectedIndex = 0) 
    navigate('/')
}

export default Sidebar