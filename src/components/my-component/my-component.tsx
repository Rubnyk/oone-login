import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  

  render() {
    return <div>
      <div>
        Name:<input type="text" placeholder="User name"></input>
      </div>
      <div>
        Passowrd:<input type="password" placeholder="Password"></input>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>;
  }
}
