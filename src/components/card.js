import React from 'react'
import styled from "styled-components";
const OuterWrapper = styled.div`
 width:auto;
  margin:50px;
  box-shadow:4px 4px 8px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 1000px) {
        margin:0px;
  }
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
    overflow-x: hidden;
    @media (max-width: 1000px) {
        flex-direction:column;
  }
`;

const Heading = styled.div`
padding:10px 0px;
justify-content:center;
width:100%;
font-weight:bold;
font-size:2rem;
`;

const Pic = styled.div`
 justify-content:center;  
width:60%;
font-weight:bold;
font-size:2rem;
@media (max-width: 1000px) {
   width:auto;
  
   margin-right:53px;
   
   justify-content:left;
  }
`;

const Image = styled.img`
 box-shadow:4px 4px 8px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
margin:30px;
width:100%;
@media (max-width: 1000px) {
  height:22rem; 
  }
`
const Details = styled.div`
align-items:center;
width:40%;
margin:30px;
  display: flex;
  max-width: 100%;
  flex-direction:column;
  @media (max-width: 1000px) {
    flex-direction: column;
    width:100%;
    margin:0px;
    align-items:left;
  }
`
const Details1 = styled.div`
width:100%;
margin-bottom:15px;
  max-width: 70%;
  flex-direction:column;
 border-radius:7px;
  box-shadow:4px 4px 8px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 1000px) {
   width:100%;
   margin-bottom:30px;
   align-items:left;
  }
`

const Subheading = styled.div`
padding:5px;
font-size:1.5rem;
background-color:#4CAF50;
border-bottom:2px solid green;
`
const Card = () => {
    return (
        <OuterWrapper>
            <Heading>
                HTML CSS
                </Heading>
            <Wrapper>
                <Pic>
                    <Image src="http://demo.yolotheme.com/html/motor/images/demo/demo_131.jpg" />
                </Pic>
                <Details>
                    <Details1>
                        <Subheading>Duration</Subheading>

                        <ul style={{ listStyleType: "circle", textAlign: "left", letterSpacing: "2px", lineHeight: "15px;" }}>
                            <li>
                                90 lectures
                            </li>
                            <li>
                                15 Hours
                            </li>
                            <li>
                                10 days approximately.
                            </li>
                        </ul>
                    </Details1>
                    <Details1>
                        <Subheading>Course Content</Subheading>


                        <ul style={{ listStyleType: "circle", textAlign: "left", letterSpacing: "2px" }}>
                            <li>
                                Elements
                            </li>
                            <li>
                                Attributes
                            </li>
                            <li>
                                Links
                            </li>
                            <li>
                                HTML Forms
                            </li>
                            <li>
                                HTML Javascript
                            </li>
                            <li>
                                HTML Filepaths
                            </li>
                            <li>
                                HTML Tables
                            </li>
                            <li>
                                HTML Input types
                            </li>
                            <li>
                                HTML Filepaths
                            </li>
                            <li>
                                HTML Tables
                            </li>
                            <li>
                                HTML Input types
                            </li>
                        </ul>
                    </Details1>

                </Details>

            </Wrapper>
        </OuterWrapper>

    )
}

export default Card
