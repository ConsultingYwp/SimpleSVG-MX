import { Component, ReactNode, createElement } from "react";
import { ListValue, ListActionValue, ObjectItem, ListAttributeValue , DynamicValue , WebImage } from "mendix";

export interface ClickableObjectProps {
    objectlist?: ListValue;
    onclickobject?: ListActionValue;
    attributehtml?: ListAttributeValue<string>;
    width: string;
    height: string;
    viewBox: string;
    bgImage?: DynamicValue<WebImage>;
}

export class ClickableObject extends Component<ClickableObjectProps> {
    mxObjects: ObjectItem[] = [];
    
    clickHandler = (mxObject?: ObjectItem) => {
        console.warn(this.props.bgImage);
        if (mxObject && this.props.onclickobject) {
            this.props.onclickobject.get(mxObject).execute();
        }
    }
    render(): ReactNode {
        if (this.props.objectlist?.items) {
            this.mxObjects = this.props.objectlist.items;
        }
        const imageObject = this.props.bgImage;
        const imageURI = imageObject && imageObject.value ? imageObject.value.uri : '';
        return (
            <svg
            className="responsive-svg"
            width={this.props.width || "100%"}
            height={this.props.height || "100%"}
            viewBox={this.props.viewBox}
            preserveAspectRatio="xMidYMid meet"
        >
            {imageURI && (
                <image
                    href={imageURI}
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid meet"
                />
            )}
                {this.mxObjects.map((item, index) => {
                    const attributeValue = this.props.attributehtml?.get(item);
                    const displayValue = attributeValue ? attributeValue.value : "";
                    return (
                   
                            <g
                                key={index}
                                className="hover-link"
                                onClick={() => this.clickHandler(item)}
                                dangerouslySetInnerHTML={{ __html: displayValue || "" }}
                                style={{ width: "100%", height: "100%" }}
                            />
                        
                    );
                })}
            </svg>
        );
    }
}
