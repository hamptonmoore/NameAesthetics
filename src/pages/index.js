import Router from 'next/router';
import {Input} from '../component/input';

class Index extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            first: undefined,
            last: undefined,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (item, value) {
        if (value == 'first') {
            this.setState({first: item});
        } else if (value == 'last'){
            this.setState({last: item});
        }
        
    }

    render() {
    
        return(
            
            <div className="flex justify-center">
                <div className="p-12 shadow rounded bg-white m-8">
                    <h1 className="text-black text-4xl mb-6 -mt-4">Generate an aesthetic based on your name</h1>
                    <div className="w-full mt-4">
                        <form >
                                <Input onChange={(e) => {this.handleChange(e.target.value, 'first')}} placeholder="First Name" input={this.state.first} />
                                <Input onChange={(e) => {this.handleChange(e.target.value, 'last')}} placeholder="Last Name" input={this.state.first} />
                        </form>
                        <button onClick={() => Router.push(`/${this.state.first}/${this.state.last}`)} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full`} type="button">
                            View
                        </button>
                    </div>

                </div>

                <img src="https://hampton.goatcounter.com/count?p=/projects/nameaesthetics/index"></img>
            </div>
        )

    }
}

export default Index;