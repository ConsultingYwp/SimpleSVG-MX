/**
 * This file was generated from Simplesvg.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, ListValue, ListActionValue, ListAttributeValue, WebImage } from "mendix";

export interface SimplesvgContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    objectlist?: ListValue;
    onclickobject?: ListActionValue;
    attributehtml?: ListAttributeValue<string>;
    bgImage?: DynamicValue<WebImage>;
    width: string;
    height: string;
    viewBox: string;
}

export interface SimplesvgPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    objectlist: {} | { caption: string } | { type: string } | null;
    onclickobject: {} | null;
    attributehtml: string;
    bgImage: { type: "static"; imageUrl: string; } | { type: "dynamic"; entity: string; } | null;
    width: string;
    height: string;
    viewBox: string;
}
