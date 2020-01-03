import * as React from 'react';

interface Props {
  userName: string;
  onChange: (name: string) => void;
}

export const NameEditComponent = (props: Props) => {
  return (
    <div>
      <input
        value={props.userName}
        onChange={(e: any) => props.onChange(e.target.value)}
      />
    </div>
  );
};
