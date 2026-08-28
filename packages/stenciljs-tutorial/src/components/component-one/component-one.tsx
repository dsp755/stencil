import { Component, Event, EventEmitter, Host, h } from '@stencil/core';

@Component({
  tag: 'component-one',
  styleUrl: 'component-one.css',
  shadow: true,
})
export class ComponentOne {
  @Event() componentClick!: EventEmitter<void>;

  render() {
    return (
      <Host>
        <slot></slot>
        <div>Component One</div>
        <button onClick={() => this.componentClick.emit()}>Click</button>
      </Host>
    );
  }
}
