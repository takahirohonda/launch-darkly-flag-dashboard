import * as React from 'react';

interface UserSelectionProps {
  userList: string[];
  onChangeSelection?: (user: string) => void;
  setAnimationProp?: (bool: boolean) => void;
}

// NOTE: the component is defined as below:
// Interface Component<P = {}, S = {}> extends ComponentLifecycle<P, S> { }
// Therefore, if we don't put { value: string }, we will get error: Property 'value' does not exist on type 'Readonly<{}>'

class UserSelection extends React.Component<UserSelectionProps, { value: string }> {
  constructor(props: UserSelectionProps) {
    super(props);
    this.state = { value: 'default' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    this.setState({ value: e.target.value }, () => {
      this.props.onChangeSelection(this.state.value);
    });
  }

  render() {
    const users = this.props.userList.map((item: string, index: number) => {
      if (item != null) {
        return (
          <option value={item} key={index}>
            {item}
          </option>
        );
      }
    });

    return (
      <select
        name='users'
        className='custom-select'
        value={this.state.value}
        onChange={this.handleChange}
        onMouseEnter={()=>this.props.setAnimationProp(false)}
      >
        <option value='default'>All users</option>
        {users}
      </select>
    );
  }
}

export default UserSelection;
