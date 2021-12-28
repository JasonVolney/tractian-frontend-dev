import React, { useEffect, useState } from 'react'
import { JSON_API } from '../helpers/Constants'
import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const Container = styled.div`
    max-width: 1360px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    &:before,
    &:after {
        content: "";
    display: table;
    }
    &:after {
        clear: both;
    }
`

export const Row = styled.div`
    width: 100%;
    height: auto;
    float: left;    
    box-sizing: border-box;
    &:before,
    &:after {
        content: "";
    display: table;
    }
    &:after {
        clear: both;
    }
`;

function getWidthGrid(value){
    if(!value) return;

    let width = value / 12 * 100;
    return `width: ${width}%;`;
}

export const Column = styled.div`
    float: left;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;
    width: 100%;
    
    @media only screen and (min-width: 768px){        
        ${({mobile}) => mobile && getWidthGrid(mobile)};
    }

    @media only screen and (min-width: 768px){
        ${({tablet}) => tablet && getWidthGrid(tablet)};
    }

    @media only screen and (min-width: 768px){
        ${({desktop}) => desktop && getWidthGrid(desktop)};
    }
`
// width: ${props =>(props.grid ? props.grid / 12 * 100 : '8:33')}%;

const iconStyles = {
    height: '30px',
    width: 'auto',
    color: '#eee',
    textAlign: 'center',
    padding: '4px',
    marginLeft: '0px',
    cursor: 'pointer'   
}

const imgStyles = {     
    height: 'auto',
    borderRadius: '10px',
    marginTop: '20px',   
    background: '#C4C4C4',    
    filter: 'grayscale(100%)',
    float: 'right'
}

const textStyles = {
    width: '560px',
    fontSize: '24px',
    color: '#000',
    marginLeft: '0px',
    paddingTop: '0px',
    textAlign: 'center',
    verticalAlign: 'center',
    justifyContent: 'center',
    display: 'flex'
}

const titleStyles = {
    width: '560px',
    fontSize: '24px',
    color: '#000',
    paddingTop: '80px',
    marginLeft: '65px',
    textAlign: 'center',
    verticalAlign: 'center',
    justifyContent: 'center',
    display: 'flex'
}

const viewStyles = {
    height: '100px',
    borderRadius: '10px',
    background: '#f1f1f1',
    textAlign: 'center',
    verticalAlign: 'center',
    justifyContent: 'center',
    display: 'flex'
}

const datasheetStyles = {
    height: 'auto',
    borderRadius: '10px',
    background: '#f1f1f1', 
    textAlign: 'justify-all',
    padding:'35px',
    verticalAlign: 'center',
    justifyContent: 'center'
}


const Sensor = () => {    
        const [assets, setAssets] = useState(null);
        const [units, setUnits] = useState(null);   
        const [companies, setCompanies] = useState(null);        
        
            useEffect(() => {
                fetch(`${JSON_API}/assets?_page=1&_limit=20`)
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        // console.log(data);
                        setAssets(data);
                    });
            }, []);

            useEffect(() => {
                fetch(`${JSON_API}/units?_page=1&_limit=2`)
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        // console.log(data);
                        setUnits(data);
                    });
            }, []);   
            
            useEffect(() => {
                fetch(`${JSON_API}/companies?_page=1&_limit=1`)
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        // console.log(data);
                        setCompanies(data);
                    });
            }, []);
          

            // Controla os cards
            useEffect(() =>{
                const cards = document.querySelectorAll('.card');

                let hasFlippedCard = false;
                let lockBoard = false;
                let firstCard, secondCard;

                function flipCard() {
                if (lockBoard) return;
                if (this === firstCard) return;

                this.classList.add('flip');

                if (!hasFlippedCard) {
                    // first click
                    hasFlippedCard = true;
                    firstCard = this;

                    return;
                }

                // second click
                secondCard = this;

                checkForMatch();
                }

                function checkForMatch() {
                let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

                isMatch ? disableCards() : unflipCards();
                }

                function disableCards() {
                firstCard.removeEventListener('click', flipCard);
                secondCard.removeEventListener('click', flipCard);

                resetBoard();
                }

                function unflipCards() {
                lockBoard = true;

                setTimeout(() => {
                    firstCard.classList.remove('flip');
                    secondCard.classList.remove('flip');

                    resetBoard();
                }, 500);
                }

                function resetBoard() {
                [hasFlippedCard, lockBoard] = [false, false];
                [firstCard, secondCard] = [null, null];
                }

                (function shuffle() {
                cards.forEach(card => {
                    let randomPos = Math.floor(Math.random() * 12);
                    card.style.order = randomPos;
                });
                })();

                cards.forEach(card => card.addEventListener('click', flipCard));
                      
            })

        return (
            <Container>
                <Row>
                    <Column mobile="3" tablet="6" desktop="11">
                        {companies && companies.map((companies) => (          
                            <p style={titleStyles}>Company: {companies.name}</p>
                        ))}             
                        {units && units.map((units) => (
                        <div className="View" key={units.id} style={viewStyles}>
                                <p>{units.name}</p>
                        </div>
                        ))}
                    </Column>
                    <Column mobile="3" tablet="6" desktop="1">
                        <p style={textStyles}>Specifications: </p>
                        {assets && assets.map((assets) => (
                            <div className="DataSheet" key={assets.id} style={datasheetStyles}>
                            <img src={assets.image} className="back-face" alt="images" style={imgStyles}/>
                                <button className='btnShowImg' type='button'><Icon icon="icons8:home" style={iconStyles} /></button>
                                <button className='btnShowImg' type='button'><Icon icon="ic:outline-content-paste-search" style={iconStyles} /></button>                                
                                <button className='btnShowImg' type='button'><Icon icon="akar-icons:arrow-back-thick" style={iconStyles} /></button>
                            <ul>
                                <li><p>Speed Rotation: </p>{assets.specifications.rpm}RPM</li><br/>
                                <li><p>Temperature Max: </p>{assets.specifications.maxTemp}°F</li><br/>
                                <li><p>Power: </p>{assets.specifications.power} kW</li><br/>
                                <li><p>Health Score: </p>{assets.healthscore}%</li><br/>
                                <li><p>Total Collects Uptime: </p>{assets.metrics.totalCollectsUptime} hours</li><br/>
                                <li><p>Total Uptime: </p>{assets.metrics.totalUptime} hours</li><br/>
                                <li><p>Last Uptime At: </p>{assets.metrics.lastUptimeAt} datetime</li><br/>
                            </ul>                    
                        </div>
                        ))}    
                    </Column>
                    {/* <Column mobile="3" tablet="6" desktop="1">
                    <section class="section-box">
                        {assets && assets.map((assets) => (
                            <div className="card" key={assets.id}>  
                                <img src={assets.image} alt="images" style={imgStyles}/>
                                <img src='/images/tractian-logo.png' className="back-face" alt="images"/>
                            </div>                                          
                        ))} 
                    </section>
                    </Column>                  */}
                </Row>
            </Container>
        )    
}

export default Sensor;
