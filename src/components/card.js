import React from 'react'
import styled from "styled-components";
import './card.css';
const OuterWrapper = styled.div`
 width:auto;
  margin:50px;
  height:auto;
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

const Body = styled.div`
padding:5px;
font-size:1.5rem;
margin-bottom:1.5rem;
/* background-color:#4CAF50; */
border-bottom:2px solid green;
`

const SideHeading = styled.h3`
text-align:left;
padding-left:4rem;
@media (max-width: 1000px) {
    text-align:center;    
   margin-bottom:30px;
   align-items:center;
   margin:1px 2rem;
   padding-left:0rem;
  }
`
const SideParagraph = styled.p`
text-align:left;
margin:0rem 4rem;
margin-bottom:2rem;
@media (max-width: 1000px) {
 text-align:center;
 margin:0rem 0.5rem;
  }
`
const Dropdown = styled.li`
position: relative;
  
  a { text-decoration: none; }

  [data-toggle="dropdown"] {
      display: block;
      color: white;
      background: $orange;
      padding: 10px;
  
  &:before {
          position: absolute;
          display: block;
    content: '\25BC';
          font-size: 0.7em;
          color: #fff;
          top: 13px;
          right: 10px;
          @include transform(rotate(0deg));
          @include transition(transform .6s);
      }
  }

  & > .dropdown-menu {
      max-height: 0;
      overflow: hidden;
      @include ul-nostyle;
      @include transform(scaleY(0));
      @include transform-origin(50%, 0%);
      @include transition(max-height .6s ease-out);
      @include animation(hideAnimation .4s ease-out);

      li {
          padding: 0;

          a {
              display: block;
              color: darken($gray, 50%);
              background: $gray;
              @include double-shadow($gray);
              @include hover-style($gray);
              @include text-shadow(0 -1px 0 rgba(255,255,255,0.3));
              padding: 10px 10px;
          }
      }
  }

& > input[type="checkbox"] {
  opacity: 0;
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  
  &:checked ~ .dropdown-menu {
    max-height: 9999px;
          display: block;
          @include transform(scaleY(1));
          @include animation(showAnimation .5s ease-in-out);
          @include transition(max-height 2s ease-in-out);
  }
  
  &:checked + a[data-toggle="dropdown"] {
    &:before {
      @include transform(rotate(-180deg));
      @include transition(transform .6s);
    }
  }
}   
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
            <hr></hr>
            <Body>
                <SideHeading>Brief Introduction:</SideHeading>
                <SideParagraph>
                    HTML, HyperText Markup Language, gives content structure and meaning by defining that content as, for example, headings, paragraphs, or images. CSS, or Cascading Style Sheets, is a presentation language created to style the appearance of content—using, for example, fonts or colors.

                    The two languages—HTML and CSS—are independent of one another and should remain that way. CSS should not be written inside of an HTML document and vice versa. As a rule, HTML will always represent content, and CSS will always represent the appearance of that content.
                   
                    With this understanding of the difference between HTML and CSS, let’s dive into HTML in more detail.
                </SideParagraph>
                <SideHeading>Course Details</SideHeading>
                <div id="demo">
    <div className="wrapper">
        <div className="content">
        <ul>
                <a href="#"><li>Attributes</li></a>
                <a href="#"><li> Headings</li></a>
                <a href="#"><li>Paragraphs</li></a>
                <a href="#"><li>Lists</li></a>
            </ul>
        </div>
        <div className="parent" >Introduction </div>
    </div>
    
    
  
    </div>
    <div id="demo">
    <div className="wrapper">
        <div className="content">
        <ul>
                <a href="#"><li>Heading Tag</li></a>
                <a href="#"><li>Paragraph Tag</li></a>
                <a href="#"><li>Div Tag</li></a>
                
            </ul>
        </div>
        <div className="parent" >About Tags </div>
    </div>
    
    
  
    </div>
    <div id="demo">
    <div className="wrapper">
        <div className="content">
        <ul>
        <a href="#"><li>Heading Tag</li></a>
                <a href="#"><li>Paragraph Tag</li></a>
                <a href="#"><li>Div Tag</li></a>
                
            </ul>
        </div>
        <div className="parent" >Elements </div>
    </div>
    
    
  
    </div>
    <div id="demo">
    <div className="wrapper">
        <div className="content">
        <ul>
        <a href="#"><li>Heading Tag</li></a>
                <a href="#"><li>Paragraph Tag</li></a>
                <a href="#"><li>Div Tag</li></a>
                
            </ul>
        </div>
        <div className="parent" >CSS TRICKS </div>
    </div>
    
    
  
    </div>
            </Body>
        </OuterWrapper>

    )
}

export default Card
