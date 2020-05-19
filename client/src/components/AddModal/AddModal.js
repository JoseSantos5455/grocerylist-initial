import React from 'react';
import './AddModal.scss';

class AddModal extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            itemDesc: '',

        }
    }

    componentDidMount(){
        this.itemInput.focus(); 
     }

    handleDescChange(event) {
        this.setState({itemDesc: event.target.value});
    }

    handleSubmit(event) {
        console.log('A item was submitted: ' + this.state);
        event.preventDefault();

        this.props.addItem({
            content: this.state.itemDesc
        })

        this.setState({itemDesc: ''});
    }

    render(){
        return(
            <div className="addModalBlocker">
                <div className="addModal">
                    <form className="modalWrapper" onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="addTitle">
                            Add Item
                        </div>
                        <div className ="formWrapper">
                            <div className="addForm" onSubmit={(e) => this.handleSubmit(e)}>
                                <div className="addFormItemDesc">
                                    <label>
                                        Item Description
                                    </label>
                                    <input className="itemInput" type="text" name="itemDesc" 
                                        ref={(input) => { this.itemInput = input; }} 
                                        value={this.state.itemDesc} 
                                        onChange={(e) => this.handleDescChange(e)}
                                        placeholder={'oreos...'} 
                                        // TODO add random placeholder item generation
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="tools">
                            <div className="toolSection">
                                <button type="submit" value="Submit" className="confirm">Add Item</button>
                            </div>
                            <div className="toolSection">
                                <button onClick={() => this.props.triggerClose()} className="cancel">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddModal;