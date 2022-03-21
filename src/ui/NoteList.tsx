import { Box, Code } from '@chakra-ui/react';
import React from 'react';
import { Document } from '../models';

export const Note: React.VFC<{ data: Document }> = ({ data }) => {
  return (
    <Box bg="#FFFFFF" color="#444444" padding="12px">
      <Code whiteSpace="pre" fontSize="11px">
        {JSON.stringify(data, null, 2)}
      </Code>
    </Box>
  );
};

export const NoteList: React.VFC<{ data: Document[] }> = ({ data }) => {
  return (
    <Box>
      {data.map((v, i) => (
        <Note key={i} data={v} />
      ))}
    </Box>
  );
};
