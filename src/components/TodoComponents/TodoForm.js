class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item1: ''
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitTodo = e => {
        e.preventDefault();
        this.props.addItem(e, this.state.item);
    };

    render() {
        console.log('rendering form', this.state.item);
        return (
            <form onSubmit={this.submitTodo}>
                <input type='text' name='item' onChange={this.handleChanges} />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;
