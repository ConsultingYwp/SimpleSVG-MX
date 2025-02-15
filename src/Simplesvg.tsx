import { Component, ReactNode, createElement } from "react";
import { ClickableObject } from "./components/ClickableObject"; 
import { SimplesvgContainerProps } from "../typings/SimplesvgProps";
import "./ui/Simplesvg.css";

export class Simplesvg extends Component<SimplesvgContainerProps> {
    render(): ReactNode {
        return <ClickableObject 
        objectlist={this.props.objectlist} 
        onclickobject={this.props.onclickobject} 
        attributehtml={this.props.attributehtml} 
        width={this.props.width} 
        height={this.props.height}
        viewBox={this.props.viewBox}
        bgImage={this.props.bgImage}
        />;
    }
}
