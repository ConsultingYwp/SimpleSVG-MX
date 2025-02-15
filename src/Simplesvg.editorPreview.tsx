import { Component, ReactNode, createElement } from "react";
import { ClickableObject } from "./components/ClickableObject";
import { SimplesvgPreviewProps } from "../typings/SimplesvgProps";

export class preview extends Component<SimplesvgPreviewProps> {
    render(): ReactNode {
        return <ClickableObject 
        width={this.props.width} 
        height={this.props.height}
        viewBox={this.props.viewBox}/>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/Simplesvg.css");
}
