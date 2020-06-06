import {Component} from 'react'


export class Tile extends Component {
    render() {
        return (
            <div className={`bg-cover bg-center h-auto ${this.props.span == 2? 'col-span-2': 'col-span-3'}`} style={{backgroundImage: `url(https://picsum.photos/seed/${encodeURI(this.props.seed + '-' + this.props.id)}/1000?1)`}}></div>
        )
    }
}
