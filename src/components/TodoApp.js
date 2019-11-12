
class ToDoApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions =this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleData = this.handleData.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options:['Thing1','Thing2', 'Thing3']
        }
    }
    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => {
            return{
                options: prevState.options.filter((option) =>{
                    return optionToRemove !== option;
                })
            };
        });
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
 
    handleData(option) {
        if (!option){
            return "Enter valid value to add item";
        } else if (this.state.options.indexOf(option) > -1){
            return "This option already exists";
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }))
            }
        }catch (e) {};
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !==
            this.state.options.length) {
                const json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
    }
    render() {
        const title = "ToDo App";
        const subtitle = "Business Goals";
        return(
        <div>
            <Header  title={title} subtitle={subtitle} />
        <Action 
        hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}
        />
        <Options
            options = {this.state.options} 
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
     />
        <AddOption 
            handleData={this.handleData} />
        </div>
        );
    }
}
