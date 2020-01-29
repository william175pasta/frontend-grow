import React from 'react'
import styled from 'styled-components'

const Element = ({ red, className }) => {
    return (
        <div className={className}>
            <div className="element__description" >
                Sed ut voluptatem neque cumque. Qui sed ut itaque est doloribus qui.
                Eos perferendis autem qui fugiat.
                </div>
        </div>
    )
}

const StyledComponents = styled(Element)`
        height: 200px;
        background-color: ${props => (props.back ? '#000' : '#fff')};
    .element__description {
        padding: 20px;
        font-size: 30px;
        background-color: ${props => (props.p ? '#aaf' : '#aff')};
    }
}
`
export default StyledComponents

