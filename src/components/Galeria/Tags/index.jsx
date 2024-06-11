import styled from "styled-components"
import tags from "./tags.json"

const TagContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 65px;
    margin-top: 56px;
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`;

const ButtonTag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover{
        border-color: #C98CF1;
    }

`
const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;

`


const Tags = ( {onTagSelect} ) => {
    return(
        <>
        <TagContainer>
            <TagTitulo style={{ color: '#D9D9D9', fontSize: '24px' }}>Buscar por tags:</TagTitulo>

            <Div>
            {tags.map( (tag) =>{
                    return <ButtonTag key={tag.id} onClick={ () => onTagSelect(tag.id)} >{tag.titulo}</ButtonTag>
                } )}
            </Div>
            
        </TagContainer>

        </>
    )
}


export default Tags