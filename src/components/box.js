import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby';
import { colors, fonts } from '../components/csscomponents'
import Progress from '../components/progress'
const Boxcss = styled.div`
    // flex: 1;
    // flex-basis: 15vw;
    // min-width: 15vw;
    background: rgba(${colors.bg}, 1);
    border: 2px solid rgba(${colors.fg}, 1);
    box-shadow: inset 0 0 10px rgba(${colors.hl},0.5);
    position: relative;
    display: ${props => props.show ? 'block' : 'none'};
    img {
        margin: 0;
        padding: 0;
        width: 100%;
    }
    .text {
        padding: 0 15px 15px 15px;
    }
    .title h3, .progress {
        font-family: ${fonts.serif};
        padding: 5px 0;
    }
    .desc, .cats {
        font-family: ${fonts.sans};
    }
    .desc {
        font-size: 0.85rem;
    }
    h3 {
        line-height: 25px;
        padding: 0;
        margin: 0;
        font-size: 22px;
        a {
            transition: color 0.2s;
            text-decoration: none;
            color: rgba(${colors.fg}, 0.8);
            background-image: linear-gradient(transparent 1px, rgba(${colors.fg}, 1) 2px);
            background-size: 0% 2px;
            background-position: 0% 105%;
            background-repeat: no-repeat;
            transition: background-size 0.2s ease 0s, color 0.2s;

            &:hover {
                color: rgba(${colors.fg}, 1);
                background-size: 100% 3px;
            }
        }
    }
    .cats {
        margin: 0 ;
        span {
            margin: 0 ;
            padding: 0 5px;
            display: inline;
            border: 1px solid transparent;
            a {
                font-size: 0.7rem;
                text-transform: uppercase;
                text-decoration: none;
                line-height: 15px;
                height: 15px;
            }
            border-right: 1px solid rgba(${colors.hl},1);
            background-image: linear-gradient(transparent 1px, rgba(${colors.hl},1) 1px);
            background-size: 0% 1px;
            background-position: 0% 101%;
            background-repeat: no-repeat;
            transition: background-size 0.2s ease 0s;
            &:hover {
                background-size: 100% 2px;
            }
            &:first-of-type {
                padding: 0 5px 0 0;
            }
            &:last-of-type {
                border-right: 0;
            }
        }
    }
`
const Box = ({ boxProps }) => {
    const cats = boxProps.category.split(';').map((i) => {
        i = i.trim()
        i = i === 'American Civil War (1861-1865)' ? 'Civil War' : i === 'Letters (Correspondence)' ? 'Letters' : i === 'Records (Documents)' ? 'Records' : i
        return <span key={i}  ><a href="gogol.com">{i}</a></span>
    })
    const title = boxProps.title.length > 100 ? boxProps.title.substring(0,100) + '...' : boxProps.title
    const titleLink = <h3><a href={'item/' + boxProps.id} >{title}</a></h3>
    const img = boxProps.img.indexOf('default.jpg') > -1 ? boxProps.img.replace('/full/full/0/default.jpg','/square/400,/0/default.jpg') : boxProps.img  + '/full/400,/0/default.jpg'
    return (
        <Boxcss show={boxProps.show}>
            <div className="image"><img src={img} alt={title}/></div>
            <div className="text">
                { boxProps.category.length > 0 ? <div className="cats">{cats}</div> : ''}
                <div className="title">{titleLink}</div>
                <div className="desc">{boxProps.desc}</div>
                <div className="progress">
                    <Progress progressData={boxProps.progress} />
                </div>
            </div>
        </Boxcss>
    )
}
export default Box