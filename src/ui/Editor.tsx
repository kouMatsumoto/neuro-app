import { Textarea } from '@chakra-ui/react';
import React from 'react';

export const Editor: React.VFC<{ onSave: (value: string) => void }> = ({ onSave }) => {
  const [value, setValue] = React.useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.key === 'Enter') {
      e.preventDefault();
      onSave(value);
      setValue('');
    }
  };

  return (
    <Textarea
      placeholder="Here is a sample placeholder"
      value={value}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      padding="8px"
      _focus={{
        borderColor: '#b5b3b9',
      }}
    />
  );
};
