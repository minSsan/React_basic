import { MediaSize } from '../../MediaSize/MediaSize';
import styled from 'styled-components';

const ImageDiv = styled.div`
    display: inline-block;

    width: ${(props) => props.width};
    height: ${(props) => props.height};

    margin: ${(props) => props.margin ? props.margin : "0"};

    transform: translateY(${(props) => props.y});
    transform: translateX(${(props) => props.x});

    background-image: url(${(props) => 'img/'+props.image});
    background-size: contain;
    background-repeat: no-repeat;

    @media only screen and (max-width: ${MediaSize.Mobile_max}) {
        width: ${(props) => props.m_width ? props.m_width : "initial"};
        height: ${(props) => props.m_height ? props.m_height : "initial"};
        
        margin: 0;
        transform: translate(0);
    }
`;

const Image = styled.img`

`;

export { ImageDiv, Image };