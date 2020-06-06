import {Component} from 'react'


export class Input extends Component {
    render() {
        return (
            <div className="mb-4">
                <input onChange={this.props.onChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder={this.props.placeholder} input={this.props.input} />
            </div>
        )
    }
}
