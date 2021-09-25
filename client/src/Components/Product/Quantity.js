import React, { Component } from 'react';

class Quantity extends Component {
  state = {
    value: 1,
  };

  decrease = () => {
    this.setState({ value: this.state.value - 1 });
  };

  increase = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <>
        <div className='col-lg-6 d-flex mt-2' style={{ paddingRight: '5px' }}>
          <button
            type='button'
            tabindex='1'
            className='btn-outline-light p-2'
            onClick={this.decrease}
            style={{
              border: '1px solid #ccc',
              boxShadow: 'unset',
              width: '3rem',
              height: '3rem',
              color: 'gray',
            }}
          >
            <i class='bi bi-dash-lg' />
          </button>
          <input
            className='quantity text-center'
            name='quantity'
            tabindex='1'
            value={this.state.value}
            onChange={() => console.log('change')}
            style={{
              width: '100%',
              height: '3rem',
            }}
          ></input>
          <button
            type='button'
            tabindex='1'
            className='btn-outline-light p-2'
            onClick={this.increase}
            style={{
              border: '1px solid #ccc',
              boxShadow: 'unset',
              width: '3rem',
              height: '3rem',
              color: 'gray',
            }}
          >
            <i class='bi bi-plus-lg' />
          </button>
        </div>
      </>
    );
  }
}
export default Quantity;
