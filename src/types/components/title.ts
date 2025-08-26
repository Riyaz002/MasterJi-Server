import { Component } from "../components";

export interface Text extends Component {
    type: 'text';
    props: {
        content: string;
        fontSize?: number;
        color?: string;
        bold?: boolean;
        italic?: boolean;
        underline?: boolean;
    };
}