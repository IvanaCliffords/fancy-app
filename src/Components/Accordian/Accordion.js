import React, { useState } from "react";
import { Data } from "./Data";
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';





const FaqSection = styled.div`

margin: 4rem 0;
display: grid;
justify-content: center;
align-content: center;

`

const AccordionSection = styled.div`
margin: 7rem auto;
display: flex;
flex-direction: column;

`;

const Container = styled.div`

width: 25rem;
margin: 8rem auto;
border-bottom: 1px solid #e8e8ea;

@media (min-width: 55em) {
    width: 35rem;
}

`

const FaqQuestions = styled.div`
height: 100%;
display: flex;
flex-direction: column;

`;


const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    flex-direction: row;
    cursor: pointer;
    transition: 500ms;

    h3 {
        font-size: 1.2rem;
        font-weight: 400;
        margin: 1.4rem 0;
        letter-spacing: .5px;
    }


`;

const Dropdown = styled.div`
    border-bottom: 1px solid #e8e8ea;
    padding-bottom: 1.3rem;
    line-height: 2rem;




`;





const Accordion = () => {

    const [clicked, setClicked] = useState('');


    const toggle = (index) => {
        console.log(index);
        // if clicked question is already active, then close it
        if (clicked == index) {
            return setClicked('');
        }
        setClicked(index);
    }
    return (
        <IconContext.Provider value={{ color: "hsl(12,86%,68%)", size: "25px" }}>
            <FaqSection>
                <AccordionSection>  {/* faq-wrapper*/}
                    <h1 className="faq-title">Common Questions</h1>
                    <FaqQuestions> {/* faq-questions*/}


                        <Container> {/* faq-question-annswer*/}

                            {/* returning  */}
                            {Data.map((item, index) => {

                                return (
                                    <div key={index}>

                                        <Wrap onClick={() => toggle(index)} > {/* question*/}
                                            <h3>{item.question}</h3>
                                            <span>{clicked == index ? <FiMinus /> : <FiPlus />}</span>
                                        </Wrap>
                                        {clicked == index && (
                                            <Dropdown> {/* answer*/}
                                                <p>{item.answer}</p>
                                            </Dropdown>

                                        )}

                                    </div>
                                )
                            })}
                        </Container>

                    </FaqQuestions>
                </AccordionSection>
            </FaqSection>
        </IconContext.Provider>
    )
}

export default Accordion;