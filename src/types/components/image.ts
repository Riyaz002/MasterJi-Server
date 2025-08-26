import { Component } from "../components";

export interface Image extends Component {
    type: 'image';
    props: {
        src: string;
        alt?: string;
        description?: string;
    };
}