import * as React from 'react';

export const HelloWorldComponent = (props: {userName: string}) => {
  return (
    <div>
      <h2>{props.userName}</h2>
    </div>
  )
}