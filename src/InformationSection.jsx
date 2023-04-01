import { InformationElement } from "./InformationElement"

export const InformationSection = (props) =>{
    const buttonClick = () =>{
        props.onClickGetHeader(props.data)
    }
    return (
    
        <div>
            <h2 className="header">{props.headerName}</h2>
            {props.data.map((dataElement , index)  =>{
                return (
                    <InformationElement key={index} information={dataElement}/>
            )
            })}
        <button className="liteblue" onClick= {buttonClick}>Hit me up </button>
        </div>
    )
}